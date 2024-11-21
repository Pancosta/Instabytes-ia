import fs from "fs";
import  {getTodosPosts, criarPost}  from "../models/postModel.js";

export async function listarPosts(req, res){
    // Obtém os posts chamando a função que busca os dados no banco
    const posts = await getTodosPosts();
    // Retorna os posts com status 200 no formato JSON
    res.status(200).json(posts);
}

export async function enviarPost(req, res) {
    const novoPost = req.body;
    try{
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch(erro){
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }    
}

export async function uploadImagem(req, res) {

    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try{
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png` ;
        fs.renameSync(req.file.path,imagemAtualizada);
        
        res.status(200).json(postCriado);
    } catch(erro){
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }    
}
