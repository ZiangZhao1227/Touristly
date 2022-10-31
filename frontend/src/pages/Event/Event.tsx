import "./Event.css";
import Header from "../../components/Header/Header";
import useFetch from "../../hooks/useFetch";
import noImage from "../../assets/noImage.jpeg";
import { useState, useEffect } from "react";
import { RootObject } from "../../@types";
import { Grid, CircularProgress } from "@mui/material";
import CardDetails from "../../components/Card/CardDetails";

const Event = () => {
  const { data, loading, error } = useFetch("api/v1/events");

  const [eventData, setEventData] = useState<RootObject[]>([]);

  console.log(data);

  useEffect(() => {
    setEventData(data || []);
  }, [data]);

  return (
    <>
      <Header title="Upcoming Events" bgImage="Event" />
      <div id="Content" className="Content">
        <section>
          <div id="Explore" className="Container">
            <h1 className="Heading">Explore </h1>

            <div className="Card-wrapper">
              {loading && <CircularProgress />}
              <Grid container spacing={3}>
                {eventData &&
                  eventData.map((event) => (
                    <Grid key={event.id} item xs={12} md={4}>
                      <CardDetails
                        key={event.id}
                        src={
                          event.description.images.length > 0
                            ? event.description.images[0]?.url
                            : noImage
                        }
                        name={event.name.en}
                        title={event.description.intro}
                        website={event.info_url}
                        description={event.description.intro}
                        address={event.location.address.street_address}
                      />
                    </Grid>
                  ))}
              </Grid>
              {error && <div>Something went wrong...</div>}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Event;
