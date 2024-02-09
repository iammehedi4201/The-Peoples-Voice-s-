import Carousel from "react-bootstrap/Carousel";
import { useTopHeading } from "../../Hooks/useTopHeading";
import "./Carasuel.css";
import CarouselItems from "./CarouselItems/CarouselItems";

const Carasuel = () => {
  const [topHeading, setTopHeading] =useTopHeading();

  return (
    <section className="carosuel-section">
      <Carousel>
        {topHeading.map((news) => (
          <Carousel.Item key={news.newsId}>
            <CarouselItems 
             news={news}
            ></CarouselItems>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Carasuel;
