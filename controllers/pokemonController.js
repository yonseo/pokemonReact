//IMPORT DATABASE
const db = require("./../database.js");

//Retrieve all pokemon
const pokemon_read = async (req, res) => {

    //fetch all users
    const sql = "select * from pokemon"

    //READ
    db.all(sql, (error, rows) => {

        //throw error message
        if (error) {
            res.status(400).json({"error":error.message});
            return;
        }

        // JSON response
        res.json({
            "data":rows
        })

        // javascript response
        rows.forEach( item => {
            //console.log('ID: ' + item.id);
            //console.log('NAME: ' + item.name);
        });

    });
}

module.exports = {
    pokemon_read,
}