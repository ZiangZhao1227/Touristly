import "./Ticket.css";
import { Button, Container, Box, Stack } from "@mui/material";
import { useState } from "react";
import RenderTicket from "./RenderTicket";
import BasicSelect from "../../components/Select/BasicSelect";

const Ticket = () => {
  const [ticketId, setTicketId] = useState("");
  const [zone, setZones] = useState("AB");

  const handleClick = async () => {
    try {
      const response = await fetch("api/v1/tickets/order", {
        method: "POST",
        headers: {
          "X-API-Key": "f5c778db-145d-4c61-833c-8dc039376005",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: "+358501231234",
          ticketTypeId: "single",
          customerTypeId: "adult",
          zones: zone,
        }),
      });
      const data = await response.json();
      setTicketId(data.ticketId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div id="Content" className="Content">
        <section>
          <Container>
            <h1 className="Heading">Order tickets</h1>
            <Stack
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              {" "}
              <BasicSelect zone={zone} setZones={setZones} />
              <Button
                variant="contained"
                onClick={handleClick}
                sx={{ minWidth: 450 }}
              >
                Order from HSL
              </Button>
              <RenderTicket ticketId={ticketId} zone={zone} />
            </Stack>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Ticket;
