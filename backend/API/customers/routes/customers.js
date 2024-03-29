/* eslint-disable new-cap */
const express = require('express');
const customerAuth = require('../middlewares/customerAuth');
const adminAuth = require('../middlewares/adminAuth');

const {signUp,
  logIn,
  logOut,
  update,
  getCustomer,
  getCustomers,
  deleter} = require('../controllers/customers.js');
const customers = express.Router();

/* 1. CUSTOMERS SIGN UP*/
customers.post('/signup',
    signUp);

/*    id int NOT NULL PRIMARY KEY,
     name VARCHAR (50) NOT NULL,
     email VARCHAR(50) NOT NULL UNIQUE,
     password VARCHAR(50) NOT NULL,
     phone VARCHAR(50) NOT NULL,
     location VARCHAR(50) NOT NULL,
     */

/* 2.  Log in*/
customers.post('/login',
    logIn);
/* email VARCHAR(50) NOT NULL,
     password VARCHAR(50) NOT NULL,
*/

/* 3. Log out*/
// Require to be logged in
customers.patch('/logout',
    logOut);

/* 4.  update account*/

// Require to be logged in
customers.patch('/update/:id', customerAuth,
    update);
/*
    id int NOT NULL PRIMARY KEY,
     name VARCHAR (50) NOT NULL,
     email VARCHAR(50) NOT NULL UNIQUE,
     password VARCHAR(50) NOT NULL,
     phone VARCHAR(50) NOT NULL,
     location VARCHAR(50) NOT NULL,
*/
/* 5. Get customer by id*/

customers.get('/id/:id', customerAuth,
    getCustomer);

/* 6. Get all customers*/
// Require admin
customers.get('/all', adminAuth,
    getCustomers);

/* 7. Deleting a customer*/
// Require to be logged in

customers.patch('/delete/:id', customerAuth,
    deleter);
/*
     email VARCHAR(50) NOT NULL,
     password VARCHAR(50) NOT NULL,

*/


module.exports = {customers};
