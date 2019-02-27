## liri-node-app
##LIRI Bot

# ABOUT THE APP
* LIRI is a Language Interpretation and Recognition Interface. 
* LIRI is a command line node app that takes in parameters and gives back data. 
* The user has the option of using four commands (listed below) in conjuntion with specific parameters associated with the commands. The  `Commands` are:

   * `concert-this`
   * `spotify-this-song`
   * `movie-this`
   * `do-what-it-says`
   

# TECHNOLOGIES USED
  * Javascript
  * Nodejs
  * Node packages:
    * Node-Spotify-API
    * Request 
    * DotEnv
  * APIs used:
    * Bands in Town
    * OMDB
  * Git
  * GitHub


# Instruction: 
1. Open your terminal such as Bash.
2. Navigate to the folder that contains the `liri.js` file. 
3. Run the options below. Depending on the command you run, the output will vary:
    * Run the `concert-this` command "node liri.js concert-this (name of artist or band)". 
      * ![Results](![liri_bandsintown](https://user-images.githubusercontent.com/44482712/53518861-8fe2f800-3a97-11e9-8f57-cce504f9e0a1.png)

    * Run the `spotify-this-song` command "node liri.js spotify-this-song (name of song)".
      * ![liri_spotify](https://user-images.githubusercontent.com/44482712/53519056-fff17e00-3a97-11e9-9490-e525d9f2a965.png)

    * Run the `movie-this` commandq "node liri.js movie-this (name of movie)".    
      * ![Results](screenshots/liri_IMDB.PNG)

    * Run the `do-what-it-says` command "node liri.js do-what-it-says".
      * ![Results](screenshots/liri_DoWhatItSays.PNG)








