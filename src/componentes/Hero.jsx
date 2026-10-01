function Hero() {
  return (
    <section
      id="inicio"
      className="hero"
    >
      <h1>
        Bienvenido a nuestra aplicación
      </h1>

      <p>
        Aplicación desarrollada con React
        y conectada a una API REST creada
        con Node.js.
      </p>

      <a
        href="#clientes"
        className="boton-hero"
      >
        Ver clientes
      </a>
    </section>
  );
}

export default Hero;