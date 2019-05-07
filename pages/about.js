import Link from "next/link";
import Image from "../components/Image";

const style = {
  fontSize: "20px",
  color: "royalblue"
};

const About = () => {
  return (
    <div style={style}>
      <h1>About</h1>
      <Link href="/">
        <button>Back</button>
      </Link>
      <Image />
      <p>I was a magician once</p>
    </div>
  );
};

export default About;
