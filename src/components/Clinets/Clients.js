import React from "react";
import "./Clients.css";
const data = [
  {
    cName: "clients-images",
    alt: "clients",
    img: "https://inkbotdesign.com/wp-content/uploads/2012/09/Microsoft-Logo-Design.png?ezimgfmt=ng:webp/ngcb15",
  },
  {
    cName: "clients-images",
    alt: "clients",
    img: "https://inkbotdesign.com/wp-content/uploads/2012/09/Google-Logo-Design.jpg?ezimgfmt=ng:webp/ngcb15",
  },
  {
    cName: "clients-images",
    alt: "clients",
    img: "https://inkbotdesign.com/wp-content/uploads/2012/09/Toyota-Logo-Design.jpg?ezimgfmt=ng:webp/ngcb15",
  },
  {
    cName: "clients-images",
    alt: "clients",
    img: "https://inkbotdesign.com/wp-content/uploads/2012/09/Microsoft-Logo-Design.png?ezimgfmt=ng:webp/ngcb15",
  },
  {
    cName: "clients-images",
    alt: "clients",
    img: "https://inkbotdesign.com/wp-content/uploads/2012/09/Google-Logo-Design.jpg?ezimgfmt=ng:webp/ngcb15",
  },
]; 
const Clients = () => {
  return (
    <div className="clients-container">
      <div className="clients-container-images">
        {data.map((item) => (
          <>
            <img src={item.img} alt={item.alt} className={item.cName} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Clients;
