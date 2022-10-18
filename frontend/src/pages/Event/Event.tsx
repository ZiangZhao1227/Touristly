import "./Event.css";
import Header from "../../components/Header/Header";

const Event = () => {
  return (
    <>
      <Header title="Upcoming Events" bgImage="Event" />
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

export default Event;
