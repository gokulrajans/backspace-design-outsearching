import React from "react";
import "./LeftImageService.css"; // Import the CSS file for styling
import BeforeAfterWidget from "../../HomePage/BeforeAfterWidget";
import SingleBefore from "../../../assets/images/Single-Before.jpg";
import SingleAfter from "../../../assets/images/Single-After.jpg";
import DayToDustAfter from "../../../assets/images/Day-to-dusk-After.jpg";
import DayToDuskBefore from "../../../assets/images/Day-toDusk-BeforeImg.png";
import HDRAfter from "../../../assets/images/HDR-After.jpg";
import HDRBefore from "../../../assets/images/Day-toDusk-BeforeImg.png";
import StagingBefore from "../../../assets/images/staging-before.jpg";
import StagingAfter from "../../../assets/images/staging-after.jpg";
import TwinglightBefore from "../../../assets/images/Twinglight-before.jpg";
import TwinglightAfter from "../../../assets/images/Twinglight-after.jpg";

const LeftImageService = ({
  title = "Transform Your Photos Into Cartoons, Paintings, and More",
  content = `Ever wondered what your photo would look like as a cartoon or an oil painting? Our Artsy effects can bring that imagination to life! One of our photo editor's most unique features is our Artsy effects; they make exploring different artistic styles with your photos easy. We initially launched with just a collection of Artsy effects in 2007 and have worked through the years to create more styles. Our photo effects are created in-house, making them completely unique to our editor. From our Cartoonizer, Watercolor, and Oil Painting effects to more modern styles like Poly Art and Mosaic, our editor has an artistic filter that will turn your photos into masterpieces.`,
  imageSrc = "your-image-path-here", // Replace with your image path
}) => {
  return (
    <>
    {/* First Data */}
      <div className="photo-effects-container">
        <div className="text-content">
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
        <div className="image-content">
          <BeforeAfterWidget beforeImage={DayToDustAfter} afterImage={DayToDuskBefore} />
        </div>
      </div>
      {/* Second Data */}
      <div className="photo-effects-container">
        <div className="image-content">
          <BeforeAfterWidget beforeImage={SingleAfter} afterImage={SingleBefore} />
        </div>
        <div className="text-content">
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      </div>
      {/* Third Data */}
      <div className="photo-effects-container">
        <div className="text-content">
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
        <div className="image-content">
          <BeforeAfterWidget beforeImage={HDRAfter} afterImage={HDRBefore} />
        </div>
      </div>
      {/* Fourth Data */}
      <div className="photo-effects-container">
        <div className="image-content">
          <BeforeAfterWidget beforeImage={StagingAfter} afterImage={StagingBefore} />
        </div>
        <div className="text-content">
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
      </div>
      {/* Fifth Data */}
      <div className="photo-effects-container">
        <div className="text-content">
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
        <div className="image-content">
          <BeforeAfterWidget beforeImage={TwinglightAfter} afterImage={TwinglightBefore} />
        </div>
      </div>
    </>
  );
};

export default LeftImageService;
