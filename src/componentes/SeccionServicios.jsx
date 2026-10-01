import {
  useEffect,
  useState
} from "react";

import Tarjeta from "./Tarjeta";

const API_URL = "/api/customer/";

function SeccionServicios() {
  const [clientes, setClientes] =
    useState([]);

  const [error, setError] =
    useState(null);

  const [cargando, setCargando] =
    useState(true);

  useEffect(() => {
    async function cargarClientes() {
      try {
        const respuesta =
          await fetch(API_URL);

        if (!respuesta.ok) {
          throw new Error(
            `Error HTTP: ${respuesta.status}`
          );
        }

        const datos =
          await respuesta.json();

        setClientes(datos);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    }

    cargarClientes();
  }, []);

  if (cargando) {
    return (
      <p className="mensaje">
        Cargando clientes...
      </p>
    );
  }

  if (error) {
    return (
      <p className="mensaje error">
        No se pudieron cargar los
        clientes: {error}
      </p>
    );
  }

  return (
    <section
      id="clientes"
      className="servicios"
    >
      <h2>
        Clientes registrados
      </h2>

      <div className="contenedor-tarjetas">

        {clientes.length === 0 ? (
          <p>
            No hay clientes registrados.
          </p>
        ) : (
          clientes.map((cliente) => (
            <Tarjeta
              key={cliente.id}
              nombre={cliente.nombre}
              apellido={cliente.apellido}
              correo={cliente.correo}
              telefono={cliente.telefono}
              direccion={cliente.direccion}
              ingreso={cliente.ingreso}
              status={cliente.status}
            />
          ))
        )}

      </div>
    </section>
  );
}

export default SeccionServicios;