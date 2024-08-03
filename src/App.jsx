import React from "react";
import { Navbar, Hero, Features, Testimonials, CTA } from "./components";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="md:space-y-0 mx-auto max-w-6xl space-y-12">
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
      </div>
    </div>
  );
};

export default App;
