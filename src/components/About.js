import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <h4>This is a Basic Task Tracker using React and JSON server</h4>
      <br />
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default About;
