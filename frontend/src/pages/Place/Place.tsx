import Header from "../../components/Header/Header";
import "./Place.css";
import noImage from "../../assets/noImage.jpeg";
import useFetch from "../../hooks/useFetch";
import { useState, useEffect } from "react";
import { RootObject } from "../../@types";
import CardDetails from "../../components/Card/CardDetails";
import { Grid, CircularProgress } from "@mui/material";

const Place = () => {
  const { data, loading, error } = useFetch("api/v1/places");

  const [placeData, setPlaceData] = useState<RootObject[]>([]);

  useEffect(() => {
    setPlaceData(data || []);
  }, [data]);

  return (
    <>
      <Header title="Places" bgImage="Place" />
      <div id="Content" className="Content">
        <section>
          <div id="Explore" className="Container">
            <h1 className="Heading">Explore </h1>

            <div className="Card-wrapper">
              {loading && <CircularProgress />}
              <Grid container spacing={3}>
                {placeData &&
                  placeData.map((place) => (
                    <Grid key={place.id} item xs={12} md={4}>
                      <CardDetails
                        key={place.id}
                        src={
                          place.description.images.length > 0
                            ? place.description.images[0]?.url
                            : noImage
                        }
                        name={place.name.en}
                        title={place.description.intro}
                        website={place.info_url}
                        description={place.description.body}
                        address={place.location.address.street_address}
                        placeTags={place.tags}
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

export default Place;
