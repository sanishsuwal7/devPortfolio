import React from 'react';
import styled from 'styled-components';
import { Tags } from '../styles/components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > div {
    padding: 0 1rem 0 0;
  }
`;
const AllTags = styled(Tags)`
  width: 100%;
  justify-content: center !important;
  @media only screen and (min-width: 768px) {
    padding-right: 0;
    max-width: 100%;
    width: 100%;
    justify-content: flex-start !important;
  }
  @media only screen and (min-width: 1024px) {
    max-width: 100%;
  }
  li {
    position: relative;
    font-size: 1rem;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const skills = [
  { name: 'Typescript' },
  { name: 'React', type: 'frontend' },
  { name: 'Node.js', type: 'backend' },
  { name: 'HTML', type: 'frontend' },
  { name: 'CSS', type: 'frontend' },
  { name: 'AWS', type: 'devOps' },
  { name: 'Gatsby', type: 'frontend' },
  { name: 'Next.js', type: 'frontend' },
  { name: 'MongoDB', type: 'db' },
  { name: 'GraphQL', type: 'backend' },
  { name: 'Apollo GraphQL', type: 'backend' },
  { name: 'PostgreSQL', type: 'db' },
  { name: 'Nexus', type: 'backend' },
  { name: 'FaunaDB', type: 'db' },
  { name: 'Firebase', type: 'backend' },
  { name: 'Wordpress', type: 'cms' },
  { name: 'Shopify', type: 'cms' },
];

export default function SkillIcons() {
  return (
    <Wrapper>
      <AllTags>
        <li>JavaScript</li>
        <li>Python</li>
        {skills.map((s, i) => (
          <li key={`skill-i-${i}`} className={s.type}>
            {s.name}
          </li>
        ))}
      </AllTags>
    </Wrapper>
  );
}
