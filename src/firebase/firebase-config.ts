import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: 'AIzaSyC0G4O5zl-tAej5xHm64yWutF5V7YHdb_0',
    authDomain: 'jobs-47154.firebaseapp.com',
    projectId: 'jobs-47154',
    storageBucket: 'jobs-47154.firebasestorage.app',
    messagingSenderId: '47164884237',
    appId: '1:47164884237:web:44ce6f5f93a2edd4405c44',
    measurementId: 'G-STZGN4LZ5B',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
// const analytics = getAnalytics(app);
