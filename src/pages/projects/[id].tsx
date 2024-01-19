import { useRouter } from 'next/router';
import { content } from '../../content/movingday/content';

import Icon from '@/components/Icon';
import { Section } from '@/styles/components';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { useState } from 'react';
import styled from 'styled-components';
import { remark } from 'remark';
import html from 'remark-html';
import ReadTime from '@/components/ReadTime';

type PageProps = {
  mdxSource: string;
};

export async function getServerSideProps() {
  const filePath = path.join(
    process.cwd(),
    'content/projects/movingday/overview.md',
  );
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const mdxSource = processedContent.toString();

  return { props: { mdxSource } };
}

const ProjectPage = ({ mdxSource }: PageProps) => {
  const [showMore, setShowMore] = useState(false);
  const router = useRouter();
  const {
    title,
    description,
    featuredImage,
    details: { type, stack, code, live },
    keywords,
    role,
  } = content;
  return (
    <Section top={true}>
      <h1>{title.split(':')[0]}</h1>
      <ReadTime text={mdxSource} />
      <div dangerouslySetInnerHTML={{ __html: description }} />
      <Icon speed={'4s'} />

      <ProjectDetails>
        <div>
          <h3>Type</h3>
          <div>{type}</div>
        </div>
        <div>
          <h3>Stack</h3>
          {showMore ? (
            <div>
              {stack.split(' ').map((e, i) => (
                <div key={`stack-i-${i}`}>{e.replaceAll('_', ' ')}</div>
              ))}
            </div>
          ) : (
            <>
              {stack
                .split(' ')
                .filter((e, i) => i < 7)
                .map((e, i) => (
                  <div key={`stacksplit-${i}`}>{e.replaceAll('_', ' ')}</div>
                ))}
              {stack.split(' ').length > 7 && (
                <div onClick={() => setShowMore(true)}>...show more</div>
              )}
            </>
          )}
        </div>
        {code !== ' ' ? (
          <div>
            <h3>Code</h3>
            <a href={code}>Github</a>
          </div>
        ) : null}
        <div>
          <h3>Live</h3>
          <a href={live} target={'blank'}>
            <a href={live}>Site</a>
          </a>
        </div>
      </ProjectDetails>

      <Body
        className="post-body"
        dangerouslySetInnerHTML={{ __html: mdxSource }}
      />

      <span>Post: {router.query.id}</span>
    </Section>
  );
};

export default ProjectPage;

const Body = styled.div`
  .gif {
    float: left;
    margin: 0 2rem 0 0;
    padding: 1rem 0;
  }
`;

const ProjectDetails = styled.div`
  padding-bottom: 2rem;
  > div {
    flex-basis: 100%;
  }
  display: flex;
  justify-content: space-around;
  flex-flow: column;
  h3 {
    margin: 1rem 0 1rem;
    font-family: Montserrat;
  }
  @media only screen and (min-width: 768px) {
    flex-flow: row;
  }
`;
