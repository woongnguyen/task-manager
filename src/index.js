const express = require('express')
require('./db/mongoose')
const taskRouter = require('./routers/task')
const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () =>{
  console.log('Server is up on port ' + port)
})

const bcrypt = require('bcryptjs')

const myfunc = async () => {
  const pass = 'Quan1234@'
  const hashPass = await bcrypt.hash(pass, 8)
  console.log(pass)
  console.log(hashPass)
  const isMath = await bcrypt.compare('Quan1234!', hashPass)
  console.log(isMath)
}

myfunc()