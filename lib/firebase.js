import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDCwE_zw3DBWR_-Ly1xkX4KadjkLPwRH1U",
  authDomain: "goal-app-c2a8f.firebaseapp.com",
  projectId: "goal-app-c2a8f",
  storageBucket: "goal-app-c2a8f.firebasestorage.app",
  messagingSenderId: "415440673109",
  appId: "1:415440673109:web:8ee00a2da20fe83670f7dc"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore
export const db = getFirestore(app)

