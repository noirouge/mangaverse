import './assets/bootstrap.css';
import './assets/main.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// FIREBASE:BEGIN
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyD5x3NHapl4oO4SQ5OgKqlJdSnRLCyvrP4",
  authDomain: "mangaversedb-api.firebaseapp.com",
  databaseURL: "https://mangaversedb-api-default-rtdb.firebaseio.com",
  projectId: "mangaversedb-api",
  storageBucket: "mangaversedb-api.appspot.com",
  messagingSenderId: "604732299170",
  appId: "1:604732299170:web:d18343801bdde47a5404fb"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);
// Initialize Firebase Storage and get a reference to the service
const storage = getStorage(firebaseApp);
//FIRABASE:END



const app = createApp(App)
// app.config.globalProperties.$db = db;
app.provide("db", db);
app.provide("storage", storage);
app.use(createPinia())
app.use(router)

app.mount('#app')
