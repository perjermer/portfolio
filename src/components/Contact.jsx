import React from 'react';
import Title from "./reusable/Title";
import { SocialIcon } from 'react-social-icons';

const Contact = () => {
  return (
    <div>
      <Title title="Contact" desc="Get in touch." />
      <div className="body-content">
        You can find me on several social media
        <br />
        <br />
        <SocialIcon className="space grow" url="https://twitter.com/perjermer" />
        <SocialIcon className="space grow" url="https://www.linkedin.com/in/pierce-morris-166698136/" />
        <SocialIcon className="space grow" url="https://github.com/perjermer" />
      </div>
    </div>
  );
}

export default Contact;