const jwt = require('jsonwebtoken')

module.exports = (req, res, next) =>{
    try {
        const authHeader = req.headers.authorization
        if (!authHeader || !authHeader.startsWith('Bearer ') )
            return res.status(401).json({ message: 'Unauthorized' })
        const token = authHeader.split(' ')[1]
        if (!jwt.verify(token, process.env.JWT_SIGNATURE))
            return res.status(403).json({ message: 'Invalid Token' })
        const payload = jwt.decode(token)
        const userId = payload.userId
        req.userId = userId
        next()
} catch (e){
    res.status(401).json({ message: 'Invalid Token!' })
}

}
