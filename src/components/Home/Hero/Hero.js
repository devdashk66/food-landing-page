import Button from "../Button/Button";
import "./Hero.css";
import { Carousel } from "react-carousel3";

const style = {
  width: 297,
  height: 296,
  background: "red",
};

function Hero() {
  return (
    <div className="container" id="hero">
      <div className="heroText">
        <h1>Your Favourite Food Delivered Hot & Fresh</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
          perspiciatis suscipit necessitatibus qui molestias explicabo quas,
          iste
        </p>
        <Button title="Order Now >" />
      </div>
      <div className="heroImages">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Carousel
            height={330}
            width={800}
            yOrigin={20}
            yRadius={50}
            autoPlay={true}
          >
            <div key={1} style={style}>
              <img
                src="https://www.pennmedicine.org/-/media/images/miscellaneous/food%20and%20drink/colorful_plate.ashx?mw=620&mh=408"
                alt=""
              />
            </div>
            <div key={2} style={style}>
              <img
                src="https://media.istockphoto.com/id/1017706758/photo/salad-mix-plate-shot-from-above-on-light-green-picnic-table.jpg?s=612x612&w=0&k=20&c=Rip73xnuxXttxu8U_XmYAtb864anIXkqJteJVmqBJ5A="
                alt=""
              />
            </div>
            <div key={3} style={style}>
              <img
                src="https://www.cspinet.org/sites/default/files/styles/700x530/public/2022-01/lowCarbBowl_hero_700x530.jpg?h=61bc1599"
                alt=""
              />
            </div>
            <div key={4} style={style}>
              <img
                src="http://www.dietitiannupur.com/wp-content/uploads/2022/06/calories-counting-diet-food-control-and-weight-loss-concept-calorie-768-2.jpg"
                alt=""
              />
            </div>
            <div key={5} style={style}>
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/faceless-female-eating-healthy-vegan-plant-based-royalty-free-image-1654112192.jpg"
                alt=""
              />
            </div>
            <div key={6} style={style}>
              <img
                src="https://brocku.ca/brock-news/wp-content/uploads/2021/03/GettyImages-897323954-1600x1067.jpg?x70330"
                alt=""
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Hero;
