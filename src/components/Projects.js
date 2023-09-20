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
              You are here!📍 This website was crafted with React.js and React
              Routing. I added my own pixel art and CSS animations to give it a
              personal touch. Drawing inspiration from y2k web aesthetics and
              Geocities designs, I aimed to create a responsive, modern, and
              uniquely engaging platform to showcase my work and interests. View
              the source files on github{" "}
              <a
                href="https://github.com/leajpg/leas-website"
                rel="noreferrer"
                target="_blank"
              >
                here
              </a>
              .{" "}
            </p>
          </div>

          <div class="project">
            <h1>
              {" "}
              <a
                href="https://github.com/leajpg/weather-app"
                rel="noreferrer"
                target="_blank"
              >
                Weather App
              </a>
            </h1>
            <p>
              {" "}
              I created a Weather App using React.js to showcase my proficiency
              using APIs. For this project I utilized OpenWeatherMap to create a
              responsive application where the user can type in their city and
              see the current weather. I also include my own digital pixel art
              to create a unique design and user interface. Please note this
              project's design is still a work in progress.{" "}
            </p>
          </div>

          <div class="project">
            <h1>
              {" "}
              <a
                href="https://snails.neocities.org/"
                rel="noreferrer"
                target="_blank"
              >
                Neocities
              </a>
            </h1>
            <p>
              {" "}
              This is my personal website and my love letter to old internet or
              "web 1.0". This website feature pure HTML, CSS, and Javascript. --
              purposely avoiding the utilization of libraries as a means of
              working within limited options. This website is meant to represent
              a digital version of my bedroom, where I work, make art, read,
              ect. It is meant to be ever-changing and constantly updated.{" "}
            </p>
          </div>
        </div>
      </div>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default Projects;
