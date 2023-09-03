const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', new Date().toString())
    next()
})
// define the home page route
router.get('/', (req, res) => {
    res.send('About birds')
})


module.exports = router;