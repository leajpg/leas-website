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
            <h1> Project 1</h1>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ut massa eget arcu hendrerit tempor ut ut augue.
              Nullam ac lorem semper, mattis mauris ut, cursus elit. Nam vel
              elementum eros. Nullam sit amet ante quis lorem feugiat semper non
              et enim. Mauris imperdiet dui eget tellus malesuada, id sagittis
              est accumsan. Integer vitae purus ut augue ullamcorper iaculis vel
              sit amet orci. Donec eget finibus sapien. Nunc in est semper,
              bibendum diam non, varius libero.{" "}
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
