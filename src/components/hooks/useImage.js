import { graphql, useStaticQuery } from "gatsby"

const useImages = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: imageSharp(fluid: { originalName: { eq: "logo.jpg" } }) {
        fluid(maxWidth: 6000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
      home: imageSharp(fluid: { originalName: { eq: "home.jpg" } }) {
        fluid(maxWidth: 6000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)
  return data
}

export default useImages
