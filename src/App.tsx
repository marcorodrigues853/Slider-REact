import Slider from "./components/Slider/Slider";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <Slider arrows={true} dots={true} autoSlide={true}>
        <Card></Card>
      </Slider>
      <Slider arrows={true} dots={true} autoSlide={false}>
        <Card></Card>
      </Slider>
    </>
  );
}

export default App;
