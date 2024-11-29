const {ListarBlogsService}= require("../service/blogsService")
let listarBlogs = async(req, res,)=> {
    try{
     let respuesta =  await ListarBlogsService();
     res.json(respuesta);
    }catch(e){
        console.log(e)

    }
}

module.exports = {
    listarBlogs
}