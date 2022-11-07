import "./Ticket.css";
import { Button, Container, Box } from "@mui/material";
import { useState} from "react";

import RenderTicket from "./RenderTicket";

const Ticket = () => {
  const [ticketId, setTicketId] = useState("");

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
          zones: "AB",
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
            <Box display="flex" justifyContent="center" alignItems="center">
              <Button variant="contained" onClick={handleClick}>
                Order from HSL
              </Button>
            </Box>
            <RenderTicket ticketId={ticketId} />
          </Container>
        </section>
      </div>
    </>
  );
};

export default Ticket;
