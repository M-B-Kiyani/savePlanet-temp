# Firebase Setup Guide

## Environment Variables Setup

This project uses Firebase for authentication. To protect sensitive credentials, Firebase configuration is stored in environment variables.

### Setup Steps

1. **Copy the environment template:**

   ```bash
   cp .env.example .env
   ```

2. **Fill in your Firebase credentials in the `.env` file:**
   - Go to your [Firebase Console](https://console.firebase.google.com/)
   - Select your project
   - Go to Project Settings > General
   - Scroll down to "Your apps" section
   - Copy the configuration values to your `.env` file

3. **Environment Variables:**
   ```
   VITE_FIREBASE_API_KEY=your_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
   VITE_FIREBASE_PROJECT_ID=your_project_id_here
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
   VITE_FIREBASE_APP_ID=your_app_id_here
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id_here
   ```

### Security Notes

- **Never commit the `.env` file to version control**
- The `.env` file is already added to `.gitignore`
- Use `.env.example` as a template for other developers
- For production deployments, set these environment variables in your hosting platform

### Deployment

When deploying to production:

1. **Vercel/Netlify:** Add environment variables in your dashboard
2. **Heroku:** Use `heroku config:set VITE_FIREBASE_API_KEY=your_value`
3. **Other platforms:** Refer to their documentation for setting environment variables

### Troubleshooting

If you see Firebase connection errors:

1. Check that all environment variables are set in your `.env` file
2. Ensure the `.env` file is in the project root
3. Restart your development server after adding environment variables
4. Check the browser console for specific error messages
