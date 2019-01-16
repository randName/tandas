import firebase from 'firebase/app'
import 'firebase/firestore'

const pid = process.env.VUE_APP_FB_PROJECT

const config = {
  projectId: pid,
  storageBucket: `${pid}.appspot.com`,
  authDomain: `${pid}.firebaseapp.com`,
  apiKey: process.env.VUE_APP_FB_API_KEY,
  databaseURL: `https://${pid}.firebaseio.com`,
  messagingSenderId: process.env.VUE_APP_FB_SEND_ID
}

const d = new Date()
d.setHours(d.getHours() - 6)
d.setMinutes(0)
d.setSeconds(0)

firebase.initializeApp(config)
const db = firebase.firestore()
db.settings({ timestampsInSnapshots: true })

const door = db.collection('door')
const state = db.collection('status')
const maintenance = state.doc('maintenance')
const activity = door.where('ts', '>', d).orderBy('ts')

export default function () {
  return {
    door,
    activity,
    maintenance,
  }
}
