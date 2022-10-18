import { Link } from "react-router-dom";
import "./Card.css";

type Props = {
  src: string;
  CardTitle: string;
  CardDesc: string;
  link: string;
};

const Card = ({ src, CardTitle, CardDesc, link }: Props) => {
  return (
    <div className="Card">
      <img src={src} alt={`Helsinki ${CardTitle}`} />
      <h1>{CardTitle}</h1>
      <p>{CardDesc}</p>
      <Link className="Btn" to={link}>
        Read more
      </Link>
    </div>
  );
};

export default Card;
