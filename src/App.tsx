import Slider from "./components/Slider/Slider";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <Slider arrows={true} dots={true}>
        <Card></Card>
      </Slider>
    </>
  );
}

export default App;
