import { Link } from "react-router-dom";
import "./Projects.css";

function Projects() {
  return (
    <div>
      <div id="project-box">
        <div class="title">
          <h1>Projects</h1>
        </div>
        <div class="box2">
          <div class="project">
            <h1> Professional Website</h1>
            <p>
              {" "}
              You are here!📍 This website was crafted with React.js. I added my
              own pixel art and CSS animations to give it a personal touch.
              Drawing inspiration from y2k web aesthetics and Geocities designs,
              I aimed to create a responsive, modern, and uniquely engaging
              platform to showcase my work and interests. View the source files
              on github{" "}
              <a
                href="https://github.com/leajpg"
                rel="noreferrer"
                target="_blank"
              >
                here
              </a>
              .{" "}
            </p>
          </div>

          <div class="project">
            <h1> Project 2</h1>
            <p>
              {" "}
              Ut vitae dui laoreet, consequat risus sed, pharetra metus. In eget
              sodales nisi, et tincidunt tortor. Nunc et libero est. Proin
              vehicula eget diam cursus eleifend. Phasellus lorem purus,
              convallis tincidunt finibus id, porttitor ultricies ipsum.
              Curabitur vel ullamcorper risus. Nulla condimentum feugiat purus
              ut dignissim. Praesent tempus ac sem sit amet elementum.{" "}
            </p>
          </div>

          <div class="project">
            <h1> Project 3</h1>
            <p>
              {" "}
              Pellentesque fermentum varius ex ac ullamcorper. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Integer lorem nisi, suscipit in ante vel, volutpat mollis
              felis. Ut iaculis risus sed mauris tempus maximus. Phasellus sit
              amet condimentum lectus. Quisque tellus lacus, mattis vitae neque
              sed, rutrum blandit ante. Vestibulum at erat feugiat, condimentum
              sem quis, commodo dolor.{" "}
            </p>
          </div>
        </div>
      </div>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default Projects;
