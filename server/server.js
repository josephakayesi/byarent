const app = require('express')()
const mongoose = require('mongoose')
const admins = require('../routes/api/admins')
const users = require('../routes/api/users')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')

// Cors middleware
app.use(cors())

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// Helmet middleware
app.use(helmet())

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