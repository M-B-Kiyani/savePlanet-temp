# Firebase Authentication Setup

This document outlines the Firebase authentication integration that has been implemented in the SavePlanetEarth application.

## Features Implemented

### 🔐 Authentication Methods

- **Email/Password Authentication**: Users can sign up and log in with email and password
- **Google Sign-In**: One-click authentication with Google accounts
- **Automatic Session Management**: Users stay logged in across browser sessions

### 🎨 User Interface

- **Authentication Modal**: Clean, responsive modal for login/signup
- **Dynamic Header**: Shows user email and logout button when authenticated
- **Smart Buy Button**: ProjectDetailPage buy button shows "Sign in to Buy" when not authenticated

### 🔧 Technical Implementation

#### Files Created/Modified:

1. **`src/firebase.js`** - Firebase configuration and auth functions
2. **`src/components/ui/AuthModal.jsx`** - Authentication modal component
3. **`src/components/ui/AuthModal.css`** - Modal styling
4. **`src/hooks/useAuth.js`** - Authentication state management hook
5. **`src/components/ui/Header.jsx`** - Updated to show user state
6. **`src/components/ui/Header.css`** - Added user menu styles
7. **`src/App.jsx`** - Integrated authentication context
8. **All page components** - Updated to pass auth props

#### Key Functions:

- `signUp(email, password)` - Create new user account
- `signIn(email, password)` - Sign in existing user
- `signInWithGoogle()` - Google OAuth authentication
- `logOut()` - Sign out current user
- `onAuthStateChanged()` - Listen for auth state changes

### 🚀 How It Works

1. **User clicks Login/Signup** → Opens authentication modal
2. **User enters credentials** → Firebase handles authentication
3. **Success** → Modal closes, header updates with user info
4. **Error** → Error message displayed in modal
5. **Logout** → User signed out, header reverts to login/signup buttons

### 🎯 User Experience

- **Seamless Integration**: Authentication doesn't disrupt the user flow
- **Responsive Design**: Modal works on all screen sizes
- **Error Handling**: Clear error messages for failed authentication
- **Loading States**: Visual feedback during authentication process
- **Persistent Sessions**: Users stay logged in between visits

### 🔒 Security Features

- **Firebase Security**: Leverages Firebase's built-in security
- **Environment Variables**: Sensitive credentials stored in environment variables (not in code)
- **Git Security**: Firebase credentials excluded from version control via .gitignore
- **Input Validation**: Email format and password length validation
- **Secure Storage**: Tokens managed by Firebase SDK
- **HTTPS Only**: All authentication requests over secure connections
- **Email Verification**: Users must verify email before accessing the platform

### 🔧 Environment Setup

**Important**: Firebase credentials are now stored in environment variables for security.

1. **Copy environment template:**

   ```bash
   cp .env.example .env
   ```

2. **Add your Firebase credentials to `.env`:**

   ```
   VITE_FIREBASE_API_KEY=your_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
   VITE_FIREBASE_PROJECT_ID=your_project_id_here
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
   VITE_FIREBASE_APP_ID=your_app_id_here
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id_here
   ```

3. **Never commit the `.env` file** - it's already in `.gitignore`

See `FIREBASE_SETUP.md` for detailed setup instructions.

### 📱 Mobile Responsive

- **Touch-Friendly**: Buttons sized for mobile interaction
- **Adaptive Layout**: Modal adjusts to screen size
- **Mobile Menu**: User info displayed in mobile navigation

## Usage

Users can now:

1. **Sign up** for new accounts
2. **Log in** to existing accounts
3. **Use Google Sign-In** for quick access
4. **Stay logged in** across sessions
5. **Log out** when needed
6. **See their email** in the header when authenticated
7. **Access purchase functionality** when logged in

The authentication is fully integrated and ready for production use with your existing Firebase project configuration.
