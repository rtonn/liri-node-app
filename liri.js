
require("dotenv").config(); 

var request = require("request");
var fs = require("fs");
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

//vars to capture user inputs.
var userOption = process.argv[2]; 
var inputParameter = process.argv[3];

//user input function
UserInputs(userOption, inputParameter); 

//functions
function UserInputs (userOption, inputParameter){ 
    switch (userOption){        
    case 'concert-this':
        showConcertInfo(inputParameter); 
        break; 

    case 'spotify-this-song':
        showSongInfo(inputParameter); 
        break; 

    case 'movie-this':
        showMovieInfo(inputParameter); 
        break; 
    
    case 'do-what-it-says':
        showSomeInfo(); 
        break; 
    
    default:
        console.log("Invalid Option")

    }
}

//movie OMDB
function showMovieInfo(inputParameter){
    if (inputParameter === undefined) {
            inputParameter = "Jaws"
            console.log("-----------");

            fs.appendFileSync("log.txt", "-----------------------\n");
            console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
            fs.appendFileSync("log.txt", "If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/" +"\n");
            console.log("It's on Netflix!");
            fs.appendFileSync("log.txt", "It's on Netflix!\n");
    }              
    

    var queryUrl = "http://www.omdbapi.com/?t=" + inputParameter + "&y=&plot=short&apikey=52445c39";
    request(queryUrl, function(error, response, body){        
        if (!error) {
            var movies = JSON.parse(body); 
                console.log("**********MOVIE INFO*********");  
                fs.appendFileSync("log.txt", "**********MOVIE INFO*********\n");
                console.log("Title: " + movies.Title);
                fs.appendFileSync("log.txt", "Title: " + movies.Title + "\n");
                console.log("Release Year: " + movies.Year);                
                fs.appendFileSync("log.txt", "Release Year: " + movies.Year + "\n");
                console.log("IMDB Rating: " + movies.imdbRating);
                fs.appendFileSync("log.txt", "IMDB Rating: " + movies.imdbRating + "\n");                
                console.log("Country of Production: " + movies.Country);
                fs.appendFileSync("log.txt", "Country of Production: " + movies.Country + "\n");
                console.log("Language: " + movies.Language);
                fs.appendFileSync("log.txt", "Language: " + movies.Language + "\n");
                console.log("Plot: " + movies.Plot);
                fs.appendFileSync("log.txt", "Plot: " + movies.Plot + "\n");
                console.log("Actors: " + movies.Actors);
                fs.appendFileSync("log.txt", "Actors: " + movies.Actors + "\n");
                console.log("*****************************");  
                fs.appendFileSync("log.txt", "*****************************\n");
                } 
                else{
                console.log('Error occurred.');
                }
});}

