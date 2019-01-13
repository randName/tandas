const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp()
const db = admin.firestore()
db.settings({ timestampsInSnapshots: true })
const door = db.collection('door')

exports.door = functions.https.onRequest((req, res) => {
  const d = parseInt(req.query.d)
  if (isNaN(d)) {
    return door.orderBy('ts', 'desc').limit(1).get()
      .then((s) => {
        const {oc, ts} = s.docs[0].data()
        return res.status(200).send(`${0 + oc},${ts.seconds}`)
      })
  } else {
    return door.add({ oc: Boolean(d), ts: new Date() })
      .then((s) => res.status(200).send(d.toString()))
  }
})
