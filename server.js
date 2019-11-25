const express=require('express');
const mongoose=require('mongoose');
//const config=require('./config');
const session = require('express-session');
const passport = require('passport');

// Load User Model
require('./models/User');


// Passport Config
require('./config/passport')(passport);

// Load Routes
const auth = require('./routes/auth');
