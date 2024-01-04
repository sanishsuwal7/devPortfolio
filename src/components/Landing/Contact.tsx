import { Hero, CupContainer, StyledButton } from '@/styles/components';
import { Email } from '.';
import { HighlightedWords } from '../HighlightedWords';
import Cup from './cup.svg';
import Steam from './steam_1.svg';
import { SlidingButton } from './Buttons';

export const ContactSection = ({ contact }) => {
  const { action, title } = contact;

  return (
    <div id="contactBox">
      <Hero invert={false}>{<HighlightedWords title={title} />}</Hero>
      <CupContainer className="cup">
        <Steam />
        <Cup />
      </CupContainer>

      <Email href={'mailto:contact@aaspinwall.com'}>
        contact@aaspinwall.com
      </Email>

      <StyledButton
        style={{
          gridArea: 'button',
          marginTop: '1rem',
          marginBottom: '3rem',
        }}
      >
        <SlidingButton
          buttonText={action}
          link="/"
          onClick={() =>
            (window.location.href = 'https://calendly.com/aaspinwall/15')
          }
        />
      </StyledButton>
    </div>
  );
};
