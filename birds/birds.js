const express = require('express')
const router = express.Router()
//router as a module 



// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', new Date().toString())
    next()
})
// define the home page route
router.get('/', (req, res) => {
    res.send(`
    <div>
    <form method="POST">
    <h1> Birds homepage </h1>
    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam animi ex omnis non excepturi atque ipsum? A ad
    adipisci nostrum, voluptatum consequuntur nulla quod, tenetur veniam eum atque quis minus.</p>
    <input name="username" placeholder="username"/>
    <input name="comment"  placeholder="comment"/>
    <button>Submit</button>
    </form>
    `);
})

router.post('/', (req, res) => {
    res.send('comment submitted');
});

router.get('/pigeons', (req, res) => {
    res.send(`
    <div>
    <form method="POST">
    <h1> Pigeons </h1>
    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam animi ex omnis non excepturi atque ipsum? A ad
    adipisci nostrum, voluptatum consequuntur nulla quod, tenetur veniam eum atque quis minus.</p>
    <input name="username" placeholder="username"/>
    <input name="comment"  placeholder="comment"/>
    <button>Submit</button>
    </form>
    `);
})


module.exports = router;