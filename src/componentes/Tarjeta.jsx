function Tarjeta({
  nombre,
  apellido,
  correo,
  telefono,
  direccion,
  ingreso,
  status
}) {
  return (
    <div className="tarjeta">
      <h3>
        {nombre} {apellido}
      </h3>

      <p>
        <strong>Correo:</strong>{" "}
        {correo || "No registrado"}
      </p>

      <p>
        <strong>Teléfono:</strong>{" "}
        {telefono || "No registrado"}
      </p>

      <p>
        <strong>Dirección:</strong>{" "}
        {direccion || "No registrada"}
      </p>

      <p>
        <strong>Fecha de ingreso:</strong>{" "}
        {ingreso
          ? new Date(ingreso).toLocaleDateString()
          : "No registrada"}
      </p>

      <p>
        <strong>Estado:</strong>{" "}
        {status ? "Activo" : "Inactivo"}
      </p>
    </div>
  );
}

export default Tarjeta;