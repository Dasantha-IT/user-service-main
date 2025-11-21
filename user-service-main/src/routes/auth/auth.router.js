const {login, httpRegisterAdmin, httpRegisterCustomer, httpRegisterDriver} = require('./auth.controller');

const express = require('express')

const AuthRouter = express.Router()

AuthRouter.post('/login', login)
AuthRouter.post('/register/admin', httpRegisterAdmin)
AuthRouter.post('/register/driver', httpRegisterDriver)
AuthRouter.post('/register/customer', httpRegisterCustomer)
AuthRouter.post('/signup', httpRegisterCustomer)

module.exports = AuthRouter