import Header    from "./components/Header";
import Hero      from "./components/Hero";
import About     from "./components/About";
import Coaches   from "./components/Coaches";
import Equipment from "./components/Equipment";
import Footer    from "./components/Footer";

export default function App() {
  return (
    /*
     * direction: ltr on the root — only Hero.jsx overrides to rtl locally.
     */
    <div style={{ fontFamily: "'Cairo', sans-serif", overflowX: "hidden", direction: "ltr" }}>
      <Header />
      <Hero />
      <About />
      <Coaches />
      <Equipment />
      <Footer />
    </div>
  );
}
