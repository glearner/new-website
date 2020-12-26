import React from "react"
import BackgroundImage from "gatsby-background-image"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const BgImage = props => {
  const ImageBackground = styled(BackgroundImage)`
    background-size: cover;
    height: 100%;
    min-height: ${props.minheight ? props.minheight : "500px"};
    width: 100%;
    position: relative;
    height: ${props.bgCover ? "90vh" : "80vh"};
  `

  return (
    <div>
      <ImageBackground fluid={props.fluid} alt={props.alt}>
        {props.children}
      </ImageBackground>
    </div>
  )
}

export default BgImage
