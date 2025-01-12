/* eslint-disable */

import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { useLocation } from "react-router-dom";
import bike from "../image/bike-logo.png"
// import arrowcircle from "../../images/navbar2icon.svg";
// import closeIcon from "../../assets/navbar/navbar-x.svg";
// import contactIcon from "../../assets/navbar/contact-icon.svg";

// import txtlabs from "../../images/TXTLABS.svg";
// import hamburgerIcon from "../../assets/navbar/round-menu.svg";

function Navbar() {
  const [isTransparent, setIsTransparent] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const location = useLocation();

//   const formLink =
//     "https://docs.google.com/forms/d/e/1FAIpQLSc_xU4FNofmbgjJuWXSdcryGk7oV7El-BYvCXzDjL0tRMuxdQ/viewform";
  // when user scrolls to a certain section
  // than the navbar becomes transparent
  // will be helpful in hiding and show
  const handleScroll = () => {
    if (window.scrollY === 0) {
      // User is at the top of the page
      setIsTransparent(false);
    } else if (window.scrollY > lastScrollY) {
      // User is scrolling down
      setIsTransparent(true);
    } else {
      // User is scrolling up
      setIsTransparent(false);
    }
    setLastScrollY(window.scrollY);
  };

  const isActive = (path: string) => location.pathname === path;

  const handleContact = () => {
    // window.open(formLink);
  };

  const handleClick = () => {
    // Your click handling logic here
    // console.log("clicked");
    setIsHamburgerOpen(!isHamburgerOpen);
    if (!isHamburgerOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  // event listener is added to window
  // that will trigger the scroll effect
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  //  className={`navbar ${isTransparent ? "hidden" : "transparent"}`}
  return (
    <nav>
      <div
        id="top-side-bar"
        className={`${isHamburgerOpen ? "active" : ""} ${isTransparent ? "hidden" : "transparent"}`}
      >
        <div className="navbar-brand">
          <a href="/home">
            <img
              id="txt-labs-title"
              className={`${isHamburgerOpen ? "active" : ""}`}
              src={bike}
              alt="chills-bike"
              width="50px"
            />
          </a>
        </div>
        <div id="center-links">
          <a
            href="/services"
            className={`navbar-link ${isActive("/services") ? "active" : ""}`}
          >
            Services
          </a>
          <a
            href="/impact"
            className={`navbar-link ${isActive("/impact") ? "active" : ""}`}
          >
            Product
          </a>
          <a
            href="/about"
            className={`navbar-link ${isActive("/about") ? "active" : ""}`}
          >
            About
          </a>
        </div>

        <div id="contact-button-navbar">
          <button
            className="navbar-contact-btn"
            type="submit"
            onClick={() => handleContact()}
          >
            Contact
            {/* <img src={arrowcircle} alt="down arrow" /> */}
          </button>
        </div>
        <div
          onClick={handleClick}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleClick();
            }
          }}
          role="button"
          tabIndex={0}
          id="hamburger-icon"
        >
          {/* <img
            src={isHamburgerOpen ? closeIcon : hamburgerIcon}
            alt="hamburger icon"
            className={`menu-icon ${isHamburgerOpen ? "close" : "hamburger"}`}
          /> */}
        </div>
      </div>

      {/* Menu shown when user clicks on hamburger menu */}
      {isHamburgerOpen && (
        <div id="bottom-side-bar">
          <div id="links-column-container">
            <div id="links-column-separator">
              <a
                className={`mobile-navbar-link ${isActive("/home") ? "active" : ""}`}
                href="/home"
              >
                HOME
              </a>
              <a
                className={`mobile-navbar-link ${isActive("/services") ? "active" : ""}`}
                href="/services"
              >
                SERVICES
              </a>
              <a
                className={`mobile-navbar-link ${isActive("/impact") ? "active" : ""}`}
                href="/impact"
              >
                IMPACT
              </a>
              <a
                className={`mobile-navbar-link ${isActive("/about") ? "active" : ""}`}
                href="/about"
              >
                ABOUT
              </a>
            </div>
            <div>
{/*     
              <img
                className="contact-button"
                src={contactIcon}
                alt="contact-button"
                onClick={() => handleContact()}
              /> */}
            
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

// function NavbarComponent() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="/home">
//           <img
//             src={txtlabs}
//             alt="txt labs title"
//             className="d-inline-block align-top"
//           />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavbarComponent;
