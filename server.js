const path = require('path'); 
const express = require('express'); 
const dotenv = require('dotenv'); 
const colors = require('colors');
const morgan = require('morgan'); 
const { notFound, errorHandler } =  require('./middleware/errorMiddleware.js'); 
dotenv.config();

const productRouters = require('./routes/productRoutes');

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())
app.use('/api/products',productRouters);



app.use('/uploads', express.static(path.join(__dirname, '/uploads')))


app.get('/', (req, res) => {
res.send('API is running....')
})


app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
