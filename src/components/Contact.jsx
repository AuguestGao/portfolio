import React from "react";
import { Section, ExternalLink } from "./";

export const Contact = () => {
  return (
    <Section id="contact">
      <h2>Get in touch</h2>
      <p>
        Feel free to shoot me an email if you are looking for a developer, have
        a question, or just want to say hi.
      </p>
      <ExternalLink
        href="mailto: auguest.gao@gmail.com"
        text="auguest.gao@gmail.com"
      />
    </Section>
  );
};
