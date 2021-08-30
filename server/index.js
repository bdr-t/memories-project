const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const dotenv = require('dotenv').config()

const {postRoutes} = require('./routes/posts.js')
const {userRoutes} = require('./routes/user.js')

const app = express();


app.use(express.json({limit: '30mb', extended: true}));
app.use(express.urlencoded({limit: '30mb', extended: true}));
app.use(cors())

app.use('/posts', postRoutes)
app.use('./user', userRoutes)

// const CONNECTION_URL = 'mongodb+srv://bader:QH9cMDELW91OdECC@cluster0.iasbu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology:true})
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)))
    .catch(err => console.error(err.message))
