import React from "react";
import {
  Navbar,
  Hero,
  Features,
  Testimonials,
  CTA,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="mx-auto max-w-6xl space-y-12">
        <Hero />
        <Features />
        <Testimonials />
      </div>
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
