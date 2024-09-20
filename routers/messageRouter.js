const {Router} = require('express')
const auth = require('../middlewares/auth')
const {getMessages} = require('../controllers/messageController')

const messageRouter = Router()

messageRouter.get('/getMessages/:yourId/:otherId', auth, getMessages)

module.exports = messageRouter