import { LISTA_PESSOAS } from "./mutations-type";
import { getPersons } from "@/modules/cadastro-pessoa/service/personService";

export const actions = {
  async buscarPessoas({ commit }) {
    const response = await getPersons(this.person);

    if (response.hasError) {
      return response;
    }

    commit(LISTA_PESSOAS, response.content);
    return response;
  },
};
