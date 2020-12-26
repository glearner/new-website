/** @jsx jsx */
import React from "react"
import UsePost from "../hooks/usePost"
import { css, jsx } from "@emotion/react"

const Blog = props => {
  const posts = UsePost()
  let locArr = []
  let length = posts.length
  for (let i = 0; i < length; i = i + 2) {
    let loc = posts.splice(0, 2)
    locArr.push(loc)
  }

  return locArr.map(post => {
    return (
      <div
        css={css`
          width: 80%;
          margin: auto;
        `}
      >
        {post.length - 1 ? (
          <div
            css={css`
              display: flex;
              margin: auto;
              justify-content: space-between;
            `}
          >
            <div
              key={post[0].title}
              css={css`
                width: 45%;
              `}
            >
              <a
                css={css`
                  text-decoration: none;
                `}
                href={post[0].link}
              >
                <h1>
                  {post[0].title.length > 30
                    ? post[0].title.substring(0, 30) + "...."
                    : post[0].title}
                </h1>

                <img
                  css={css`
                    height: 40vh;
                    width: 40vw;
                    background-size: cover;
                  `}
                  src={post[0].img_url}
                />
              </a>
            </div>
            <div
              key={post[1].title}
              css={css`
                width: 45%;
              `}
            >
              <a
                css={css`
                  text-decoration: none;
                `}
                href={post[1].link}
              >
                <h1>
                  {post[1].title.length > 30
                    ? post[1].title.substring(0, 30) + "..."
                    : post[1].title}
                </h1>

                <img
                  css={css`
                    height: 40vh;
                    width: 40vw;
                    background-size: cover;
                  `}
                  src={post[1].img_url}
                />
              </a>
            </div>
          </div>
        ) : (
          <div
            key={post[0].title}
            css={css`
              width: 100%;
            `}
          >
            <a
              css={css`
                text-decoration: none;
              `}
              href={post[0].link}
            >
              <h1>{post[0].title}</h1>

              <img
                css={css`
                  height: 40vh;
                  width: 40vw;
                  background-size: cover;
                `}
                src={post[0].img_url}
              />
            </a>
          </div>
        )}
      </div>
    )
  })
}

export default Blog
