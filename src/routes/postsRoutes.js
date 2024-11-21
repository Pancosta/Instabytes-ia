import express from "express";
import multer from "multer";
import { enviarPost, listarPosts, uploadImagem} from "../controllers/postsControler.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ dest: "./uploads" , storage});

const routes = (app) => {
    // Configura o middleware para interpretar requisições no formato JSON
    app.use(express.json());
    // Define uma rota GET para "/posts" que retorna todos os posts
    app.get("/posts", listarPosts);
    app.post("/posts", enviarPost);
    app.post("/upload", upload.single("imagem"),uploadImagem);
}

export default routes;

