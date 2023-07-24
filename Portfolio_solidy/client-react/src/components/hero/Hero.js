import { useEffect, useState } from "react";
import { Icon, Image, Sti, Sticky } from "semantic-ui-react";

import "./hero.css";

const Hero = ({ state }) => {
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  useEffect(() => {
    const { contract } = state;
    const description = async () => {
      const descriptionText = await contract.methods.description().call();
      setDescription(descriptionText);
    };
    contract && description();
    const image = async () => {
      const imageLink = await contract.methods.imageLink().call();
      setImageLink(imageLink);
    };
    contract && image();
  });
  return (
    <div id="hero">
      <div className="hero_content">
        <div id="hero_content-text">
          <p>Hello,I'm</p>
          <h1>Prathyusha Boppena</h1>
          <p>{description}</p>
        </div>
        <div class="hero_content-icons">
          <a
            id="icon"
            href="https://twitter.com/prathyusha3579"
            target="_black"
          >
            <i aria-hidden="true" class="small twitter icon"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/prathyusha-b-283504243/"
            target="_blank"
            rel="noreferrer"
          >
            <i aria-hidden="true" class="small linkedin alternate icon"></i>
          </a>
          <a
            href="https://www.instagram.com/prathyushaboppena/"
            target="_blank"
            rel="noreferrer"
          >
            <i aria-hidden="true" class="small instagram alternate icon"></i>
          </a>
        </div>
        {/* <div>
          <img
            src="https://gateway.pinata.cloud/ipfs/QmSCDo1jbtkjxSRbUstRb2DbbVaEV4uj3om9mfSXArufAZ"
            alt="pic"
          />
        </div> */}
      </div>
    </div>
  );
};
export default Hero;
