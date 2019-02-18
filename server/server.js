const app = require('express')()
const mongoose = require('mongoose')
const admins = require('../routes/api/admins')
const users = require('../routes/api/users')

// DB Config
const db = require('../config/keys').mongoURI

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello'))

// Use Routes
app.use('/api/admins', admins)
app.use('/api/users', users)

const port = process.env.port || 5000
app.listen(port, () => console.log(`Server running on port ${port}`))