import express from "express";

const posts = [
    {
      id: 1,
      descricao: "uma foto teste",
      imagem: "https://placecats.com/millie/300/150",
    },
    {
      id: 2,
      descricao: "Um lindo pôr do sol",
      imagem: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      id: 3,
      descricao: "Meu pet adorável",
      imagem: "https://placekitten.com/400/300",
    },
    {
      id: 4,
      descricao: "Uma paisagem montanhosa",
      imagem: "https://source.unsplash.com/random/400x300/?mountain",
    },
    {
      id: 5,
      descricao: "Comida deliciosa",
      imagem: "https://unsplash.com/photos/food",
    },
    {
      id: 6,
      descricao: "Uma cidade vibrante",
      imagem: "https://source.unsplash.com/random/400x300/?city",
    }
  ];  

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res)=> {
    res.status(200).json(posts); 
});

function buscarPostPorID(id) {
    return posts.findIndex((post)=> {
        return post.id === Number(id)
    });
}

app.get("/posts/:id", (req, res)=> {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});
