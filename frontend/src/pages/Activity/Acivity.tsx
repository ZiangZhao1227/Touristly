import "./Activity.css";
import Header from "../../components/Header/Header";

const Acivity = () => {
  return (
    <>
      <Header title="Activities" bgImage="Activity" />
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

export default Acivity;
