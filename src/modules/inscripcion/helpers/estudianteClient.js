import axios from "axios";

export const buscarEstudianteFachada = async (cedula, token) => {
  const data = await buscarEstudiante(cedula, token);
  return data;
};

export const ingresarEstudianteFachada = (bodyEstudiante, token) => {
  ingresarEstudiante(bodyEstudiante, token);
};

const buscarEstudiante = async (cedula, token) => {
  const headers = {
    Authenticacion: "Bearer " + token,
  };
  const data = await axios
    .get(`http://localhost:8080/API/v1.0/Inscripcion/estudiantes/${cedula}`, {
      headers: headers,
    })
    .then((r) => r.data);
  return data;
};

const ingresarEstudiante = (bodyEstudiante, token) => {
  const headers = {
    Authenticacion: "Bearer " + token,
  };
  axios
    .post(
      `http://localhost:8080/API/v1.0/Inscripcion/estudiantes`,
      bodyEstudiante,
      { headers: headers }
    )
    .then((r) => r.data);
};
