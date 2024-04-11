import { useAppContext } from "../../context";
import Card from "../Card/Card";
import "./style.scss";

const Main = () => {
  const { filteredCources } = useAppContext();

  return (
    <div className="main-container">
      {filteredCources.map((cource) => {
        return (
          <Card
            key={cource.id}
            name={cource.name}
            image={cource.image}
            bgColor={cource.bgColor}
          />
        );
      })}
    </div>
  );
};

export default Main;
