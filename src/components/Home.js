import Sprite from "./imgs/LeaSpriteGrain.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="boxes">
        <div className="text-box">
          <h1> LEA CIARCIA </h1>
          <div className="inside-text">
            <h2>About</h2>
            <p>
              Hi, I'm Lea, a frontend developer and pixel artist inspired by y2k
              web aesthetics. In my free time, I enjoy reading, gaming, and
              hanging out with my cats. ♡ ฅ^•ﻌ•^ฅ
            </p>

            <h2>Skills</h2>
            <p>
              <b>Programming:</b> Javascript, React.js, Bootstrap, HTML, CSS,
              PostgreSQL, Node.js, & Git.
            </p>
            <p>
              <b>Art:</b> Aseprite, Adobe Creative Suite.
            </p>

            <h2>Portfolio</h2>
            <p>
              <Link
                to="https://snails.neocities.org/pixelart"
                rel="noreferrer"
                target="_blank"
              >
                Pixel Art
              </Link>{" "}
              | <Link to="/Projects">Projects</Link>
            </p>
          </div>
          <div className="links">
            <h3>
              <a
                href="https://github.com/leajpg"
                rel="noreferrer"
                target="_blank"
              >
                Github
              </a>{" "}
              ♡{" "}
              <a
                href="https://www.linkedin.com/in/leaciarcia/"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                Linkedin
              </a>{" "}
              ♡
              <a
                href="mailto:leaciarcia77@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                Email
              </a>
            </h3>
          </div>
        </div>
      </div>
      <img className="sprite" src={Sprite} alt="" />
    </div>
  );
}

export default Home;
