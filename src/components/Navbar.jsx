import React, { useState } from "react";
import PropTypes from "prop-types";

export const Navbar = (props) => {
    const [myStyle , setMyStyle] = useState({
    backgroundColor: "white",
    });
    const toggleStyle=()=>{
      if(myStyle.color==='white'){
        setMyStyle({
          color:'black',
          backgroundColor:'white'
        })
      }else {
        setMyStyle({
          color:'white',
          backgroundColor:'gray'
        })
      }
    }
     

  return (
    <React.Fragment>
      <nav className="navbar   " style={myStyle}>
        <div className="container-fluid" style={myStyle}>
          <a className="navbar-brand     fs-3 fw-bold" style={myStyle} href="/">
            {props.title}
          </a>

          <div className="form-check form-switch ">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={toggleStyle}
             />
            <label className="form-check-label" for="flexSwitchCheckDefault">
              Dark Mode
            </label>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  AboutTextUtils: PropTypes.string,
};

Navbar.defaultProps = {
  title: "set title here",
  AboutTextUtils: "set the about here",
};
