import axios from "axios";
import { createRestRequest } from "../../utils/restObjectFactory";

const BASE_URL = "api/v1/persons";

export const getPersons = async () => {
  const response = await createRestRequest(axios.get(BASE_URL));
  return response;
};

export const savePerson = async (person) => {
  const url = `${BASE_URL}/create`;
  const response = await createRestRequest(axios.post(url, { ...person }));
  return response;
};

export const updatePerson = async (person) => {
  const url = `${BASE_URL}`;
  const response = await createRestRequest(axios.put(url, { ...person }));
  return response;
};

export const searchCep = async (cep) => {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  const response = await createRestRequest(axios.get(url));

  return response;
};
