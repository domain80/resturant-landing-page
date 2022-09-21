import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import dishes from "./data/dishes.json";

function App() {
  const [currentIndex, setCurrentIndex]: [number, Function] = useState(0);
  return (
    <div className="App container  mx-auto px-10 bg-background bg-center  bg-cover min-h-screen  min-w-screen">
      <section className="hero mx-auto w-max relative  max-w-lg -mt-10">
        <img src={dishes[currentIndex].imageLarge} alt={dishes[currentIndex].name} />
      </section>
      <div className="flex -mt-72 pb-4 justify-around max-w-max gap-20 mx-auto items-center">
        {dishes.map((item) => {
          return <Card {...{...item}} />;
        })}
      </div>
    </div>
  );
}

export default App;
