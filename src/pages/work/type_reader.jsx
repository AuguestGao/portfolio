import React from "react";
import {
  CenterDiv,
  ProjectPageWrapper,
  Section,
  Badge,
  PeelingLink,
  Header,
  Seo,
} from "../../components";
import logoFlash from "../../images/showcases/type-reader logo flash.gif";
import addABook from "../../images/showcases/type-reader add a book.gif";
import deleteABook from "../../images/showcases/type-reader delete a book.gif";
import typing from "../../images/showcases/type-reader typing.gif";
import resume from "../../images/showcases/type-reader resume.gif";

const TyperReaderPage = () => {
  return (
    <CenterDiv>
      <Seo
        title="Developing Type-reader"
        description="My journey on making type-reader, a type pratoce app."
      />
      <ProjectPageWrapper>
        <Header isHome={false} />
        <h1>Type-Reader</h1>
        <Section className="left-in-animate delay2">
          <p>
            Keyboard typing became a skill that is often overlooked because it
            is already so involved in our day-to-day; however, typing was a
            skill that must be specially trained just twenty years ago.
          </p>

          <p>
            Type-Reader is a web application that dedicates to helping people
            improve their typing skills while giving them the freedom to use any
            content they might be interested in practicing with.
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
        <div className="push-up-animate">
          <img
            src={logoFlash}
            alt="Type-Reader neon logo flashs like in the old days"
          />
        </div>
        <Section>
          <h3>The born</h3>
          <p>
            The sole purpose of this project is to make typing practices fun.
          </p>
          <p>
            During my journey to improve my typing, I found most (if not all) of
            the online typing platforms do a great job of educating typing
            skills, but do poorly at practicing. Typically, the user must follow
            provided content in their practice sessions. This can be boring
            because the dialogues are often in grade one level or maybe
            sometimes are just a bunch of words glued together and making no
            sense. As someone who doesn’t like compromises, I decided to make
            something both fun and useful.
          </p>

          <p>
            Since I am a book lover, the idea of combining typing practice and
            reading books struck me: why not use the content I want to read as
            the content I will practise with, whether it’s the hottest news of
            the day, the next unread email, or a book in the to-read list. By
            letting the user decide their practice content, the “fun” is
            guaranteed while you are busy typing. This is the born of
            Type-Reader.
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
            resulted in one service for the front-end and five services for
            back-end including auth, books, bookmark, book parsing, and user
            statistics. to cope with CI/CD workflows, <strong>Docker</strong>,{" "}
            <strong>Github Actions</strong> and <strong>Kubernetes</strong> work
            hand-in-hand for ensuring future scaling and robustness of the app.
          </p>
          <p>There are also many other great tools made this app possible:</p>
          <ul>
            <li>NATS Streaming Server: Publish/Subscribe Messaging System</li>
            <li>Jest: Unit test</li>
            <li>Redis: in memory storage</li>
            <li>NGINX: ingress load balancer</li>
            <li>MongoDB + Mongoose: data storage with ORM</li>
            <li>Git: version control</li>
          </ul>
        </Section>
        <Section>
          <h3>Show time</h3>
          <p>After signing up and signing in, I can </p>
          <div className="responsive">
            <figure>
              <img src={addABook} alt="Add a book to my bookshelf" />
              <figcaption>add a book to my bookshelf</figcaption>
            </figure>
          </div>
          <div className="responsive">
            <figure>
              <img src={deleteABook} alt="Delete a book" />
              <figcaption>delete a book</figcaption>
            </figure>
          </div>
          <div className="responsive">
            <figure>
              <img
                src={typing}
                alt="start typing, make and correct mistakes, add bookmark for next time, see statistics of today's prastice"
              />
              <figcaption>
                start typing, make and correct mistakes, add bookmark for next
                time, and know my typing gets a little better told by the
                statistics
              </figcaption>
            </figure>
          </div>
          <div className="responsive">
            <figure>
              <img src={resume} alt="resume where I left" />
              <figcaption>also resume where I left</figcaption>
            </figure>
          </div>
        </Section>
        <Section>
          <h3>Greatest challenge</h3>
          <p>
            The greatest challenge for me is perhaps data. I spent a lot of time
            designing a unified database structure to allow data to flow between
            services smoothly while preventing as much data duplication. Due to
            the nature of microservices, this is less intuitive when compared
            with a monolith application. I modified the database structure
            several times during the development before all services finally
            worked together.
          </p>
        </Section>
        <Section className="right-aligned">
          <h3>Lastly,</h3>
          <p>
            One thing I could have done better was in the software design phase.
            I had most functions and services (not all) planned when I headed
            into the actual coding. However, because of the incompleteness of
            the software design, some newly implemented services happened to be
            incompatible with the old service&apos;s data structure, and the
            change was inevitable for them to co-exist.
          </p>
          <p>
            I was lucky to learn this valuable lesson in a smaller application.
            A successful application only begins with a thorough design by
            laying out all the functionalities, workflows and database
            structures while keeping them scalable.
          </p>
        </Section>
        <Section>
          <h2>Next up...</h2>
          <PeelingLink to="/work/YDCF">
            Young Disciple Christian Fellowship
          </PeelingLink>
        </Section>
      </ProjectPageWrapper>
    </CenterDiv>
  );
};

export default TyperReaderPage;
