// mui
import {
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Divider,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { styled } from "@mui/material/styles";

// ----------------------------------------------------------------------

const SubtitleStyle = styled(Typography)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "10px",
}));

const SpacingStyle = styled(Typography)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

// ----------------------------------------------------------------------

type Props = {
  src: string;
  title: string;
  description: string;
  name: string;
  address: string;
  website: string;
};

// ----------------------------------------------------------------------

const PlaceDetails = ({
  src,
  title,
  description,
  name,
  address,
  website,
}: Props) => {
  return (
    <Card elevation={6} sx={{ borderRadius: 5 }}>
      <CardMedia style={{ height: 350 }} image={src} title={title} component='img'/>
      <CardContent>
        <Typography gutterBottom variant="h5">
          {name}
        </Typography>

        <SubtitleStyle gutterBottom variant="body2" color="textSecondary">
          <LocationOnIcon />
          {address}
        </SubtitleStyle>

        <SpacingStyle variant="body2" color="textSecondary">
           {description}
        </SpacingStyle>
      </CardContent>

      <Divider sx={{ borderStyle: "dashed" }} />

      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(website, "_blank")}
        >
          Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
