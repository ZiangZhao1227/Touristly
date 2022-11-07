import { useState, useEffect } from "react";
import jwt from "jwt-decode";

type Props = {
  ticketId: string;
};

const RenderTicket = ({ ticketId }: Props) => {
  const [ticketData, setTicketData] = useState<any>(null);
  const [ticketHTML, setTicketHTML] = useState<any>(null);

  useEffect(() => {
    if (ticketData) {
      // let ticketElement = document.createElement("html");
      // ticketElement.innerHTML = ticketData;
      // const outerHTML = ticketElement.querySelector("#qrCodeImg")?.outerHTML;

      console.log(ticketData)
      let result = ticketData.match(/data:image\/png;base64,[a-zA-Z0-9+-=]*/);
      console.log("result", result);
      if (result) {
        setTicketHTML(`<img src="${result[0]}" />`);
      }
    }
  }, [ticketData]);

  (window as any).ticket = ticketData;
  //   console.log("ticketHTML", ticketHTML);

  useEffect(() => {
    const renderTicket = async () => {
      if (ticketId) {
        const response = await fetch(`api/v1/tickets?ticketId=${ticketId}`);
        const dataToken = await response.json();
        const data = jwt(dataToken.ticketData) as any;
        setTicketData(data?.ticket);
      }
    };
    renderTicket();
  }, [ticketId]);
  return (
    <>
      {ticketData && (
        <pre dangerouslySetInnerHTML={{ __html: ticketHTML }}></pre>
      )}
    </>
  );
};

export default RenderTicket;
