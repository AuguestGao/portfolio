import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  CenterDiv,
  ProjectPageWrapper,
  Section,
  Badge,
  PeelingLink,
  Header,
  Seo,
} from "../../components";

const uxFeatures = [
  "Light/Dark Theme",
  "Pagination",
  "Prev/Next article link",
  "Adaptive screen",
  "Hover effect",
];

const YDCFPage = () => {
  return (
    <CenterDiv>
      <Seo
        title="Building YDCF"
        description="How I made the website for Young Disciple Christian Fellowship and reflections."
      />
      <ProjectPageWrapper>
        <Header isHome={false} />
        <h1>Young Disciple Christian Fellowship</h1>
        <Section className="left-in-animate delay1">
          <p>
            University Bible fellowship (UBF) is an international evangelical
            church and network of house churches dedicated to Christ. Young
            Disciple Christian Fellowship (YDCF) is a sub-division of UBF at
            Ryerson University that aims at reaching out college students and
            help them grow as lifelong disciples.
          </p>
        </Section>
        <Badge
          type="Freelance Project"
          techs={["React", "Headless CMS", "Tailwind", "Netlify", "Node"]}
          live="https://ryersonubf.com/"
        />
        <StaticImage
          src="../../images/showcases/ydcf home.jpg"
          alt="Home page og YDCF website"
          placeholder="blurred"
          quality={90}
          className="project-page-image push-up-animate"
        />
        <Section>
          <h3>Project Purpose</h3>
          <p>
            YDCF, led by Pastor Charles, used to have their Sunday service and
            studies in person pre-pandemic. However, during COVID-19, they could
            not continue their activities and had to transition to online
            platforms. Pastor Charles encountered difficulties keeping the group
            updated and preaching to more students as they switched to remote
            work. As a web developer, my mission was to build a platform for
            Pastor Charles that allow him to manage updates while providing an
            online representation of the organization.
          </p>
        </Section>
        <Section className="right-aligned">
          <h3>Web stacks</h3>
          <p>
            Two things were clear from the beginning. First, the client needs to
            easily manage any content. Second, since the client is a non-tech
            person, the website must be updated and maintained without any prior
            coding knowledge. The solution is fairly straightforward with the
            given scenario: a blogger website with a headless Content Management
            System (CMS).
          </p>
          <p>
            Gatsby, a React static site generator framework, is a perfect fit
            for a website like this: mostly static content can be generated at
            the build time, SEO is required and a few updates happen during the
            month.
          </p>
          <p>
            In terms of content, a headless CMS is a clear winner because it
            provides an interface for users to create, edit, and delete content
            just like Microsoft Word and Google Docs. Via webhooks, Netlify (the
            host infrastructure for this project) knows when there is a change
            made to content and starts building the website.
          </p>
          <p>
            As a result, the client only needs to make a few clicks, and the
            website will reflect the change in no time.
          </p>
        </Section>
        <Section>
          <h3>Show time</h3>
          <p>
            The website was carefully designed to provide the best user
            experience.
          </p>
          <figure>
            <StaticImage
              src="../../images/showcases/ydcf home page long.png"
              alt="Home page of YDCF website"
              placeholder="blurred"
              quality={90}
              className="project-page-image"
            />
            <figcaption>
              Home page to promote a visitor to explore by using multiple
              navigations
            </figcaption>
          </figure>
          <figure>
            <StaticImage
              src="../../images/showcases/ydcf daily bread page.png"
              alt="Daily bread page of YDCF website"
              placeholder="blurred"
              quality={90}
              className="project-page-image"
            />
            <figcaption>
              Daily Bread, a daily learning material, is fetched from UBF
              headquarter in real-time.
            </figcaption>
          </figure>
          <figure>
            <StaticImage
              src="../../images/showcases/ydcf contact page.png"
              alt="Contact page of YDCF website"
              placeholder="blurred"
              quality={90}
              className="project-page-image"
            />
            <figcaption>
              Visitors can contact the YDCF by filling this form.
            </figcaption>
          </figure>
          <p>
            There are many more carefully engineered features for the best user
            experience.
          </p>
          <ul>
            {uxFeatures.map((feature, index) => (
              <li key={index} style={{ marginLeft: "1.5rem" }}>
                {feature}
              </li>
            ))}
          </ul>
        </Section>
        <Section className="right-aligned">
          <h3>Challenge</h3>
          <p>
            Time was the biggest enemy of the project. The request was made in
            early January and the deadline was by the end of February. At that
            time I accepted, there wasn&apos;t a design yet.
          </p>
          <p>
            To make the delivery on time, I worked with the designer in an
            untraditional way: we worked parallelly other than in series. I
            hosted daily meetings to discuss the component or feature design
            made by the designer the previous day. Upon decision, the designer
            started the next design while I was implementing what we discussed
            in the meeting. This way, I saved almost three weeks.
          </p>
          <p>
            However, the challenge was also clear. Without a complete design
            file, I have to make components to be compatible with potential
            changes. By grouping similar features, it allows me to update in one
            place and my code is also cleaner.
          </p>
          <p>This experience reinforced my belief in reusable components.</p>
        </Section>
        <Section>
          <h3>Happy "Ending"</h3>
          <p>
            As you guessed, this was a successful project. The website received
            a huge "wow" when the client first saw the finished product a few
            days before the deadline. The website is now the platform for
            delivering the gospel, sharing thoughts, and making connections.
          </p>
        </Section>
        <Section className="right-aligned">
          <h2>Next up...</h2>
          <PeelingLink to="/work/GVA">Work at GVA</PeelingLink>
        </Section>
      </ProjectPageWrapper>
    </CenterDiv>
  );
};

export default YDCFPage;
