const sql = require('mssql');
// const config = require('../config.js');

async function readerUserData(userID) {
    try {
        var poolConnection = await sql.connect(`Server=tcp:ezezimalidbs.database.windows.net,1433;Initial Catalog=ezezimalidb;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;Authentication="Active Directory Default";`);

        console.log("Reading rows from the Table...");
        var resultSet = await poolConnection.request().query(`select profile_pic_url , user_type  from [User] where email = '${userID}'`);

        let user = null; 
        resultSet.recordset.forEach(row => {
            user = row;
        });

        // close connection only when we're certain application is finished
        await poolConnection.close();

        return user;
    } catch (err) {
        console.error(err.message);
        throw err; // Re-throw the error to handle it in the caller
    }
}

async function insertUserData(email, profile_pic_url) {
    try {
        // Connect to the database

        const poolConnection = await sql.connect(config);

        // console.log("smurf", userExists)

        // Insert the row into the table

        

            console.log("Inserting!!")
        const resultSet = await poolConnection.request().query(`IF NOT EXISTS (SELECT 1 FROM [User] WHERE email = '${email}')
        BEGIN
            INSERT INTO [User] (email, profile_pic_url, user_type, created_at)
            VALUES ('${email}', '${profile_pic_url}', 'Applicant', GETDATE());
        END
        `);

        // Close the connection
        await poolConnection.close();

        let returnObj = null;

        if (resultSet.rowsAffected[0] == 1) {
            returnObj = { "message" : "Success"};
        }else{
            returnObj = { "message" : "Failure"};
        }
        console.log(returnObj)
        return returnObj;        

        
    } catch (err) {
        console.error(err.message);
        throw err; // Re-throw the error to handle it in the caller
    }
}

async function updateUserData(email, profile_pic_url) {
    try {
        // Connect to the database

        const poolConnection = await sql.connect(config);


            console.log("Updating!!")
        const resultSet = await poolConnection.request().query(`
        UPDATE [User]
        SET profile_pic_url = '${profile_pic_url}'
        WHERE email = '${email}';`);

        await poolConnection.close();

        let returnObj = null;

        if (resultSet.rowsAffected[0] == 1) {
            returnObj = { "message" : "Success"};
        }else{
            returnObj = { "message" : "Failure"};
        }
        console.log(returnObj)
        return returnObj; 
        
    } catch (err) {
        console.error(err.message);
        throw err; // Re-throw the error to handle it in the caller
    }
}


async function deleteUserData(email) {
    try {
        // Connect to the database

        const poolConnection = await sql.connect(config);


            console.log("Deleting!!")
        const resultSet = await poolConnection.request().query(`
        delete from [User] where email = '${email}';`);

        await poolConnection.close();

        let returnObj = null;

        if (resultSet.rowsAffected[0] == 1) {
            returnObj = { "message" : "Success"};
        }else{
            returnObj = { "message" : "Failure"};
        }
        console.log(returnObj)
        return returnObj; 
        
    } catch (err) {
        console.error(err.message);
        throw err; // Re-throw the error to handle it in the caller
    }
}

// insertUserData("fhddbsjkf", "d")
// updateUserData("fhddbdsdsjkf", "f")

module.exports = {
    readerUserData,
    insertUserData,
    updateUserData
};
// module.exports = insertUserData;
