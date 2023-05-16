import React from "react";
import "./Profile.css";

const Contact = (props) => {
  const kaustav = {
    name: "Kaustav Mondal",
    email: "kaustav.mondal2003@gmail.com",
  };

  //

  const ankit = {
    name: "Ankit Patnaik",
    email: "ankit.patnaik2003@gmail.com",
  };
  return (
    <div>
    <div className="heading">Contact</div>
      <div className="container">
        <div className="box">
        <div className="details">
          <h1>{kaustav.name}</h1>
          <h4>{kaustav.email}</h4>
          </div>
        </div>


  {/* --------------------------------------------------------------------------------------------- */}
        
        
        
        <div className="box">
        <div className="details">
          <h1>{ankit.name}</h1>
          <h4>{ankit.email}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
