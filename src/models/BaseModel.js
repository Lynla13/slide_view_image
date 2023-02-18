import pool from "../configs/connect_db";
//import connection from "../model/baseModel";

// * Important promise function
function dbQuery(databaseQuery) {
    return new Promise(data => {
        pool.query(databaseQuery, function (error, result) { // change db->connection for your code
            if (error) {
                console.log(error);
                throw error;
            }
            try {
                data(result);

            } catch (error) {
                data({});
                throw error;
            }

        });
    });

}
async function getAll(table,orderBy='joinday desc') {
    let result =[];
    return result = await dbQuery('SELECT DISTINCT *from ' +table+' ORDER BY '+orderBy+'');
}

async function getByCondition(table,condition) {
    let result =[];
    return result = await dbQuery('SELECT DISTINCT * FROM '+ table +' WHERE '+ condition +'');
}

//Chọn từ 1 hoặc nhiều giá trị 
function selectIn (table,colum,value) {
    pool.query (`SELECT * FROM `+table+`  WHERE `+colum+` IN (`+value+`)`)
}

function selectNotIn (table,colum,value) {
    pool.query (`SELECT * FROM `+table+`  WHERE `+colum+` NOT IN (`+value+`)`)
}


module.exports = {
    dbQuery,getAll,getByCondition,selectIn,selectNotIn 
}