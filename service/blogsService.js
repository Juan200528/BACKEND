const {blogs} = require('../models')
let ListarBlogsService = async()=> {
    try{
       let resp = await blogs.findAll()
       return resp;
    }catch(e){
        console.log(e)
        


    }
}

module.exports = {
    ListarBlogsService
}