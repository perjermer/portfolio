import React, { Component } from 'react';
import Title from "./reusable/Title";
import Project from "./reusable/Project";

import twitterimg from "../public/twitterimg.png";
import ankiimg from "../public/ankiimg.png";
import spotifyimg from "../public/spotifyimg.png";
import me from "../public/me2.jpg";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Title title="Portfolio" desc="A list of all my learning / completed / ongoing projects." />
        <div className="project-cards-grid">
          <Project
            link="https://twitter.com/coffeebeepbot?lang=en"
            img={twitterimg}
            title="Twitter Bot"
            desc="A twitter bot about coffee facts."
            tech={["Node", "Twitter API"]}
          />
          <Project
            link="#"
            img={ankiimg}
            title="Deck request"
            desc="A website for requesting Anki flashcard decks for language learning. Users can register, login and request decks to be made"
            tech={["Node", "React.js", "API", "MongoDB", "Mediafire", "Responsive", "Authorization"]}
          />
          <Project
            link="#"
            img={spotifyimg}
            title="Multi-user song queue"
            desc="A web app for several users to queue up songs; made for a business development team."
            tech={["Node", "React.js", "Next.js", "MongoDB", "Spotify API", "Amazon Alexa API", "Tensorflow", "Test Driven Development"]}
          />
          <Project
            link="#"
            img={me}
            title="My portfolio website"
            desc="Built using react.js to showcase my work."
            tech={["React.js"]}
          />
          <Project
            link="https://perjermer.github.io/robofriends/"
            img={'https://robohash.org/1?300x300'}
            title="Robofriends"
            desc="Developed as part of a Udemy course for the fundamentals of React.js & Redux"
            tech={["React.js", "Redux", "API"]}
          />
        </div>
      </div>
    );
  }
}

export default Portfolio;