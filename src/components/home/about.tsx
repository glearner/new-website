/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/react"

const About = props => {
  return (
    <>
      <p
        css={css`
          font-family: Opensans-regular;
          width: 80%;
          margin: 2rem auto;
          font-size: 1.4rem;
        `}
      >
        I'm working at <a href="www.piktorlabs.com">Piktorlabs</a> as a Senior
        Software Engineer. I'm designing and developing full-stack applications
        across multiple platforms using modern industry-adopted languages and
        frameworks,taking direction from a principal project manager who manages
        project details.
      </p>
      <p
        css={css`
          font-family: Opensans-regular;
          width: 80%;
          margin: 2rem auto;
          font-size: 1.4rem;
        `}
      >
        Dedicated and efficient full stack developer with 3+ years experience in
        application layers, presentation layers, and databases. Spearheaded
        successful transition from LAMP stack to MERN which cut latency by 40%
        and increased effectiveness of database administrators by 20%.
      </p>
    </>
  )
}

export default About
