// mui
import {
  Typography,
  Button,
  Card,
  Chip,
  CardMedia,
  CardContent,
  CardActions,
  Divider,
  Box,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EuroIcon from "@mui/icons-material/Euro";
import BusinessIcon from "@mui/icons-material/Business";
import { styled } from "@mui/material/styles";
import { Tag } from "../../@types";

// ----------------------------------------------------------------------

const ChipStyle = styled(Chip)(() => ({
  margin: "5px 5px 5px 0",
}));

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
  price?: {
    from: number;
    to: number;
    pricingType: string;
  };
  tags?: string[];
  company?: {
    name: string;
    businessId: string;
    email: string;
    phone: string;
  };
  placeTags?: Tag[];
};

// ----------------------------------------------------------------------

const PlaceDetails = ({
  src,
  title,
  description,
  name,
  address,
  website,
  company,
  price,
  tags,
  placeTags,
}: Props) => {
  return (
    <Card
      elevation={6}
      sx={{
        borderRadius: 5,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <>
        {" "}
        <CardMedia
          style={{ height: 350 }}
          image={src}
          title={title}
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {name}
          </Typography>

          <SubtitleStyle gutterBottom variant="body2" color="textSecondary">
            <LocationOnIcon />
            {address}
          </SubtitleStyle>

          {price && (
            <SubtitleStyle gutterBottom variant="body2" color="textSecondary">
              {price.pricingType === "free" ? (
                <>
                  {" "}
                  <EuroIcon />
                  {price.pricingType}
                </>
              ) : (
                <>
                  <EuroIcon />
                  {price.from ? price.from : "NA"} -{" "}
                  {price.to ? price.to : "NA"} {price.pricingType}
                </>
              )}
            </SubtitleStyle>
          )}

          {company && (
            <SubtitleStyle gutterBottom variant="body2" color="textSecondary">
              <BusinessIcon />
              {company.name}
            </SubtitleStyle>
          )}

          {tags?.map((tag) => (
            <ChipStyle key={tag} size="small" label={tag} />
          ))}

          {placeTags?.map((tag) => (
            <ChipStyle key={tag.id} size="small" label={tag.name} />
          ))}

          <SpacingStyle variant="body2" color="textSecondary">
            {description}
          </SpacingStyle>
        </CardContent>
      </>

      <Box sx={{ mt: "auto" }}>
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
      </Box>
    </Card>
  );
};

export default PlaceDetails;
