import React from "react"
import useIsDev from "../utils/hooks/useIsDev"
import { Link, graphql, useStaticQuery, navigate } from "gatsby"
import { Img } from "gatsby-image"

import styled from "styled-components"

const FeaturedProjects = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  > div {
    flex: auto;
    display: grid;
    grid-template-rows: auto 200px auto auto;
    gap: 1rem;
    padding: 1rem 0;
  }

  @media only screen and (min-width: 62em) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    > div {
      flex: 1;
      gap: 1.3rem;
      grid-template-rows: 100px 200px 200px 1fr;
    }
    p {
      max-width: 200px;
    }
  }
`

const ProjectImage = styled.div`
  h3 {
    margin: 0;
    max-width: 95%;
  }
  a {
    margin: 0;
  }

  p {
    color: #585858;
    overflow: hidden;
    margin: 1rem 0;
  }

  .imageFluidContainer {
    max-width: 200px;
    border-radius: 40px;
    transition: transform 0.3s ease-in-out, box-shadow 0.2s ease-in-out;
    border: 1px solid#585858;
    :hover,
    :focus {
      transform: translate(0, -2%);
      box-shadow: 0px 40px 8px -10px#585858;
      cursor: pointer;
    }
  }
`

const Featured = () => {
  const isDev = useIsDev()

  const {
    allMdx: { edges },
  } = useStaticQuery(graphql`
    query featuredQuery {
      allMdx(
        filter: {
          fileAbsolutePath: { regex: "/blog/" }
          frontmatter: { featured: { eq: true } }
        }
      ) {
        edges {
          node {
            frontmatter {
              title
              thumb
              description
              keywords
            }
            excerpt(pruneLength: 30)
            slug
          }
        }
      }
    }
  `)

  const featuredPosts = Object.values(edges).map(el => {
    return {
      ...el.node.frontmatter,
      excerpt: el.node.excerpt,
      slug: el.node.slug,
    }
  })

  if (isDev) {
    return (
      <FeaturedProjects id="deck">
        {featuredPosts.map(el => (
          <ProjectImage>
            <div>
              <h3>{el.title}</h3>
              <span>Blog</span>
            </div>

            <Link to={`/${el.slug}`}>
              <img
                src={`/img/${el.thumb ? el.thumb : "logo.png"}`}
                className="imageFluidContainer"
              />
            </Link>
            <p>{el.description}</p>
            <Link to={`/${el.slug}`}>Read more</Link>
          </ProjectImage>
        ))}
      </FeaturedProjects>
    )
  }
}

export default Featured
