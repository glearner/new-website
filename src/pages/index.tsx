import React from "react"

import SEO from "../components/seo"
import Hero from "../components/home/hero"
import Blog from "../components/home/blog"
import About from "../components/home/about"
import Footer from "../components/footer"
import Header from "../components/header"

import "../css/home.css"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    {typeof window !== `undefined` ? <Header /> : <></>}
    <div className="hero">
      <Hero />
      <h1 id="about" className={"text-align open-sans-bold margin-2 font-size"}>
        About Me
      </h1>
      <About />
      <hr />
      <h1 id="blog" className={"text-align open-sans-bold margin-2 font-size"}>
        My Medium's Blogs
      </h1>
      <Blog />
      <div className="index-footer">
        <Footer />
      </div>
    </div>
  </>
)

export default IndexPage
