// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyD2CXICYXE1ed30x8b_qDSHX-O4cSvHSEk",
  authDomain: "store-angular-6a3e9.firebaseapp.com",
  databaseURL: "https://store-angular-6a3e9.firebaseio.com",
  projectId: "store-angular-6a3e9",
  storageBucket: "store-angular-6a3e9.appspot.com",
  messagingSenderId: "373692029112",
  appId: "1:373692029112:web:1c4f5ee287ec56dcb73c4d",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
