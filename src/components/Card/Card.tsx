import "./styles.scss";

const IMAGE_PLACEHOLDER = "https://placehold.co/600x400";

type CardProps = {
  name: string;
  image: string;
  bgColor: string;
};

const Card: React.FC<CardProps> = ({ name, image, bgColor }) => {
  return (
    <div className={"card"}>
      <div className="card-image" style={{ background: bgColor }}>
        <img src={image || IMAGE_PLACEHOLDER} alt={name} />
      </div>
      <div className="card-title">
        <span>{name}</span>
      </div>
    </div>
  );
};

export default Card;
