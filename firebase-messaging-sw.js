importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDGyoBxBf387qLUc1blmjkNyHLrNT1wmtk",
  authDomain: "capsula-do-tempo-a674f.firebaseapp.com",
  projectId: "capsula-do-tempo-a674f",
  messagingSenderId: "219747310467",
  appId: "1:219747310467:web:8ab81bf4bd74597557f4b6"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon
  });
});