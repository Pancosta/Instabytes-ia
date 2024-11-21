// Importa a função para conectar ao banco de dados
import conectarAoBanco from "../config/dbConfig.js";

// Estabelece conexão com o banco de dados usando a string de conexão do ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona que retorna todos os posts do banco de dados
export async function getTodosPosts() {
    // Obtém o banco de dados "instabytes" da conexão estabelecida
    const db = conexao.db("instabytes");
    // Acessa a coleção "posts" dentro do banco
    const colecao = db.collection("posts");
    // Retorna todos os documentos da coleção em formato de array
    return colecao.find().toArray();
  }

  export async function criarPost(novoPost){
    const db = conexao.db("instabytes");
    const colecao = db.collection("posts");

    return colecao.insertOne(novoPost);
  }