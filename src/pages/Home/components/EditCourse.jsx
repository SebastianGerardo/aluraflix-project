import { Input } from "../../../components/Input";
import styles from "./EditCourse.module.css";

const commonStyles = {
  border: "3px solid #2271D1",
};

export const EditCourse = ({ course }) => {
  return (
    <form className={styles.editCourse}>
      <h1 className={styles.title}>Editar card:</h1>
      <Input
        style={commonStyles}
        label="Título"
        placeholder="Ingrese un título"
      />
      <Input label="Categoría">
        <select
          style={{
            border: "3px solid #2271D1",
          }}
          name=""
          id=""
          placeholder="Seleccione una categoría"
        >
          <option value="">Seleccione una categoría</option>
          <option value="Front end">Front end</option>
          <option value="Back end">Back end</option>
          <option value="Innovación y gestión">Innovación y gestión</option>
        </select>
      </Input>
      <Input
        style={commonStyles}
        label="Imagen"
        placeholder="Ingrese una imagen"
      />
      <Input
        style={commonStyles}
        label="Video"
        placeholder="Ingrese una video"
      />
      <Input label="Descripción">
        <textarea
          style={{ ...commonStyles, height: "112px", minHeight: "112px" }}
          name=""
          id=""
          placeholder="¿De qué se trata este vídeo?"
        />
      </Input>
      <div />
      <div className={styles.form_buttons}>
        <button>Guardar</button>
        <button>Limpiar</button>
      </div>
    </form>
  );
};
