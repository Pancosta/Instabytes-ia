import  getTodosPosts  from "../models/postModel.js";

export async function listarPosts(req, res){
    // Obtém os posts chamando a função que busca os dados no banco
    const posts = await getTodosPosts();
    // Retorna os posts com status 200 no formato JSON
    res.status(200).json(posts);
}
