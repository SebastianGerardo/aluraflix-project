import { Input } from "../../../components/Input";
import styles from "./FormNewVideo.module.css";

export const FormNewVideo = () => {
  return (
    <form className={styles.form_newVideo}>
      <Input label="Título" placeholder="Ingrese un título" />
      <Input label="Categoría">
        <select name="" id="" placeholder="Seleccione una categoría">
          <option value="">Seleccione una categoría</option>
          <option value="Front end">Front end</option>
          <option value="Back end">Back end</option>
          <option value="Innovación y gestión">Innovación y gestión</option>
        </select>
      </Input>
      <Input label="Imagen" placeholder="Ingrese una imagen" />
      <Input label="Video" placeholder="Ingrese una video" />
      <Input label="Descripción">
        <textarea name="" id="" placeholder="¿De qué se trata este vídeo?" />
      </Input>
      <div />
      <div className={styles.form_buttons}>
        <button>Guardar</button>
        <button>Limpiar</button>
      </div>
    </form>
  );
};
