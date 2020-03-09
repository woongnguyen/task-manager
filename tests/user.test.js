const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const jwt = request('jsonwebtoken')
const mongoose = request('mongoose')

const userOneId = new mongoose.Types.ObjectId
const userOne = {
  _id: userOneId,
  name:'Mike',
  email:'mike@gmail.com',
  password: '56What!!',
  tokens: [
    { 
      token: jwt.sign({_id:userOneId},
      process.env.JWT_SECRET)
    }
  ]
}

beforeEach(async () => {
  await User.deleteMany()
  await new User(userOne).save()
})

test('Should signup a new user', async () => {
  await request(app).post('/users').send({
    name: 'Quannm',
    email: 'minhquan@gmail.com',
    password: 'MyPass777!'
  }).expect(201)
})

test('Should login existing user', async () => {
   await request(app).post('/users/login').send({
     email: userOne.email,
     password: userOne.password
   }).expect(200)
})

test('Should get profile for user', async () => {
  await request(app).get('/users/me')
  set('Authorization', 'Bearer '+userOne.token[0].token).send().expect(200)
})