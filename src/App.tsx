import Slider from "./components/Slider/Slider";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <Slider arrows={false} dots={true}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Slider>
    </>
  );
}

export default App;
