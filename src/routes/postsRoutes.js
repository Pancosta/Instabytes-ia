import express from "express";
import { enviarPost, listarPosts } from "../controllers/postsControler.js";

const routes = (app) => {
    // Configura o middleware para interpretar requisições no formato JSON
    app.use(express.json());
    // Define uma rota GET para "/posts" que retorna todos os posts
    app.get("/posts", listarPosts);
    app.post("/posts", enviarPost);
}

export default routes;

