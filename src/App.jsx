import React from "react";
import { Navbar, Footer } from "./components";
import { Home } from "./pages";
const App = () => {
  return (
    <div className="">
      <Navbar />
      <div className="mx-auto mt-20 max-w-6xl space-y-12 px-4">
        <Home />
        <Footer />
        <Footer />
        <Footer />
        <Footer />
        <Footer />
        <Footer />
      </div>
    </div>
  );
};

export default App;
