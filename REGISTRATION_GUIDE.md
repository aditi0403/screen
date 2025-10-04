# Registration System Implementation Guide

## Overview
The authentication system now features a sophisticated multi-step registration flow with two distinct user types: **Agency** (LED screen providers) and **Client** (advertisers).

## Features Implemented

### 1. Auth Page Updates (`AuthPage.js`)
- Added two registration options with visually distinct buttons
- **Agency Registration** - Purple themed button for screen providers
- **Client Registration** - Blue themed button for advertisers
- Modern card-like UI with hover effects and animations

### 2. Agency Registration (`AgencyRegistration.js`)

#### Step 1: Agency Information
- Agency Name
- Contact Person Name
- Email Address
- Phone Number
- Password & Confirmation

#### Step 2: Location Details
- City Selection (dropdown with major Indian cities)
- Custom city option
- Complete office address
- Pincode

#### Step 3: LED Screen Details
- Dynamic screen addition (can add multiple screens)
- For each screen:
  - Location/Area name
  - Screen size (e.g., 10x20 ft)
  - Price per day (₹)
- Remove screen option (if more than 1)
- Real-time screen count display

#### Step 4: Review & Pricing Estimate
- Complete agency summary
- **Revenue Estimate Calculator**:
  - Shows total number of screens
  - Calculates estimated monthly revenue (30 days × total daily rates)
  - Displays revenue in Indian number format (₹)
- List of all screen locations with pricing

### 3. Client Registration (`ClientRegistration.js`)

#### Step 1: Personal Information
- Full Name
- Email Address
- Phone Number
- Password & Confirmation
- Real-time password match validation

#### Step 2: Business Details
- Business Name
- Business Type (dropdown with 13+ categories)
- Custom business type option
- GST Number (optional)

#### Step 3: Business Verification
- **PAN Card Number** (required, auto-uppercase)
- **Business Registration Number** (CIN/LLPIN)
- Optional fields:
  - Website URL
  - Social Media Profile

#### Step 4: Business Address
- Complete address (textarea)
- City
- State
- Pincode (6 digits)
- Registration summary card with all key details

### 4. Auth Modal Updates (`AuthModal.js`)
- Dynamic modal sizing (larger for registration forms)
- Conditional rendering based on user role
- Smooth transitions between forms
- Integration with navigation (redirects to Dashboard on completion)

## Design Features

### Visual Elements
1. **Progress Bar**: 4-step visual indicator showing current progress
2. **Card Animations**: Smooth slide transitions between steps
3. **Color Coding**:
   - Purple theme for Agency (#9333EA)
   - Blue theme for Client (#2563EB)
   - Red theme for Login/General Auth (#DC2626)

4. **Responsive Design**: 
   - Mobile-friendly layouts
   - Grid-based form layouts
   - Adaptive button sizing

5. **Dark Mode Support**: All components support dark theme

### UX Features
- **Step-by-step Flow**: One section at a time to reduce cognitive load
- **Progress Indicator**: Always visible progress bar
- **Navigation Controls**: 
  - Previous/Next buttons
  - Cancel on first step
  - Submit on final step
- **Input Validation**:
  - Required field markers (*)
  - Real-time password matching
  - Field-specific constraints (max length, format)
- **Visual Feedback**:
  - Hover effects on all interactive elements
  - Loading states
  - Success transitions

## Data Structure

### Agency Registration Data
```javascript
{
  agencyName: string,
  contactPerson: string,
  email: string,
  phone: string,
  password: string,
  city: string,
  customCity: string,
  address: string,
  pincode: string,
  screenLocations: [
    {
      location: string,
      size: string,
      pricePerDay: number
    }
  ],
  estimatedMonthlyRevenue: number,
  totalScreens: number
}
```

### Client Registration Data
```javascript
{
  fullName: string,
  email: string,
  phone: string,
  password: string,
  businessName: string,
  businessType: string,
  customBusinessType: string,
  gstNumber: string,
  panCard: string,
  businessRegistration: string,
  website: string,
  socialMedia: string,
  address: string,
  city: string,
  state: string,
  pincode: string
}
```

## Technical Implementation

### Technologies Used
- **React**: Component-based architecture
- **Framer Motion**: Smooth animations and transitions
- **React Router**: Navigation handling
- **Tailwind CSS**: Utility-first styling
- **Dark Mode**: CSS custom properties

### Key Components
1. `AuthPage.js` - Landing page with registration options
2. `AuthModal.js` - Container for authentication flows
3. `AgencyRegistration.js` - Multi-step agency onboarding
4. `ClientRegistration.js` - Multi-step client onboarding

### Animation Variants
```javascript
cardVariants = {
  enter: { x: 50, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -50, opacity: 0 }
}
```

## User Flow

### Agency Flow
1. Click "Agency" registration button on Auth Page
2. Complete 4-step registration:
   - Basic info → Location → Screen details → Review
3. View estimated revenue calculation
4. Submit and redirect to Dashboard

### Client Flow
1. Click "Client" registration button on Auth Page
2. Complete 4-step registration:
   - Personal info → Business details → Verification → Address
3. Review summary card
4. Submit and redirect to Dashboard

## Future Enhancements
- File upload for business documents
- Email verification
- OTP-based phone verification
- Real-time availability checking for screens
- Integration with payment gateway
- Advanced analytics dashboard
- Document verification status tracking

## Testing Checklist
- ✅ Navigation between steps
- ✅ Form validation
- ✅ Password matching
- ✅ Dynamic screen addition/removal (Agency)
- ✅ Revenue calculation (Agency)
- ✅ Responsive design
- ✅ Dark mode compatibility
- ✅ Animation smoothness
- ✅ Modal backdrop click handling
- ✅ Browser back button handling

## Notes
- All fields marked with * are required
- Passwords must match before proceeding
- Agency pricing is calculated assuming 100% occupancy
- GST and website fields are optional for clients
- System redirects to `/dashboard` after successful registration
