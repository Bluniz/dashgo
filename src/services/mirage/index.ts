import { createServer, Model } from "miragejs";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    routes() {
      this.namespace = "api"; //? Todas as rotas são precisar chamar api, por exemplo /api/users
      this.timing = 750; //? Todas as chamadas para a api do mirage, fique com um delay de 750 seg
      this.get("/users"); //! Vai entender para retornar todos os dados
      this.post("/users"); //! Vai criar a estrutura necessária para criar um usuário sem passar muita coisa

      this.namespace = "";
      /*
        ! Quando terminar de gerar as rotas, vai voltar a ser um nome em branco
        ? Isso por que por padrão o next tem a pasta api para rotas
        * Com isso evitamos conflitos com o Next
      */

      this.passthrough(); // Vai fazer com que todas as chamadas para api passem pelo mirage, se não forem detectadas, passem adiante para as rotas
    },
  });

  return server;
}
