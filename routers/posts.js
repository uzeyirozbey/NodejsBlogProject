const express = require('express')
const Post = require('../models/Post')
const router  = express.Router()
// const Post    = require("../models/Post")

router.post('/new',(req,res) => {   
    res.redirect('site/addpost')
})

router.post('/test',(req,res) => {   
    Post.create(req.body);
    res.redirect('/')
})

module.exports =router