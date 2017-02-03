import express from 'express'
import mongodb from 'mongodb'

const app = express()
const dataBaseUrl = 'mongodb://localhost/crudwithredux'

mongodb.MongoClient.connect(dataBaseUrl, function(err, db) {

  app.get('/api/games', (req, res) => {
    db.collection('games').find({}).toArray((err, games) => {
      res.json({ games })
    })
  })

  app.listen(8080, () => console.log('Server is running on 8080') )
})
