#!/usr/bin/env node

/**
 * Environment Variables Checker
 * Verifies that all required Firebase environment variables are set
 */

const requiredEnvVars = [
  "VITE_FIREBASE_API_KEY",
  "VITE_FIREBASE_AUTH_DOMAIN",
  "VITE_FIREBASE_PROJECT_ID",
  "VITE_FIREBASE_STORAGE_BUCKET",
  "VITE_FIREBASE_MESSAGING_SENDER_ID",
  "VITE_FIREBASE_APP_ID",
];

const optionalEnvVars = ["VITE_FIREBASE_MEASUREMENT_ID"];

console.log("🔍 Checking Firebase environment variables...\n");

let hasErrors = false;

// Check required variables
console.log("📋 Required variables:");
requiredEnvVars.forEach((envVar) => {
  const value = process.env[envVar];
  if (value) {
    console.log(`✅ ${envVar}: Set (${value.substring(0, 10)}...)`);
  } else {
    console.log(`❌ ${envVar}: Missing`);
    hasErrors = true;
  }
});

// Check optional variables
console.log("\n📋 Optional variables:");
optionalEnvVars.forEach((envVar) => {
  const value = process.env[envVar];
  if (value) {
    console.log(`✅ ${envVar}: Set (${value.substring(0, 10)}...)`);
  } else {
    console.log(`⚠️  ${envVar}: Not set (optional)`);
  }
});

console.log("\n" + "=".repeat(50));

if (hasErrors) {
  console.log("❌ Some required environment variables are missing!");
  console.log(
    "📝 Please check your .env file and ensure all Firebase credentials are set.",
  );
  console.log("📖 See FIREBASE_SETUP.md for detailed instructions.");
  process.exit(1);
} else {
  console.log("✅ All required environment variables are set!");
  console.log("🚀 Your Firebase configuration should work correctly.");
  process.exit(0);
}
