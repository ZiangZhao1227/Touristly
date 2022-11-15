import { useState, useEffect } from "react";
import jwt from "jwt-decode";
import "./RenderTicket.css";
import { Typography, Card, CardContent, Box } from "@mui/material";

type Props = {
  ticketId: string;
  zone: string;
};

const RenderTicket = ({ ticketId, zone }: Props) => {
  const [ticketQRData, setQRTicketData] = useState<any>(null);
  const [tickeQRtHTML, setTicketHTML] = useState<any>(null);
  const [tickeDetailData, setTicketDetailData] = useState<any>(null);

  useEffect(() => {
    if (ticketQRData) {
      // let ticketElement = document.createElement("html");
      // ticketElement.innerHTML = ticketData;
      // const outerHTML = ticketElement.querySelector("#qrCodeImg")?.outerHTML;

      // console.log(ticketData);
      let result = ticketQRData.match(/data:image\/png;base64,[a-zA-Z0-9+-=]*/);
      //console.log("result", result);
      if (result) {
        setTicketHTML(`<img src="${result[0]}" />`);
      }
    }
  }, [ticketQRData]);

  (window as any).ticket = ticketQRData;
  //   console.log("ticketHTML", ticketHTML);

  useEffect(() => {
    const renderTicket = async () => {
      if (ticketId) {
        const response = await fetch(`api/v1/tickets?ticketId=${ticketId}`);
        const dataToken = await response.json();
        const data = jwt(dataToken.ticketData) as any;
        //console.log(data);
        setQRTicketData(data?.ticket);
        setTicketDetailData(data);
      }
    };
    renderTicket();
  }, [ticketId]);
  return (
    <>
      {ticketQRData && tickeDetailData && (
        <Card sx={{ minWidth: 275 }}>
          <Typography textAlign="center" variant="h2">
            {zone}
          </Typography>
          <Box display="flex" justifyContent="center" alignItems="center">
            <pre dangerouslySetInnerHTML={{ __html: tickeQRtHTML }}></pre>
          </Box>
          <CardContent>
            <Typography variant="body1" textAlign="center" sx={{ mb: 1.5 }}>
              customerType: {tickeDetailData.customerTypeId}
            </Typography>

            <Typography variant="body1" textAlign="center" sx={{ mb: 1.5 }}>
              ticketType: {tickeDetailData.ticketTypeId}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Duration: {tickeDetailData.validFrom} - {tickeDetailData.validTo}
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default RenderTicket;
