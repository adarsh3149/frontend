import React from "react";
import { useAuth } from "../store/auth";
import axios from "axios"
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

  const checkoutHandler = async (amount) => {
    try {
      const {data:{key}}=await axios.get("https://backend-1-tgav.onrender.com/pay/key")
    const {data:{order}}=await axios.post("https://backend-1-tgav.onrender.com/pay/checkout",{amount})
    console.log(window);
  
      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Sinmplyjs",
        description: "Razorpay tutorial",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCXgDBkLAvVSQkgFel0DJg35VmdbdZDkGTQA&usqp=CAU",
        order_id: order.id,
        callback_url: "https://backend-1-tgav.onrender.com/pay/verification",
        prefill: {
          name: "Killer",
          email: "alex@gmail.com",
          contact: "1234567890",
        },
        notes: {
          address: "razorapy official",
        },
        theme: {
          color: "#3399cc",
        },
      };
  
      console.log(window);
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };
  

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
          const { amount, provider, description, service } = item;

          return (
            <div className="card" key={index}>
              <div className="card-img">
                <img src="/images/design.png" width="200" alt="icon"/>
              </div>

              <div className="card-details">
                <div className="grid grid-cols-2">
                  <p>{provider}</p>
                  <p>amount:- {amount}</p>
                </div>
                <h2> {service}</h2>
                <p>{description}</p>
                <div className="grid ">
                <button onClick={()=>checkoutHandler(amount)}>purchase</button>
                </div>
                
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
