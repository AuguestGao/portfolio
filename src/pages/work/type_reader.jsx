import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {
  CenterDiv,
  ProjectPageWrapper,
  Section,
  Badge,
} from "../../components";
import logoFlash from "../../images/showcases/type-reader logo flash.gif";
import addABook from "../../images/showcases/type-reader add a book.gif";
import deleteABook from "../../images/showcases/type-reader delete a book.gif";
import typing from "../../images/showcases/type-reader typing.gif";
import resume from "../../images/showcases/type-reader resume.gif";

const TyperReaderPage = () => {
  return (
    <CenterDiv>
      <ProjectPageWrapper>
        <Link to="/" className="logo">
          <StaticImage
            alt="logo"
            loading="eager"
            src="../../images/icon.png"
            width={50}
            height={50}
          />
        </Link>
        <h1>Type-Reader</h1>
        <Section>
          <p>
            Keyboard typing became a skill that is often overlooked because it
            is so involved in our life everywhere and everyday; however, twenty
            years ago, typing was a skill that must be specially trained.
          </p>

          <p>
            Type-Reader is a web application that dedicates to help people
            improving their typing skills while giving them the freedom to use
            their own content.
          </p>
        </Section>
        <Badge
          type="Public Project"
          techs={[
            "TypeScript",
            "React",
            "Express/Node",
            "MongoDB",
            "Docker",
            "Kubernetes",
            "Microservice",
          ]}
          repo="https://github.com/AuguestGao/type-reader"
          live="https://www.type-reader.xyz/"
        />
        <img
          src={logoFlash}
          alt="Type-Reader neon logo flashs like in the old days"
          width={960}
          className="center"
        />
        <Section>
          <h3>Project Purpose</h3>
          <p>
            The sole purpose of this project is to make typing pratice
            enjoyable.
          </p>
          <p>
            Most (if not all) of the online typing practise app does a great job
            on guiding users on learning typing, but not so much on practising
            because a user must follow provided content which is often grade one
            level dialogues. So, here comes the Type-Reader.
          </p>

          <p>
            Since "enjoyable" content is extermely personal and I am a super
            book lover, the idea of combining typing practice and books stricked
            me, and this is the born of Type-Reader. You practice your typing
            with the content you upload, whether is an article, a script, or a
            book.
          </p>

          <p>
            You are imporving typing speed and accuracy while reading your
            favourite book, or vice verse.{" "}
          </p>
        </Section>
        <Section className="right-aligned">
          <h3>Web stacks</h3>
          <p>
            Type-Reader is built on top of <strong>React</strong> +{" "}
            <strong>Express/Node</strong> in <strong>TypeScript</strong> which
            provides better development efficiency by adding the type system.
          </p>

          <p>
            The app follows <strong>microservice</strong> architecture and
            resulted in one service for frontend and five backend services for
            five different services including auth, books, bookmark, book
            parsing, and user statistics. For cope with CI/CD workflows,{" "}
            <strong>Docker</strong>, <strong>Github Actions</strong> and{" "}
            <strong>Kubernetes</strong> work hand-in-hand for ensuring future
            scaling and robustness of the app.
          </p>
          <p>There are also many other great tools made this app possible:</p>
          <ul>
            <li>NATS Streaming Server: Publish/Subscribe Messaging System</li>
            <li>Jest: Unit test</li>
            <li>Redis: in memory storage</li>
            <li>NGINX: ingress load balancing</li>
            <li>MongoDB + Mongoose: data storage with ORM</li>
            <li>Git: version control</li>
          </ul>
        </Section>
        <Section>
          <h3>Show time</h3>
          <p>After you registerd and signed in, you can </p>
          <figure>
            <img
              src={addABook}
              alt="Add a book to your bookshelf in Type Reader"
              placeholder="blurred"
              layout="constrained"
              width={960}
            />
            <figcaption>add a book to your bookshelf in Type Reader</figcaption>
          </figure>
          <figure>
            <img
              src={deleteABook}
              alt="Delete a book you completed (or not)"
              placeholder="blurred"
              layout="constrained"
              width={960}
            />
            <figcaption>delete a book you completed or not</figcaption>
          </figure>
          <figure>
            <img
              src={typing}
              alt="start typing, make and correct mistakes, add bookmark for next time, see statistics of today's prastice"
              placeholder="blurred"
              layout="constrained"
              width={960}
            />
            <figcaption>
              start typing, make and correct mistakes, add bookmark for next
              time, see your typing get a little better
            </figcaption>
          </figure>
          <figure>
            <img
              src={resume}
              alt="resume where you left"
              placeholder="blurred"
              layout="constrained"
              width={960}
            />
            <figcaption>and resume where you left</figcaption>
          </figure>
        </Section>
        <Section>
          <h3>Greatest chanllenge</h3>
          <p>
            The greatest chanllenge for me is perhaps data. I spent a lot of
            time to design a unified database structure to allow data flowing
            between services smoothly while preventing as much data duplication.
            This is less intuitive when comparing with a monolith application
            due to the nature of microservices. I have modified database
            structure several times during the development stage before all
            services work together.
          </p>
        </Section>
        <Section className="right-aligned">
          <h3>Lastly, I want to say</h3>
          <p>
            One thing I didn&apos;t do well was I had most functions and
            services planned when I had into the "fun" part, not all. The
            workflow, database structure, or functionality of a service must be
            re-done due to the incompleteness of the original plan, and
            sometimes there is no work around.
          </p>
          <p>
            A successful application begins at the completion of the design by
            laying out all the functionalities, workflows and database
            structures while keeping them scalable.
          </p>
        </Section>
      </ProjectPageWrapper>
    </CenterDiv>
  );
};

export default TyperReaderPage;
