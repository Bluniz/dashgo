import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

// Desacoplou a função do react query
export async function getUsers(): Promise<User[]> {
  const { data } = await api.get("/users");
  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return users;
}

export function useUsers() {
  return useQuery("users", getUsers, {
    staleTime: 1000 * 5, //! Por 5 segundos ela vai ser "fresh", não vai precisar ser recarregada
  });
  //! Nome para essa query, esse nome será a chave que será armazenada no cash
  //! Como segundo parametro definir uma função para me retornar esses dados.
}
