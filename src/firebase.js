// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzy8NO9H4HkeId0tli8UpoYpgMXwjzFxI",
  authDomain: "saveplanet-login.firebaseapp.com",
  projectId: "saveplanet-login",
  storageBucket: "saveplanet-login.firebasestorage.app",
  messagingSenderId: "215658391870",
  appId: "1:215658391870:web:620ab634556390d39a646f",
  measurementId: "G-VLLXH29SNZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Auth functions
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    // Send email verification
    await sendEmailVerification(userCredential.user);

    return {
      user: userCredential.user,
      error: null,
      message:
        "Account created successfully! Please check your email to verify your account.",
    };
  } catch (error) {
    return { user: null, error: error.message };
  }
};

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    // Check if email is verified
    if (!userCredential.user.emailVerified) {
      return {
        user: null,
        error:
          "Please verify your email before signing in. Check your inbox for a verification link.",
        needsVerification: true,
        unverifiedUser: userCredential.user,
      };
    }

    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error: error.message };
  }
};

export const resendEmailVerification = async (user) => {
  try {
    await sendEmailVerification(user);
    return { error: null, message: "Verification email sent successfully!" };
  } catch (error) {
    return { error: error.message };
  }
};

export const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { error: null, message: "Password reset email sent successfully!" };
  } catch (error) {
    return { error: error.message };
  }
};

export const changePassword = async (currentPassword, newPassword) => {
  try {
    const user = auth.currentUser;
    if (!user) {
      return { error: "No user is currently signed in." };
    }

    // Re-authenticate user before changing password
    const credential = EmailAuthProvider.credential(
      user.email,
      currentPassword,
    );
    await reauthenticateWithCredential(user, credential);

    // Update password
    await updatePassword(user, newPassword);
    return { error: null, message: "Password updated successfully!" };
  } catch (error) {
    return { error: error.message };
  }
};

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return { user: result.user, error: null };
  } catch (error) {
    return { user: null, error: error.message };
  }
};

export const logOut = async () => {
  try {
    await signOut(auth);
    return { error: null };
  } catch (error) {
    return { error: error.message };
  }
};

export { auth, onAuthStateChanged };
