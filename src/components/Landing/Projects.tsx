import {
  Header,
  Paragraph,
  Projects,
  SectionTag,
  StyledButton,
  Tags,
} from '@/styles/components';

import Link from 'next/link';
import { ProjectImage } from '.';

import { content } from '../../../content';
import { HighlightedWords } from '../HighlightedWords';
import { SlidingButton } from './Buttons';

type Props = { projects: typeof content.projects };

/*
 * We're hardcoding the keywords for now, but we can make this dynamic later
 */
const defaultKeywords = ['nextjs', 'typescript', 'react'];

export const ProjectsSection = ({ projects }: Props) => {
  return (
    <>
      <h1>
        <HighlightedWords title="**Projects" />
      </h1>

      <div>
        {projects.map((project, i) => {
          const { buttonText, body, link, title, image, role, keywords } =
            project;

          const tags = keywords || defaultKeywords;

          return (
            <Projects key={`projects-${i}`}>
              <SectionTag className="latest" style={{ gridArea: 'top' }}>
                {role || `Personal Project`}
              </SectionTag>
              <Header>
                <HighlightedWords title={title} />
              </Header>

              {tags && (
                <Tags>
                  {tags.map((keyword, i) => (
                    <li key={`keyword-element-${i}`}>{keyword}</li>
                  ))}
                </Tags>
              )}

              <Paragraph style={{ gridArea: 'text' }}>{body}</Paragraph>

              <StyledButton style={{ gridArea: 'button' }}>
                <SlidingButton buttonText={buttonText} link={link} />
              </StyledButton>

              <ProjectImage style={{ gridArea: 'image' }}>
                <Link href={link}>
                  <img
                    className="imageFluidContainer"
                    alt="project image"
                    src={`/img/${image}`}
                  />
                </Link>
              </ProjectImage>
            </Projects>
          );
        })}
      </div>
    </>
  );
};
