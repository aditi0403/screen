import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cities = [
  'Jabalpur', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 
  'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Indore', 'Bhopal', 'Other'
];

const AgencyRegistration = ({ onComplete, onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    agencyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    
    // Step 2: Location
    city: '',
    customCity: '',
    address: '',
    pincode: '',
    
    // Step 3: Screen Details
    numberOfScreens: '',
    screenLocations: [{ location: '', size: '', pricePerDay: '' }],
  });

  const totalSteps = 4;

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addScreenLocation = () => {
    setFormData(prev => ({
      ...prev,
      screenLocations: [...prev.screenLocations, { location: '', size: '', pricePerDay: '' }]
    }));
  };

  const updateScreenLocation = (index, field, value) => {
    const updated = [...formData.screenLocations];
    updated[index][field] = value;
    setFormData(prev => ({ ...prev, screenLocations: updated }));
  };

  const removeScreenLocation = (index) => {
    if (formData.screenLocations.length > 1) {
      setFormData(prev => ({
        ...prev,
        screenLocations: prev.screenLocations.filter((_, i) => i !== index)
      }));
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    // Calculate estimated pricing
    const totalScreens = formData.screenLocations.length;
    const avgPrice = formData.screenLocations.reduce((sum, screen) => 
      sum + (parseFloat(screen.pricePerDay) || 0), 0) / totalScreens || 0;
    
    onComplete({
      ...formData,
      estimatedMonthlyRevenue: avgPrice * 30 * totalScreens,
      totalScreens
    });
  };

  const cardVariants = {
    enter: { x: 50, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {[1, 2, 3, 4].map(step => (
            <div
              key={step}
              className={`flex-1 h-2 rounded-full mx-1 transition-all duration-300 ${
                step <= currentStep ? 'bg-red-600' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Step {currentStep} of {totalSteps}
        </p>
      </div>

      {/* Form Steps */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          variants={cardVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Agency Information
              </h3>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Agency Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.agencyName}
                  onChange={(e) => updateField('agencyName', e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 dark:text-white"
                  placeholder="Enter your agency name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Contact Person Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactPerson}
                  onChange={(e) => updateField('contactPerson', e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 dark:text-white"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 dark:text-white"
                    placeholder="agency@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 dark:text-white"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Password *
                  </label>
                  <input
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) => updateField('password', e.target.value)}
                    className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 dark:text-white"
                    placeholder="••••••••"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => updateField('confirmPassword', e.target.value)}
                    className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 dark:text-white"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Location Details */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Location Details
              </h3>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  City *
                </label>
                <select
                  required
                  value={formData.city}
                  onChange={(e) => updateField('city', e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 dark:text-white"
                >
                  <option value="">Select City</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              {formData.city === 'Other' && (
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Specify City *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.customCity}
                    onChange={(e) => updateField('customCity', e.target.value)}
                    className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 dark:text-white"
                    placeholder="Enter your city"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Office Address *
                </label>
                <textarea
                  required
                  value={formData.address}
                  onChange={(e) => updateField('address', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 dark:text-white resize-none"
                  placeholder="Enter complete office address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Pincode *
                </label>
                <input
                  type="text"
                  required
                  value={formData.pincode}
                  onChange={(e) => updateField('pincode', e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 dark:text-white"
                  placeholder="Enter pincode"
                  maxLength={6}
                />
              </div>
            </div>
          )}

          {/* Step 3: Screen Details */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  LED Screen Details
                </h3>
                <button
                  type="button"
                  onClick={addScreenLocation}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  + Add Screen
                </button>
              </div>

              <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                {formData.screenLocations.map((screen, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-gray-50 dark:bg-dark-800 rounded-lg border border-gray-200 dark:border-dark-700"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Screen {index + 1}
                      </h4>
                      {formData.screenLocations.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeScreenLocation(index)}
                          className="text-red-600 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      )}
                    </div>

                    <div className="space-y-3">
                      <input
                        type="text"
                        required
                        value={screen.location}
                        onChange={(e) => updateScreenLocation(index, 'location', e.target.value)}
                        className="w-full px-3 py-2 bg-white dark:bg-dark-900 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 dark:text-white text-sm"
                        placeholder="Screen location (e.g., Napier Town, Main Square)"
                      />

                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          required
                          value={screen.size}
                          onChange={(e) => updateScreenLocation(index, 'size', e.target.value)}
                          className="w-full px-3 py-2 bg-white dark:bg-dark-900 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 dark:text-white text-sm"
                          placeholder="Size (e.g., 10x20 ft)"
                        />

                        <input
                          type="number"
                          required
                          value={screen.pricePerDay}
                          onChange={(e) => updateScreenLocation(index, 'pricePerDay', e.target.value)}
                          className="w-full px-3 py-2 bg-white dark:bg-dark-900 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900 dark:text-white text-sm"
                          placeholder="Price/Day (₹)"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Review & Pricing Estimate */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Review & Pricing Estimate
              </h3>

              <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-xl border border-red-200 dark:border-red-700">
                <h4 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-4">
                  Agency Summary
                </h4>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p><span className="font-medium">Agency:</span> {formData.agencyName}</p>
                  <p><span className="font-medium">Contact:</span> {formData.contactPerson}</p>
                  <p><span className="font-medium">Email:</span> {formData.email}</p>
                  <p><span className="font-medium">Phone:</span> {formData.phone}</p>
                  <p><span className="font-medium">Location:</span> {formData.city === 'Other' ? formData.customCity : formData.city}</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl border border-green-200 dark:border-green-700">
                <h4 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
                  Revenue Estimate
                </h4>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Total Screens: <span className="font-semibold">{formData.screenLocations.length}</span>
                  </p>
                  <div className="text-2xl font-bold text-green-700 dark:text-green-400">
                    ₹{(formData.screenLocations.reduce((sum, s) => sum + (parseFloat(s.pricePerDay) || 0), 0) * 30).toLocaleString('en-IN')}
                    <span className="text-sm font-normal text-gray-600 dark:text-gray-400">/month*</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    *Estimated monthly revenue based on 100% occupancy
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-dark-800 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Screen Locations
                </h4>
                <div className="space-y-2">
                  {formData.screenLocations.map((screen, index) => (
                    <div key={index} className="flex justify-between text-sm text-gray-700 dark:text-gray-300 py-2 border-b border-gray-200 dark:border-dark-700 last:border-0">
                      <span>{screen.location} ({screen.size})</span>
                      <span className="font-semibold">₹{screen.pricePerDay}/day</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8 gap-4">
        <button
          type="button"
          onClick={currentStep === 1 ? onBack : prevStep}
          className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-dark-800 transition-colors"
        >
          {currentStep === 1 ? 'Cancel' : 'Previous'}
        </button>

        <button
          type="button"
          onClick={currentStep === totalSteps ? handleSubmit : nextStep}
          className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors shadow-lg"
        >
          {currentStep === totalSteps ? 'Complete Registration' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default AgencyRegistration;
