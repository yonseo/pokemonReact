//IMPORT DATABASE
const db = require("./../database.js");

//Retrieve all Users
const users_read = async (req, res) => {

    //fetch all users
    const sql = "SELECT * FROM user"

    //READ
    db.all(sql, (error, rows) => {

        // SEND TO VIEW FILE

        //throw error message
        if (error) {
            res.status(400).json({"error":err.message});
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


// Retrieve one user with DETAILS
const users_details = async (req, res) => {
    //fetch one user details
    const id = req.params.id;
    const sql = " SELECT * FROM user WHERE id = '" + id + "' ";

    //Details
    db.all(sql, (error, rows) => {

        // SEND TO VIEW FILE

        //throw error message
        if (error) {
            res.status(400).json({"error":error.message});
            return;
        }

        // JSON response
        res.json({
            "data: ":rows
        })

        // javascript response
        rows.forEach( item => {
            //console.log('ID: ' + item.id);
            //console.log('NAME: ' + item.name);
        });

    });
}
    

    //UPDATE
        // code here

    //DELETE
        // code here
        


module.exports = {
    users_read,
    users_details,
    //UsersCreate
    //UsersDelete
    //UsersUpdate
}




