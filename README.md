# SavePlanetEarth - Carbon Credit Marketplace

A modern React-based carbon credit marketplace platform that enables users to purchase verified carbon credits and invest in climate action projects. Built with React, Vite, and Firebase Authentication.

## 🌍 Project Overview

SavePlanetEarth is a comprehensive carbon offset marketplace that connects individuals and businesses with verified carbon reduction projects worldwide. The platform offers transparent, blockchain-verified carbon credits from nature-based solutions, renewable energy projects, and waste management initiatives.

## ✨ Features

### 🔐 Authentication & Security

- **Email Authentication** with verification required
- **Google OAuth** integration
- **Password Reset** functionality
- **Email Verification** with resend capability
- **Secure User Sessions** with Firebase Auth

### 🛒 Carbon Credit Marketplace

- **Verified Projects** with detailed information
- **Interactive Project Cards** with filtering capabilities
- **Project Detail Pages** with comprehensive data
- **Purchase Flow** with quantity selection
- **Real-time Availability** tracking

### 💰 Investment Platform (IICA)

- **Climate Action Investments** through NFTs
- **Project Filtering** by type and category
- **Investment Tracking** and portfolio management

### 🗺️ Interactive Features

- **Project Location Maps** with coordinates
- **Responsive Design** for all devices
- **Mobile-Optimized** navigation and UI
- **Smooth Scrolling** and page transitions

### 📱 User Experience

- **Responsive Header** with mobile menu
- **Email Verification Banner** for unverified users
- **Loading States** and error handling
- **Success/Error Messages** with user feedback
- **Auto Scroll-to-Top** on navigation

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase account for authentication

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd saveplanetearth-marketplace
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Firebase Setup**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication with Email/Password and Google providers
   - Copy your Firebase config to `src/firebase.js`
   - Enable email verification in Firebase Auth settings

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
src/
├── components/           # Reusable components
│   ├── ui/              # UI components (Header, Footer, Modals)
│   ├── About.jsx        # About section component
│   ├── Analytics.jsx    # Analytics dashboard
│   ├── CarbonProjects.jsx
│   ├── Features.jsx     # How it works section
│   └── Offset.jsx       # Carbon offset information
├── pages/               # Page components
│   ├── HomePage.jsx     # Landing page
│   ├── ProjectsPage.jsx # Carbon projects listing
│   ├── ProjectDetailPage.jsx # Individual project details
│   ├── InvestPage.jsx   # Investment opportunities
│   ├── HowItWorksPage.jsx # Process explanation
│   ├── AboutPage.jsx    # About the company
│   └── MarketplacePage.jsx # Marketplace overview
├── hooks/               # Custom React hooks
│   ├── useAuth.js       # Authentication logic
│   ├── useProjects.js   # Project data management
│   └── useProjectFilter.js # Filtering logic
├── data/                # Static data and configurations
│   └── projects.js      # Project data
├── styles/              # Global styles and variables
├── firebase.js          # Firebase configuration
└── main.jsx            # Application entry point
```

## 🔧 Key Technologies

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Firebase Auth** - Authentication and user management
- **CSS3** - Modern styling with custom properties
- **ESLint** - Code linting and formatting

## 🎨 Design Features

- **Green Theme** reflecting environmental focus
- **Responsive Design** for mobile, tablet, and desktop
- **Smooth Animations** and transitions
- **Accessible UI** with proper contrast and focus states
- **Modern Card-based Layout** for project display

## 🔐 Authentication Flow

1. **Sign Up**: User creates account → Email verification sent
2. **Email Verification**: User clicks link in email → Account activated
3. **Sign In**: Verified users can access full platform
4. **Password Reset**: Users can reset forgotten passwords
5. **Google OAuth**: Alternative sign-in method

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🌟 Key Components

### Authentication Modal

- Multi-state modal (login/signup/verification/reset)
- Email verification handling
- Password reset functionality
- Google OAuth integration

### Project Cards

- Interactive project information
- Filtering and search capabilities
- Responsive grid layout
- Purchase and investment actions

### Navigation

- Fixed header with smooth scrolling
- Mobile hamburger menu
- User authentication status
- Same-page scroll-to-top functionality

## 🚀 Deployment

The project is configured for easy deployment to:

- **Vercel** (recommended for React apps)
- **Netlify**
- **Firebase Hosting**
- **GitHub Pages**

## 📄 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🌱 About SavePlanetEarth

SavePlanetEarth is dedicated to making carbon offsetting accessible, transparent, and impactful. Through blockchain technology and verified projects, we connect individuals and businesses with meaningful climate action opportunities worldwide.

---

**Built with 💚 for a sustainable future**
