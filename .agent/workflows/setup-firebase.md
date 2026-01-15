---
description: Quickly initialize Firebase with Firestore, Analytics, and AI SDK
---

# Setup Firebase Workflow

This workflow automates the configuration of Firebase for a new project.

## Prerequisites
- [ ] Firebase CLI installed (`npm install -g firebase-tools`)
- [ ] User is logged in to Firebase (`firebase login`)

## Steps

### 1. Project Initialization
// turbo
1. Run `firebase init` and select:
   - Firestore
   - Functions (optional, for AI logic)
   - Hosting (optional)
   - Storage (optional)
   - Analytics

### 2. Configure Firestore
// turbo
2. Create `firestore.rules` and `firestore.indexes.json` with sensible defaults if they don't exist.

### 3. Setup Client SDK
// turbo
3. Create `src/firebase/config.js` with the following structure (placeholders for env vars):
   ```javascript
   import { initializeApp } from "firebase/app";
   import { getFirestore } from "firebase/firestore";
   import { getAnalytics } from "firebase/analytics";
   import { getVertexAI, getGenerativeModel } from "firebase/vertex-ai-preview";

   const firebaseConfig = {
     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
     authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
     projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
     storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
     messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
     appId: import.meta.env.VITE_FIREBASE_APP_ID,
     measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
   };

   const app = initializeApp(firebaseConfig);
   export const db = getFirestore(app);
   export const analytics = getAnalytics(app);

   // AI SDK (Vertex AI for Firebase)
   export const vertexAI = getVertexAI(app);
   export const model = getGenerativeModel(vertexAI, { model: "gemini-1.5-flash" });
   ```

### 4. Setup Environment Variables
// turbo
4. Create `.env.example` with the necessary Firebase environment variables.

### 5. Verify Setup
// turbo
5. Check if `firebase.json` is correctly configured.
