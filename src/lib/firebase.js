// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Note: Firebase AI Logic may not be available in all environments yet
// import { getAI, getGenerativeModel, GoogleAIBackend } from "firebase/ai";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2ROsuY6k_aXHjSzBoaINeLdFcE93aY14",
  authDomain: "refridgex.firebaseapp.com",
  projectId: "refridgex",
  storageBucket: "refridgex.firebasestorage.app",
  messagingSenderId: "1003289368265",
  appId: "1:1003289368265:web:ae2623aecaa818fb8f1f18",
  measurementId: "G-5H22VER209"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (only in browser environment)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize the Gemini Developer API backend service (commented out for now)
// const ai = getAI(app, { backend: new GoogleAIBackend() });

// Create a GenerativeModel instance (commented out for now)
// const model = getGenerativeModel(ai, { model: "gemini-2.5-flash" });

export { app, analytics };
