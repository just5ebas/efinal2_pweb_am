import axios from "axios";

export const obtenerTokenFachada = async (bodyToken) => {
  const data = await obtenerToken(bodyToken);
  return data;
};

const obtenerToken = async (bodyToken) => {
  const data = await axios
    .post(`http://localhost:8081/API/1.0/Autorizacion/tokens/obtener`, bodyToken)
    .then((r) => r.data);
  return data;
};
