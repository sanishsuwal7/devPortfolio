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
  { name: 'Java' },
  { name: 'Kotlin' },
  { name: 'React', type: 'frontend' },
  { name: 'Angular', type: 'frontend' },
  { name: 'Node.js', type: 'backend' },
  { name: 'Springboot', type: 'backend' },
  { name: 'HTML', type: 'frontend' },
  { name: 'CSS', type: 'frontend' },
  { name: 'AWS', type: 'devOps' },
  { name: 'Docker', type: 'devOps' },
  { name: 'MongoDB', type: 'db' },
  { name: 'MySql', type: 'db' },
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
