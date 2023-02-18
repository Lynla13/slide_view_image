import BaseModel from "./BaseModel";
//Tạo các hàm 
//- Hiện Tất
//- Hiện từng thể loại
//- Hiện nhiều thể loại
let table = 'post'
async function getAll() {
    orderBy ='post_time desc'
    return Promise.resolve ( await BaseModel.getAll(table,orderBy));
}

//Hiện từng thể loại
async function getByTag (tags,sort) {
    condi = `post_tag = '`+tags+`' order by post_time `+sort+``
    return Promise.resolve (await BaseModel.getByCondition (table,condi))
}

async function getByTags (tags) {
    colum = `post_tag`;
    return Promise.resolve (await BaseModel.selectIn (table,colum,tags))
}

async function getNotByTags (tags) {
    colum = `post_tag`;
    return Promise.resolve (await BaseModel.selectNotIn (table,colum,tags))
}


module.exports = {
    getAll, getByTag, getByTags,getNotByTags
}