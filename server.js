const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3 (port number)

//DATABASE 
//const db = require("./database.js");
//const db = new sqlite3.Database('pokemon');

//IMPORT ROUTES
const usersRoute = require('./routes/usersRoute.js');
const pokemonRoute = require('./routes/pokemonRoute.js');





/*
db.serialize(function () {
    db.run('CREATE TABLE monsters (id INT, name TEXT)');
    var stmt = db.prepare('INSERT INTO monsters VALUES (?,?)');
  
    for (var i = 0; i < 10; i++) {
      stmt.run(i + ' monster ')
    }
  
    stmt.finalize();
  
    db.each('SELECT id, name FROM monsters', function (err, row) {
      console.log("ID: " + row.id + 'NAME: ' + row.name)
    })
  })
  
  db.close();
*/


// This displays message that the server running and listening to specified port
// display the messsage in terminal


// PORT
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6


/* 
// test sqlite3 database connection by fetching users data
app.get("/api/users", (req, res, next) => {
    var sql = "select * from user"
    var params = []
    db.all(sql, params, (err, rows) => {
        //throw error message
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        // return success message using JSON
        res.json({
            "message":"success",
            "data":rows
            //"ID:":rows.id
        })
        //return using javascript
        rows.forEach(item => {
          console.log('ID: ' + item.id);
          console.log('NAME: ' + item.name);
          console.log('EMAIL: ' + item.email);
        });


      });
});

*/



// ROUTES

app.get('/', (req, res) => {
    res.send( 'Express connection succes!'); //test route
});


app.use('/users', usersRoute)
app.use('/users/details', usersRoute)
app.use('/pokemon', pokemonRoute)



// we can create functions 2 ways:
// function(){ //code } 
// () => { //code } 
app.get('/hello', function(req, res) {
    res.send( 'hello world! route: /hello'); //test the route /test
});

