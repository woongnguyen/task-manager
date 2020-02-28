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

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
  // const task = await Task.findById('5e4f43036962d1252c4dccb7')
  // await task.populate('owner').execPopulate()
  // console.log(task.owner)

  const user = await User.findById('5e4f3fa30c6ef509ccb31011')
  await user.populate('tasks').execPopulate()
  // console.log(user.tasks)
}

main()