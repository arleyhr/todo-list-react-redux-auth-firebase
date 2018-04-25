import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCS-aL7HivfdAZ7yTE8I-62fE4ISvhQl5Y',
  authDomain: 'todo-list-ff7bb.firebaseapp.com',
  databaseURL: 'https://todo-list-ff7bb.firebaseio.com',
  projectId: 'todo-list-ff7bb',
  storageBucket: 'todo-list-ff7bb.appspot.com',
  messagingSenderId: '71301882381'
}

firebase.initializeApp(config)

const auth = firebase.auth
const { database } = firebase

export {
  auth,
  database
}
