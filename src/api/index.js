import axios from "axios";

function generateUniqueId() {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const idLength = 10;
  let uniqueId = "";

  for (let i = 0; i < idLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    uniqueId += characters[randomIndex];
  }

  return uniqueId;
}

export const Api = {
  // FUNCAO QUE RETORNA A LISTA DE TODOS
  getList: async () => {
    try {
      // FAZ A CHAMADA PARA O JSON SERVER RETORNAR A LISTA DE TODO
      const response = await axios.get("http://localhost:5000/list");
      // RETORNA A LISTA
      return response.data;
      //   IMPRIMI NO CONSOLE CASO HAJA ALGUM ERRO
    } catch (error) {
      console.log(error);
    }
  },

  // FUNCAO PRA SALVAR NA LISTA DO JSON UMA NOVA TASK
  createTask: async (task) => {
    try {
      // FAZ A CHAMADA PARA O JSON SERVER PASSANDO A TASK QUE SERA ADICIONADA
      //   ADICIONA UM ID PRA TASK
      return await axios.post("http://localhost:5000/list", {
        ...task,
        id: generateUniqueId(),
      });
      //   IMPRIMI NO CONSOLE CASO HAJA ALGUM ERRO
    } catch (error) {
      console.log(error);
    }
  },

  deleteTask: async (id) => {
    try {
      // FAZ UMA CHAMADA PRA API PASSANDO O ID DO ITEM QUE PRECISAR SER DELETADO
      const response = await axios.delete(`http://localhost:5000/list/${id}`);
      return response;
      //   IMPRIMI NO CONSOLE CASO HAJA ALGUM ERRO
    } catch (error) {
      console.log(error);
    }
  },

  //   Fazer a funcao de Update a task
  updatingTask: async (task) => {
    debugger;
    try {
      const response = await axios.put(
        `http://localhost:5000/list/${task.id}`,
        { ...task }
      );
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
