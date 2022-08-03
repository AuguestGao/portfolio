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
        <Section>
          <p>
            GVA Lighting, Inc. is a LED lighting design and manufacturing
            company that provides architectural and commercial lighting
            solutions. Over the years, GVA has gained many global customers and
            accomplished hundreds of astonishing projects worldwide.
          </p>
        </Section>
        <Section className="right-aligned">
          <h3>Designer + Engineer</h3>
          <p>
            As a designer, I provided solutions to custom projects to fulfill
            customer's wildest imaginations.
          </p>
          <p>
            As an engineer, I was responsible for developing new prodcuts and
            improving existing products. A new workflow that I developed{" "}
            <strong>doubled production speed</strong> while{" "}
            <strong>cutting product failure rate down to less than 8%</strong>.
            I also contributed to launch a new business line as the lead
            mechanical engineer in the team.
          </p>
        </Section>
        <Section>
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
            collabrated with our QA department to formulate a testing plan for
            ensuring 10 years of product life based on the analysis result of
            local climate data. Many prototypes were produced, compared and
            tested to guarantee to meet the specifications before the selected
            were sent to a tailored stress test.
          </p>
          <p>
            On production side, I prepared drawings and worked with production
            engineer for work instruction and jigs to help the assembly team to
            pick up the new product quickly and painlessly. I have also designed
            innovative shipping crate with recyclale materials that both ensure
            products' safety during tranpotation and also reduce shipping cost.
          </p>
          <p>
            The project was truly remarkable when the light was finally lit to
            public in 2019. Now, it is not just one of the most memoriable place
            for concert, shows, or hosting all other kinds of public events, but
            more importantly, it connects people to their roots in the local
            community.
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
            US Pavilion received the Outdoor Lighting Design Award of
            Distinction and the Control Innovation Award of Excellence in the
            IES 2020 Illumination Awards.
          </p>

          <ExternalLink
            className="center"
            href="https://gvalighting.com/portfolio-items/us-pavilion-riverfront-park-spokane/"
            text="Read more about this project."
          />
          <p>
            In analyzing the climate data, nearly 40,000 measurements were used
            which was in equavalent of 10 years accumulated daily weather data.
            It would be a serveral hours of hard work, but I was able to clean
            the data and finish the task in an hour by using Python which I
            started learning in my free time a while ago. This let me realize
            the power of programming and it planted a seed in me for dedicate
            myself to software development.
          </p>
        </Section>

        <Section>
          <h3>Best Employee</h3>
          <p> I was elected as the employee of the quarter in 2019.</p>
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
            After almost 4 years in GVA, I said Goodbye to my old friend for
            seeking a career change. Being a member in GVA, I was surronded by
            many talented people and learned the so much from them. There are
            lots of chanllenges, but to me, they are my fuel to advance myself
            in problem solving, time managing, communication and more.
          </p>
        </Section>
        <Section>
          <h3>Special thanks</h3>
          <p>
            Special thanks to my manager, <strong>Julian Verrall</strong>, who
            taught me the highest engineer standard by doing it and is a role
            model to me in many professional aspects.
          </p>
        </Section>
        <Section className="right-aligned">
          <h2>Next work</h2>
          <PeelingLink to="/work/type_reader">Type Reader</PeelingLink>
        </Section>
      </ProjectPageWrapper>
    </CenterDiv>
  );
};

export default GVAPage;
