import "./Activity.css";
import Header from "../../components/Header/Header";
import useFetch from "../../hooks/useFetch";
import { Grid, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import CardDetails from "../../components/Card/CardDetails";
import noImage from "../../assets/noImage.jpeg";
import { ActivityObject } from "../../@types";

const Acivity = () => {
  const { data, loading, error } = useFetch("api/v1/activities");

  const [activityData, setActivityData] = useState<ActivityObject[]>([]);

  useEffect(() => {
    setActivityData(data || []);
  }, [data]);

  return (
    <>
      <Header title="Activities" bgImage="Activity" />
      <div id="Content" className="Content">
        <section>
          <div id="Explore" className="Container">
            <h1 className="Heading">Explore </h1>

            <div className="Card-wrapper">
              {loading && <CircularProgress />}
              <Grid container spacing={3} gridAutoRows={"1fr"}>
                {activityData &&
                  activityData.map((activity) => (
                    <Grid key={activity.id} item xs={12} md={4}>
                      <CardDetails
                        key={activity.id}
                        src={
                          activity.media.length > 0
                            ? activity.media[0].originalUrl
                            : noImage
                        }
                        name={activity.descriptions.en.name}
                        title={
                          activity.media.length > 0
                            ? activity.media[0].alt
                            : "default title"
                        }
                        website={activity.siteUrl}
                        description={activity.descriptions.en.description}
                        address={activity.address.streetName}
                        price={activity.priceEUR}
                        tags={activity.tags}
                        company={activity.company}
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

export default Acivity;
