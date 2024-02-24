import React from "react";
import { useAuth } from "../store/auth";

function Services() {
  const { services } = useAuth();

  if (!services) {
    // If services is undefined, return a loading state or an empty div
    return (
      <div className="container">
        <p>Loading services...</p>
      </div>
    );
  }

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services</h1>
      </div>

      <div className="container" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}>
        {services.map((item, index) => {
          const { price, provider, description, service } = item;

          return (
            <div className="card" key={index}>
              <div className="card-img">
                <img src="/images/design.png" width="200" alt="icon"/>
              </div>

              <div className="card-details">
                <div className="grid grid-cols-2">
                  <p>{provider}</p>
                  <p> {price}</p>
                </div>
                <h2> {service}</h2>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
