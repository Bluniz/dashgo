import { createServer, Factory, Model, Response } from "miragejs";
import faker from "faker";

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

    //! É uma forma de gerar dados em massa no mirajeJS.
    factories: {
      user: Factory.extend({
        name(index: number) {
          return `User ${index + 1}`;
        },
        email() {
          //? Retorna um email de forma totalmente aleatoria
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          //? Quero que retorne todos os usuarios criados nos ultimos 10 dias
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      //! Todas vezesq que iniciarmos um servidor do mirage
      //! começaremos com 200 usuários.
      server.createList("user", 200);
    },

    routes() {
      this.namespace = "api"; //? Todas as rotas são precisar chamar api, por exemplo /api/users
      this.timing = 750; //? Todas as chamadas para a api do mirage, fique com um delay de 750 seg

      this.get("/users", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all("user").length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all("user")).users.slice(
          pageStart,
          pageEnd
        );

        // Dados sobre quantidade total são metadados, não fazem parte da requisição de usuários
        // Nesses casos retornamos como headers.

        return new Response(
          200, //!Status Code
          { "x-total-count": String(total) }, //! Headers
          { users } //! Registros/Dados
        );
      }); //! Vai entender para retornar todos os dados
      this.get("/users/:id"); //! Vai criar automaticamente uma rota para listarmos o usuário por id
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
