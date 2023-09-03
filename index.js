const express = require('express');
const app = express();

const birds = require('./birds/birds');
const about = require('./about/about');





//respond on homepage 
app.get('/', (req, res) => {
    res.send(`
    <div>
    <h1> HOMEPAGE </h1>
    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam animi ex omnis non excepturi atque ipsum? A ad
    adipisci nostrum, voluptatum consequuntur nulla quod, tenetur veniam eum atque quis minus.</p>
    <form method="POST">
    <input name="username" placeholder="username"/>
    <input name="comment"  placeholder="comment"/>
    <button>Submit</button>
    </form>
    `);
});


//respond to post request
app.post('/', (req, res) => {
    res.send('comment submitted');
});


// complete middleware & routing system - mini app on main app
app.use('/birds', birds);

app.use('/about', about);


app.listen(3000, () => {
    console.log('listening');
});
