import Header from "./componentes/Header";
import Hero from "./componentes/Hero";
import SeccionServicios from "./componentes/SeccionServicios";
import FormularioContacto from "./componentes/FormularioContacto";
import Footer from "./componentes/Footer";

function App() {
  return (
    <>
      <Header />

      <main>

        <Hero />

        <SeccionServicios />

        <FormularioContacto />

      </main>

      <Footer />
    </>
  );
}

export default App;