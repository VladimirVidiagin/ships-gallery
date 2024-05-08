import { Ship } from "../../pages/ShipsPage/model/actionTypes";
import { convertToRoman } from "../../shared/utils/convertToRoman";

const ShipCard: React.FC<{ ship: Ship }> = ({ ship }) => {
  return (
    <article className="ship-card">
      <img
        className="ship-card__class-icon"
        src={ship.type.icons.default}
        alt={ship.type.title}
        title={`Класс ${ship.type.title}`}
      />
      <span className="ship-card__level" title={`Уровень ${ship.level}`}>
        {convertToRoman(ship.level)}
      </span>
      <img
        className="ship-card__nation-flag"
        src={ship.nation.icons.large || ship.nation.icons.medium}
        alt={ship.nation.title}
        title={"Нация"}
      />
      <span className="ship-card__nation-title" title={"Нация"}>
        {ship.nation.title}
      </span>
      <img
        className="ship-card__ship-image"
        src={ship.icons.large}
        alt={ship.title}
      />
      <p className="ship-card__ship-description">{ship.description}</p>
      <h2 className="ship-card__ship-title" title={"Название корабля"}>
        {ship.title}
      </h2>
    </article>
  );
};

export default ShipCard;
