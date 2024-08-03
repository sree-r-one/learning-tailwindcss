import React from "react";
import { Navbar, Hero, Features, Testimonials } from "./components";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-6xl">
        <Hero />
        <Features />
        <Testimonials />
      </div>
    </div>
  );
};

export default App;
