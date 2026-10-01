import { useState } from "react";

const API_URL = "/api/customer/create/";

function FormularioContacto() {

  const [formulario, setFormulario] =
    useState({
      nombre: "",
      apellido: "",
      direccion: "",
      correo: "",
      telefono: "",
      ingreso: "",
      status: true
    });

  const [
    mensajeEstado,
    setMensajeEstado
  ] = useState("");

  const [enviando, setEnviando] =
    useState(false);

  function manejarCambio(evento) {

    const {
      name,
      value,
      type,
      checked
    } = evento.target;

    setFormulario({
      ...formulario,

      [name]:
        type === "checkbox"
          ? checked
          : value
    });
  }

  async function manejarEnvio(evento) {

    evento.preventDefault();

    if (
      formulario.nombre.trim().length < 2
    ) {
      setMensajeEstado(
        "El nombre debe tener al menos 2 caracteres."
      );

      return;
    }

    if (
      !formulario.correo.includes("@")
    ) {
      setMensajeEstado(
        "Ingresa un correo válido."
      );

      return;
    }

    try {

      setEnviando(true);

      setMensajeEstado("");

      const respuesta =
        await fetch(API_URL, {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify(
            formulario
          )
        });

      if (!respuesta.ok) {

        throw new Error(
          `Error HTTP: ${respuesta.status}`
        );
      }

      const cliente =
        await respuesta.json();

      setMensajeEstado(
        `Cliente ${cliente.nombre} registrado correctamente.`
      );

      setFormulario({
        nombre: "",
        apellido: "",
        direccion: "",
        correo: "",
        telefono: "",
        ingreso: "",
        status: true
      });

    } catch (error) {

      setMensajeEstado(
        `No se pudo registrar el cliente: ${error.message}`
      );

    } finally {

      setEnviando(false);
    }
  }

  return (
    <section
      id="registro"
      className="registro"
    >

      <h2>
        Registrar cliente
      </h2>

      <form
        onSubmit={manejarEnvio}
        className="formulario"
      >

        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formulario.nombre}
          onChange={manejarCambio}
          required
        />

        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={formulario.apellido}
          onChange={manejarCambio}
        />

        <input
          type="text"
          name="direccion"
          placeholder="Dirección"
          value={formulario.direccion}
          onChange={manejarCambio}
        />

        <input
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={formulario.correo}
          onChange={manejarCambio}
          required
        />

        <input
          type="text"
          name="telefono"
          placeholder="Teléfono"
          value={formulario.telefono}
          onChange={manejarCambio}
        />

        <label>
          Fecha de ingreso
        </label>

        <input
          type="date"
          name="ingreso"
          value={formulario.ingreso}
          onChange={manejarCambio}
        />

        <label className="checkbox">
          <input
            type="checkbox"
            name="status"
            checked={formulario.status}
            onChange={manejarCambio}
          />

          Cliente activo
        </label>

        <button
          type="submit"
          disabled={enviando}
        >
          {enviando
            ? "Registrando..."
            : "Registrar cliente"}
        </button>

        {mensajeEstado && (
          <p className="mensaje-formulario">
            {mensajeEstado}
          </p>
        )}

      </form>

    </section>
  );
}

export default FormularioContacto;