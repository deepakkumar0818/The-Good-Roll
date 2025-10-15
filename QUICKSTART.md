# Quick Start Guide

## Running the Application

The development server is already running in the background. Open your browser and navigate to:

**http://localhost:3000**

## Application Modules

### 1. 🏠 Dashboard (/)
- Real-time statistics and KPIs
- Quick overview of farmers, locations, payments, and materials
- Recent activity tracking
- Pending actions summary

### 2. 👨‍🌾 Farmer Registration (/farmers)
Features:
- **Personal Information**: Name, phone, email, Aadhaar, PAN
- **Address Details**: Village, district, state, pincode
- **Land Information**: Land size, crop cycles, bamboo variety
- **Payment Preferences**: Bank transfer, UPI, or cash
- **Document Upload**: Aadhaar card and photo upload
- **Farmer List**: Search, filter, and view all registered farmers

### 3. 📍 Geo-Location Tracking (/geo-location)
Features:
- **Map View**: Interactive visualization of farmer locations
  - *Note: Ready for Google Maps/Mapbox integration*
  - Shows farmer fields and pickup routes
- **List View**: Tabular display of all locations with coordinates
- **Route Optimization**: Plan efficient pickup routes
- **Analytics**: Coverage area, active routes, distance metrics

### 4. 💰 Payment Management (/payments)
Features:
- **Payment Processing**: Create new payments
- **Payment Methods**: Bank transfer, UPI, Cash support
- **Advance Tracking**: Record and deduct advance payments
- **Deduction Management**: Track quality or other deductions
- **Net Calculation**: Automatic net payable amount calculation
- **Payment History**: Complete transaction records
- **Status Tracking**: Completed, pending, and failed payments

### 5. ⚖️ Quality & Weight Tracking (/quality-tracking)
Features:
- **Quality Checks**: Record bamboo quality assessments
- **Weight Measurement**: Track pickup weights
- **Quality Grading**: Grade A, B, C, and Rejected classifications
- **Barcode/QR Integration**: Scan and track individual batches
- **Measurements**: Moisture content, diameter, length tracking
- **Photo Documentation**: Capture up to 4 photos per pickup
- **Analytics**: Quality distribution, average weights, trends

## Key Features

### ✅ Professional UI/UX
- Clean, modern design with Tailwind CSS
- Responsive layout for all screen sizes
- Intuitive navigation with sidebar
- Color-coded status indicators
- Real-time search and filtering

### 📊 Data Management
- Mock data for all modules
- Form validation
- Data persistence ready (connect to backend)

### 🎨 Visual Elements
- Icons from Lucide React
- Gradient color schemes
- Animated elements
- Stats cards with trend indicators
- Interactive tables

## Next Steps for Production

### Backend Integration
1. **API Endpoints**: Create REST or GraphQL API
2. **Database**: PostgreSQL, MongoDB, or MySQL
3. **Authentication**: JWT-based auth system
4. **File Upload**: AWS S3 or similar for documents/photos

### Maps Integration
```bash
npm install @react-google-maps/api
# OR
npm install mapbox-gl react-map-gl
```

### Enhanced Features
1. **Real-time Updates**: Socket.io or Pusher
2. **SMS/WhatsApp**: Twilio integration for notifications
3. **Reports**: PDF generation with jsPDF
4. **Analytics**: Advanced charts with Recharts
5. **Mobile App**: React Native version

### Deployment
```bash
# Build for production
npm run build

# Deploy to Vercel (recommended)
vercel deploy

# OR deploy to your server
npm start
```

## File Structure Reference

```
Components by Module:
├── Farmers
│   ├── FarmerRegistrationForm.tsx - Registration form
│   └── FarmersList.tsx - Farmers table
├── Geo-Location
│   ├── MapView.tsx - Map visualization
│   └── LocationsList.tsx - Locations table
├── Payments
│   ├── PaymentForm.tsx - Payment processing form
│   └── PaymentsList.tsx - Payment history
└── Quality
    ├── QualityCheckForm.tsx - Quality check form
    └── QualityRecordsList.tsx - Quality records table
```

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
npm run dev
```

### Module Not Found
```bash
npm install
```

### Build Errors
```bash
rm -rf .next
npm run build
```

## Support

For questions or issues:
- Check the main README.md
- Review component documentation in code
- Inspect browser console for errors

---

**Note**: This is a frontend-only application. Connect to your backend API to enable full functionality.

