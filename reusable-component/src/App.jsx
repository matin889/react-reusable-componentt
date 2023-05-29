import { useState } from "react";
import Button from "./Components/Button";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Navbar from "./Components/Navbar";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(true);
  }
  return (
    <>
      <Navbar
        navlink1="#"
        navlink2="#"
        navlink3="#"
        navlink4="#"
        nav1="Home"
        nav2="CV"
        nav3="Protfolio"
        nav4="Gallery"
      />

      <Gallery
        image1="./images/img2.jpg"
        image2="./images/img3.jpg"
        image3="./images/img4.jpg"
        image4="./images/img5.jpg"
        image5="./images/img6.jpg"
        image6="./images/img7.jpg"
      />
      <Button onClick={handleOpen}>Open</Button>
      {isOpen && (
        <div>
          <h2>Test</h2>
        </div>
      )}
      <Footer
        about="Stockholm, Sweden"
        mobile="+46707132419"
        email="matinpcc@yahoo.com"
      />
    </>
  );
};

export default App;
