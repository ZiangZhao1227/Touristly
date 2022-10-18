import event from "../../assets/event.jpg";
import activity from "../../assets/activity.jpg";
import place from "../../assets/place.jpg";
import "./Content.css";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div id="Content" className="Content">
      <section>
        <div id="Explore" className="Container">
          <h1 className="Heading">Explore </h1>

          <div className="Card-wrapper">
            <div className="Card">
              <img src={place} alt="helsinki places" />
              <h1>Places</h1>
              <p>
                Over 2000 places of interest, restaurants, shops, hotels etc. in
                and around Helsinki. Data is frequently updated by local
                businesses, locals and visitors alike.
              </p>
              <Link className="Btn" to="/places">
                Read more
              </Link>
            </div>

            <div className="Card">
              <img src={event} alt="helsinki events" />
              <h1>Events</h1>
              <p>
                Frequently updated events from multiple cultural event
                organizers including concerts, sports events, museum exhibitions
                and many more.
              </p>
              <Link className="Btn" to="/events">
                Read more
              </Link>
            </div>

            <div className="Card">
              <img src={activity} alt="helsinki activities" />
              <h1>Activities</h1>
              <p>
                High-quality experiences from local service providers, including
                for example archipelago cruises and city walking tours.
              </p>
              <Link className="Btn" to="/activities">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
