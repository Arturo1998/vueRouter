import axios from "axios";
import { escribeLocalStorage } from "@/shared/LocalStorage/LocalStorage";

const consulta = async (nombre, contra) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/usuarios?nombre=${nombre}&contrasena=${contra}`
    );
    if (response.data.length > 0) {
      escribeLocalStorage("permitido", "Sí");
      console.log(response);
    } else {
      escribeLocalStorage("permitido", "No");
    }
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export { consulta };
