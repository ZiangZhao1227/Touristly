import { ReactNode } from "react";
import "./Card.css";

type Props = {
  src: string;
  CardTitle: string;
  CardDesc: string;
  action?: ReactNode;
};

const Card = ({ src, CardTitle, CardDesc, action }: Props) => {
  return (
    <div className="Card">
      <img src={src} alt={`Helsinki ${CardTitle}`} />
      <h1>{CardTitle}</h1>
      <p>{CardDesc}</p>
      {action && action}
    </div>
  );
};

export default Card;
