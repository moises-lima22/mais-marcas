import axios from "axios";
import { createRestRequest } from "../../utils/restObjectFactory";

export const getPersons = async () => {
  try {
    const response = await axios.get("http://localhost:8888/persons");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const savePerson = async (personData) => {
  try {
    const response = await axios.post(
      "http://localhost:8888/persons/save",
      personData
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const searchCep = async (cep) => {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  const response = await createRestRequest(axios.get(url));

  return response;
};
