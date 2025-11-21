const express = require('express')
const cors = require('cors')

const AdminRouter = require('./routes/admin/admin.router')
const CustomerRouter = require('./routes/customer/customer.router')
const DriverRouter = require('./routes/driver/driver.router')

const AuthRouter = require('./routes/auth/auth.router')
const UserRouter = require('./routes/user/user.router') 

const app = express()

app.use(cors({
    origin: [
        'http://localhost:3000',
    ],
    credentials: true
}))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "true");
  next();
})

app.use(express.json())

app.use('/admin', AdminRouter)
app.use('/customer', CustomerRouter)
app.use('/driver', DriverRouter)
app.use('/auth', AuthRouter)
app.use('/users', UserRouter) 


app.get('/', (req, res) => {
    res.json({message: "User Service"})
})

app.get('/health', (req, res) => {
    res.json({message: "User Service is running.."})
})


module.exports = app