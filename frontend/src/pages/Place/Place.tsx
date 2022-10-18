import Header from "../../components/Header/Header";
import "./Place.css";

const Place = () => {
  return (
    <>
      <Header title="Places" bgImage="Place" />
      <div id="Content" className="Content">
        <section>
          <div id="Explore" className="Container">
            <h1 className="Heading">Explore </h1>

            <div className="Card-wrapper"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Place;
