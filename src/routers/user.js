const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.post('/users', async (req, res) => {
  const addUser = new User(req.body)
  console.log(req.body)
  try {
    await addUser.save()
    res.status(201).send(addUser)
  } catch (e) {
    res.status(400).send(e)
  }
})

router.get('/users', async (req, res) =>{

  try {
    const users = await User.find({})
    res.send(users)
  } catch (e) {
    res.status(500).send()
  }
})

router.get('/users/:id', async (req, res) =>{
  const _id = req.params.id

  try {
    const user = await User.findById(_id)

    if(!user){
      return res.status(404).send()
    }

    res.send(user)
  } catch (e) {
    res.status(500).send()
  }
})

router.patch('/users/:id', async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'email', 'password', 'age']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update)) // check if value name don't contain in database return  

  if (!isValidOperation){
    return res.status(400).send({error:'Invalid updates!'})
  }
  try{
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators:true})

    if(!updateUser){
      return res.status(404).send()
    }
    res.send(updateUser)
  } catch(e){
    res.status(400).send(e)
  }
})

router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)

    if(!user){
      return res.status(404).send()
    }
    res.send(user)
  } catch (e) {
    res.status(500).send(e)
  }
})


module.exports = router