importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyB8QiVeO7MOXOOT3NlMx_jcSPIqwhI10fE",
  authDomain: "escproject-fdba0.firebaseapp.com",
  databaseURL: "https://escproject-fdba0-default-rtdb.firebaseio.com",
  projectId: "escproject-fdba0",
  storageBucket: "escproject-fdba0.appspot.com",
  messagingSenderId: "639100449155",
  appId: "1:639100449155:web:18fcc17ae1620ed1db46b6",
  measurementId: "G-9HSYNE4KH6"
};
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});