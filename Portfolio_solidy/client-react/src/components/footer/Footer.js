import { Icon } from "semantic-ui-react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="name">
        <p>Prathyusha</p>
      </div>
      <div className="description">
        <p>
          As I mentioned, I like to make new friends, so feel free to connect in
          below media.
        </p>
      </div>
      <div className="footer-icons">
        <a id="icon" href="https://twitter.com/prathyusha3579" target="_black">
          <Icon circular inverted color="teal" name="twitter" />
        </a>
        <a
          href="https://www.linkedin.com/in/prathyusha-b-283504243/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon circular inverted color="teal" name="linkedin alternate" />
        </a>
        <a
          href="mailto:boppenaprathyusha@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Icon circular inverted color="teal" name="mail" />
        </a>
      </div>
      <div className="footer-end">
        <a href="">prathyusha@sepolia.eth</a>
      </div>
      <div className="footer-end">
        <p>
          Aren't you on
          <a href="https://keybase.io/prathyusha_boppe#edit-me">
            &nbsp;Keybase&nbsp;
          </a>
          yet?
        </p>
      </div>
    </div>
  );
};
export default Footer;
