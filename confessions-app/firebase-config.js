// Firebase Configuration
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getDatabase, ref, push, set, onValue, update, get } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';

const firebaseConfig = {
  apiKey: "AIzaSyBJ_ZJg3NkCzQeRzJ8tlOl8kshVi8Ebsas",
  authDomain: "confessional-df2ea.firebaseapp.com",
  databaseURL: "https://confessional-df2ea-default-rtdb.firebaseio.com",
  projectId: "confessional-df2ea",
  storageBucket: "confessional-df2ea.firebasestorage.app",
  messagingSenderId: "435451645932",
  appId: "1:435451645932:web:7d7f0bab85594efbfc3ac9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Export database references
export { database, ref, push, set, onValue, update, get };
