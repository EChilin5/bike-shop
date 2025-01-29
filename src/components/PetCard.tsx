import { useState } from "react";
import "./PetCard.scss";

interface PetCardDetails {
  title: String;
  price: string;
  stock: string;
  img: string;
}

const PetCard = (props: PetCardDetails) => {
  const { title, price, stock, img } = props;
  const [isHover, setIsHover] = useState<boolean>(false);
  const [starColor, setStarColor] = useState<string>("grey");
  const handleClick = () => {
    setStarColor(starColor === "grey" ? "#bbbb14bf" : "grey");
  };

  return (
    <div
      className="pet-card"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isHover && <div className="pet-card-banner">Adopt Me</div>}
      <div
        className="pet-favorite"
        style={{
          backgroundColor: starColor,
        }}
        onClick={handleClick}
      ></div>
      <div className="pet-card-image">
        <img src={img} alt="bike photo" />
      </div>
      <div className="pet-card-heading">
        <div className="pet-card-heading-title">{title}</div>
        <div className="pet-card-heading-price">{price}</div>
      </div>
    </div>
  );
};

export default PetCard;
