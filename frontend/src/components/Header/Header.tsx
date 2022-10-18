import "./Header.css";

type Props = {
  title: string;
  bgImage: string;
};

const Header = ({ title, bgImage }: Props) => {
  return (
    <div id="Header" className={bgImage}>
      <div className="Overlay">
        <h1 className="title">{title}</h1>
      </div>
    </div>
  );
};

export default Header;
