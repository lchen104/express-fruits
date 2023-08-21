const express = require('express');
const app = express();

//import fruits
const fruits = require('./models/fruits.js')

//import veggies
const veggies = require('./models/veggies.js')


// Setting up the view engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());



// This is called 'middleware'
// It runs in the middle of the request response cycle (in the middle)
// sometime after the request is received, but before the final route handler is called
// Be sure to put middleware at the top of your server.js file,
// so that other routes don't handle the request and send the response
// before the middleware can be executed.
// Most of the time, you won't write your own middleware,
// but a lot of plugins and extended functionality of express exist as middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

// Near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));

// index
app.get('/', (req, res) => {
    res.render('Index');
});


// index
app.get('/fruits', (req, res) => {
    res.render('fruits/Index',{
        fruits: fruits
    });
});


app.get('/veggies', (req, res) => {
    res.render('veggies/Index',{
        veggies: veggies
    });
});



// First, we'll need a route for displaying the page in our server.js file.
// IMPORTANT: put this above your show route, so that the show route doesn't accidentally pick up a /fruits/new request.
app.get('/fruits/new', (req, res) => {
    res.render('fruits/New');
});

app.get('/veggies/new', (req, res) => {
    res.render('veggies/New');
});

// Since the form in the last step tells the browser to create a POST request to /fruits,
// we'll need to set up a route handler for this kind of request
app.post('/fruits', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    fruits.push(req.body);
    res.redirect('/fruits'); //send the user back to /fruits
});

app.post('/veggies', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true; //do some data correction
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false; //do some data correction
    }
    veggies.push(req.body);
    res.redirect('/veggies'); //send the user back to /veggies
});


// Show Fruits
app.get('/fruits/:index', (req, res) => {
     res.render('fruits/Show', { //second param must be an object
        fruits: fruits[req.params.index] 
        //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
    
    });
}); 


// Show Veggies
app.get('/veggies/:index', (req, res) => {
     res.render('veggies/Show', { //second param must be an object
        veggies: veggies[req.params.index] 
    });
});


app.listen(5001, () => {
    console.log('listening');
});