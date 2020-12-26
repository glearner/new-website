/** @jsx jsx */
import React from "react"
import ReactTypingEffect from "react-typing-effect"
import Particles from "react-particles-js"
import useImage from "../hooks/useImage"
import { css, jsx } from "@emotion/react"

const Hero = props => {
  const { home } = useImage()
  return (
    <div
      css={css`
        position: relative;
        height: 100vh;
        overflow: hidden;
        background-color: black;
      `}
    >
      {typeof window !== `undefined` ? (
        <Particles
          params={{
            particles: {
              number: {
                value: 200,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
            },
          }}
        />
      ) : (
        <></>
      )}
      <div
        css={css`
          width: 100vw;
          color: white;
          font-family: OpenSans-Bold;
          position: absolute;
          top: 45%;
          text-align: center;
        `}
      >
        {typeof window !== `undefined` ? (
          <ReactTypingEffect
            css={css`
              font-family: OpenSans-Bold;
              font-size: 4rem;
            `}
            typingDelay={"100ms"}
            speed={"100ms"}
            eraseSpeed={"100ms"}
            text={[
              "Hi, I'm Gaurav.",
              "I'm a Software Engineer.",
              "I'm a Full Stack developer.",
              "I'm a Freelancer.",
            ]}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default Hero
