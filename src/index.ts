import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import Msg from '@/src/entities/msg'

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:8080'],
    methods: ['GET', 'POST'],
  },
})

io.on('connection', socket => {
  console.log('a user connected')

  socket.on('chatMsg', (msg: Msg) => {
    console.log('chatMsg: ', msg)
    io.emit('chatMsg', msg)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

const port = 3001
server.listen(port, () => {
  console.log(`listening on *:${port}`)
})
