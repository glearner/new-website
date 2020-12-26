import { graphql, useStaticQuery } from "gatsby"

function getAttrFromString(str, node, attr) {
  var regex = new RegExp("<" + node + " .*?" + attr + '="(.*?)"', "gi"),
    result,
    res = []
  while ((result = regex.exec(str))) {
    res.push(result[1])
  }
  return res[0]
}

const UsePost = () => {
  const postArray = useStaticQuery(graphql`
    query {
      allBlogJson {
        edges {
          node {
            title
            link
            content_encoded
          }
        }
      }
    }
  `)

  return postArray.allBlogJson.edges.map(({ node }) => ({
    title: node.title[0],
    link: node.link[0],
    img_url: getAttrFromString(node.content_encoded[0], "img", "src"),
  }))
}

export default UsePost
