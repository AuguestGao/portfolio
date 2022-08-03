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
  "High contrast",
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
        <Section className="left-in-animate d1">
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
            platforms. Pastor Charles encountered difficulties kepping the group
            updated and preaching more students as they switched to remote work.
            As a web developer, my mission was to build a website for Pastor
            Charles that allow him to manage updates while providing a online
            repersentation of the organization.
          </p>
        </Section>
        <Section className="right-aligned">
          <h3>Web stacks</h3>
          <p>
            Two things were clear at the begining. First, the client is a
            non-tech person, so solution with no coding and maintaince knowledge
            is essential. Second, he needs to easily manage (create, edit, and
            delete) contents.
          </p>
          <p>
            The solution is straight forward with the given scenario: a blogger
            website with a headless Content Management System (CMS). Gatsby, a
            React static site generator framework, is a clear winner for a
            website like this: most of the content are static and can be
            generated at build time and there are a countable updates through
            out a month. A headless CMS allows the user to focus on managing
            contents without worrying about the coding, and it is the perfect
            combination for my client. The website was deployed to Netlify which
            starts building the website automatically when it detects changes
            are made in CMS via webhooks. Thus, everytime the client publish or
            archieve an article, the website will be reflect changes in no time.
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
              home page to promote a visitor to explore by using multiple
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
              Daily Bread is fetched from UBF headquarter in real time.
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
              Visitors can contact the YDCF by filling this form, which embeds
              an instant form validation.
            </figcaption>
          </figure>
          <p>
            There are many small carefully engineered feature for the best user
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
            Time was the biggest enemy in the project. I got the request from
            the client in early January and need to ship by the end of February.
            At that time I accepted, there wasn&apos;t a design.
          </p>
          <p>
            In order to make the deliver on time, I worked with the designer in
            an untraditional way: we work together parallely other than sereis.
            I hosted meetings for an overall discussion of the website to
            familiar ourseleves what to expect, followed by daily meetings for
            detailed discussion on each components and features. Without a
            compelete design file, I built combined similar components to one
            reusable component that saved me a lot time later for coping with
            design changes. This experience reinforces my belief to reusable
            component.
          </p>
        </Section>
        <Section>
          <h3>Happy "Ending"</h3>
          <p>
            As you may guess, this was a successful project. The website
            received a huge "wow" when the client first saw the finished product
            a few days before the deadline, and I gained much precious
            experience and confident.
          </p>
        </Section>
        <Section className="right-aligned">
          <h2>Next work</h2>
          <PeelingLink to="/work/GVA">Work at GVA</PeelingLink>
        </Section>
      </ProjectPageWrapper>
    </CenterDiv>
  );
};

export default YDCFPage;
