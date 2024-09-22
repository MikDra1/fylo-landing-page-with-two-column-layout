import { useEffect, useState } from "react";
import Cta from "./components/Cta";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Navigation from "./components/Navigation";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navigation />
          <Hero />
          <Description />
          <Cta />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
