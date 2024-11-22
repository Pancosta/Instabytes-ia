import express from "express";
import multer from "multer";
import cors from "cors";
import { enviarPost, listarPosts, uploadImagem, editPost} from "../controllers/postsControler.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}
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
    app.use(cors(corsOptions));
    // Define uma rota GET para "/posts" que retorna todos os posts
    app.get("/posts", listarPosts);
    app.post("/posts", enviarPost);
    app.post("/upload", upload.single("imagem"),uploadImagem);
    app.put("/upload/:id", editPost);

}

export default routes;

