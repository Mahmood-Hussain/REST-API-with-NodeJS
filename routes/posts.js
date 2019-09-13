const router = require('express').Router()
const verify = require('./verifyToken')

router.get('/', verify, (req, res)=>{
    res.json({ 
        "posts": {
            "title": 'My First Post',
            "descriptiom": 'Thi is description of the post 1'
        }
    })
})

module.exports = router