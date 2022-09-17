import Carousel from "react-elastic-carousel";
import { CarouselCard1, CarouselCard2 } from "./CarouselCards";

const CarouselNew = () => {
  return (
    <Carousel
     showArrows={false}
    >
      <div>
        <CarouselCard1 />
      </div>
      <div>
        <CarouselCard2 />
      </div>
    </Carousel>
  );
};
export default CarouselNew;
