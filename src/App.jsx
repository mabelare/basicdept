import { Hero, Adage, Bdr, Featured, Connects, News, Footer } from "./sections";
import Nav from "./Components/Nav";
function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="hero-section">
        <Hero />
      </section>
      <section className="adage-section">
        <Adage />
      </section>
      <section className="bdr-section">
        <Bdr />
      </section>
      <section className="featured-section">
        <Featured />
      </section>
      <section className="connects-section">
        <Connects />
      </section>
      <section className="news-section">
        <News />
      </section>
      <section className="footer-section">
        <Footer />
      </section>
    </main>
  );
}

export default App;
