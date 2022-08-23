import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  CenterDiv,
  ProjectPageWrapper,
  Section,
  ExternalLink,
  PeelingLink,
  Header,
  Seo,
} from "../../components";

const GVAPage = () => {
  return (
    <CenterDiv>
      <Seo
        title="Engineer at GVA"
        description="I was a designer and an engineer at GVA."
      />
      <ProjectPageWrapper>
        <Header isHome={false} />
        <h1>Working at GVA</h1>
        <Section className="left-in-animate delay1">
          <p>
            GVA Lighting, Inc. is a LED lighting design and manufacturing
            company that provides architectural and commercial lighting
            solutions. Over the years, GVA has gained many global customers and
            accomplished hundreds of astonishing projects worldwide.
          </p>
        </Section>
        <Section className="right-aligned right-in-animate delay2">
          <h3>Designer + Engineer</h3>
          <p>
            I am both a product designer and a mechanical engineer in the R&D
            department. My responsibilities included developing new products,
            improving existing products, and providing solutions to custom
            projects.
          </p>
          <p>
            Over the years, I had many achievements. A new workflow that I
            developed <strong>doubled production speed</strong> while{" "}
            <strong>cutting product failure rate down to less than 8%</strong>.
            I also contributed to establishing the first horticulture product
            line as the lead mechanical engineer on the team.
          </p>
        </Section>
        <Section className="push-up-animate">
          <h3>US Pavilion - Two Awards Winning Project</h3>
          <StaticImage
            src="../../images/showcases/gva us pavilion.jpg"
            alt="US Pavilion Light show"
            placeholder="blurred"
            quality={100}
            className="project-page-image"
          />
          <p>
            Riverfront Park, located in downtown Spokane WA, is home to the 1974
            World Expo. The tented structure mesh was left after the original
            cover was removed in 1979. As the key visual attraction of the
            city's renovation, highly customed lighting fixtures were mounted to
            reengage the pavilion with the general public.
          </p>
          <p>
            This project was challenging for the scale of customization. I
            collaborated with our QA department to formulate a testing plan for
            ensuring the product lifespan based on the analysis result of local
            climate data. Many prototypes were produced, compared and tested to
            guarantee to meet all the requirements. The final sample was sent to
            a tailored stress test.
          </p>
          <p>
            On the production side, I prepared drawings and worked with the
            production engineer for work instruction and jigs to help the
            assembly team to pick up the new product quickly and painlessly. I
            have also designed an innovative shipping crate with recyclable
            materials that both ensure products' safety during transportation
            and also reduce shipping costs.
          </p>
          <p>
            The project was truly remarkable when the light was finally lit to
            the public in 2019. Now, it is not just one of the most memorable
            places for concerts, shows, or hosting all other kinds of public
            events, but more importantly, it connects people to their roots in
            the local community.
          </p>
          <div className="frame">
            <iframe
              src="https://www.youtube.com/embed/A_nSTLzH8NY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
          <a
            className="credit"
            href="https://www.youtube.com/watch?v=A_nSTLzH8NY&ab_channel=SkyDefinitionPhotography"
          >
            Credit: Sky Definition Photography
          </a>

          <p>
            US Pavilion received the "Outdoor Lighting Design Award of
            Distinction" and the "Control Innovation Award of Excellence" in the
            IES 2020 Illumination Awards.
          </p>

          <ExternalLink
            className="center"
            href="https://gvalighting.com/portfolio-items/us-pavilion-riverfront-park-spokane/"
            text="Read more about this project."
          />
        </Section>

        <Section className="right-aligned">
          <h3>Python's rescue</h3>
          <p>
            In analyzing the climate data for US Pavilion Project, nearly 1
            million measurements were used which was equivalent to 10 years of
            accumulated hourly weather data. I doubted I can manipulate this
            much data nicely and easily in spreadsheet.
          </p>
          <p>
            Glad my basic knowledges of Python, I was able to clean the data and
            finish the task by only writing a few lines of code. This awakened
            me and help me to see how much being able to programming helps. This
            small instance planted a seed in me to dedicate myself to software
            development.
          </p>
        </Section>

        <Section>
          <h3>Best Employee</h3>
          <p>
            The year after the US Pavilion project, I was elected as the
            employee of the quarter in 2019.
          </p>
          <StaticImage
            src="../../images/showcases/gva employee of the quarter.jpg"
            alt="Auguest was elected as the employee of the quarter in 2019."
            placeholder="blurred"
            quality={100}
            className="project-page-image"
          />
        </Section>
        <Section className="right-aligned">
          <h3>Parting from GVA</h3>
          <p>
            After almost 4 years in GVA, I said Goodbye to my team for seeking a
            career change in tech. Being a member of GVA, I was surrounded by
            many talented people and learned so much from them. It is never
            short of challenges, but to me, they are the fuel to advance myself
            in problem-solving, time management, communication and more.
          </p>
        </Section>
        <Section>
          <h3>Special thanks</h3>
          <p>
            Special thanks to my manager, <strong>Julian Verrall</strong>, who
            taught me the highest engineer standard by doing it and he is a role
            model to me in many professional aspects.
          </p>
        </Section>
        <Section className="right-aligned">
          <h2>Next up...</h2>
          <PeelingLink to="/work/type_reader">Type Reader</PeelingLink>
        </Section>
      </ProjectPageWrapper>
    </CenterDiv>
  );
};

export default GVAPage;
