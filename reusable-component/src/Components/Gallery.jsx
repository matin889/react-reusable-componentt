import React from "react";

const Gallery = ({ image1, image2, image3, image4, image5, image6 }) => {
  return (
    <div>
      <div className="gallery-image">
        <div>
          <img src={image1} />
        </div>
        <div>
          <img src={image2} />
        </div>
        <div>
          <img src={image3} />
        </div>
        <div>
          <img src={image4} />
        </div>
        <div>
          <img src={image5} />
        </div>
        <div>
          <img src={image6} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
