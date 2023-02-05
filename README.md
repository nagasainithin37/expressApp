# How to create a server using Express App

## Step 1:

### install , import and use express app

cmd to install express

    npm install express

To import and use express

    const express=require('express')
    const app=express()

    app.listen(3000,()=>console.log("Server is Listining"))

## Step 2:

### To run or start our server

cmd 1 :

    node app

cmd 2: (recommended)

    if nodemon not installed install nodemon also by using
    npm install --global nodemon
    nodemon app

## step 3:

### to make request create and use a file with .http

    GET  http://localhost:3000/getusers

    ###
    GET http://localhost:3000/getuser/3

    ### POST
    POST http://localhost:3000/createuser
    Content-Type: application/json

    {
        "id":"3",
        "name":"vomann"
    }

    ###
    PUT http://localhost:3000/updateuser
    Content-Type: application/json

    {
        "id":"3",
        "name":"vomann.T"
    }

    ###
    DELETE http://localhost:3000/deleteuser/1

### Here one line space should be given in between Content-type: application/json and the object

## Step 4:

use middle ware app.use(express.json()) to extract body from the request
