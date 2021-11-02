const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require("body-parser");

app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*"); res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

// parse app
app.use(bodyParser.urlencoded({ extended: false }))

// parse app/json
app.use(bodyParser.json())


app.get('/api/movies', (req, res)=>{
        
    const mymovies = [
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg" },

            {
            "Title": "Charlie Wilson's War", 
            "Year": "2007",
            "imdbID": "tt0472062",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYwOTU3MDM4._V1_SX300.jpg" }
    ];
    res.status(200).json({
        message: "this is a message",
        movies: mymovies});
} )

app.post('/api/movies', (req, res) =>{
    console.log('movie received');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})