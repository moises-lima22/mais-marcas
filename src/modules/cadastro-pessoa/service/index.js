import axios from "axios";

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
