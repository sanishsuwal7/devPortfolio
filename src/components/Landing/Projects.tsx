import {
  Paragraph,
  Projects,
  SectionTag,
  StyledButton,
} from '@/styles/components';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { ProjectImage } from '.';

import { HighlightedWords } from '../HighlightedWords';
import { SlidingButton } from './Buttons';

export const ProjectsSection = ({ projects }) => {
  const { push } = useRouter();
  return (
    <>
      <h1>
        <HighlightedWords title="**Projects" />
      </h1>

      <Projects>
        {projects.map((project, i) => {
          const { action, body, link, title, image } = project;

          return (
            <div key={`projects-${i}`}>
              <SectionTag className="latest" style={{ gridArea: 'top' }}>
                LATEST WORK
              </SectionTag>
              
              <Paragraph style={{ gridArea: 'text' }}>{body}</Paragraph>

              <StyledButton style={{ gridArea: 'button' }}>
                <SlidingButton action={action} link={link} />
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
            </div>
          );
        })}
      </Projects>
    </>
  );
};
