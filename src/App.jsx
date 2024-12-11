import "./App.css";
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
// video -link => https://www.youtube.com/watch?v=ukiGFmZ32YA&t=5006s
function App() {
  return (
    <>
      <main className="overflow-hidden">
        <Header />
        <Hero />
        <Features />
        <Pricing />
      </main>
    </>
  );
}

export default App;
