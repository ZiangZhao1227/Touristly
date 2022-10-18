import event from "../../assets/event.jpg";
import activity from "../../assets/activity.jpg";
import place from "../../assets/place.jpg";
import "./Content.css";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

const Content = () => {
  return (
    <div id="Content" className="Content">
      <section>
        <div id="Explore" className="Container">
          <h1 className="Heading">Explore </h1>

          <div className="Card-wrapper">
            <Card
              src={place}
              CardTitle={"Places"}
              CardDesc={
                "Over 2000 places of interest, restaurants, shops, hotels etc. in and around Helsinki. Data is frequently updated by local businesses, locals and visitors alike."
              }
              action={
                <Link className="Btn" to="/places">
                  Read more
                </Link>
              }
            />
            <Card
              src={event}
              CardTitle={"Events"}
              CardDesc={
                "Frequently updated events from multiple cultural event organizers including concerts, sports events, museum exhibitions and many more."
              }
              action={
                <Link className="Btn" to="/events">
                  Read more
                </Link>
              }
            />
            <Card
              src={activity}
              CardTitle={"Activities"}
              CardDesc={
                "High-quality experiences from local service providers, including for example archipelago cruises and city walking tours."
              }
              action={
                <Link className="Btn" to="/activities">
                  Read more
                </Link>
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
