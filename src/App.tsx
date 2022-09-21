import "./App.css";
import Card from "./components/Card";
import dishes from "./data/dishes.json";

function App() {
  return (
    <div className="App container mx-auto px-10 bg-background bg-center bg-cover min-h-screen min-w-screen">
      <div className="flex justify-between items-center">
        {dishes.map((item) => {
          return <Card {...{...item}} />;
        })}
      </div>
    </div>
  );
}

export default App;
