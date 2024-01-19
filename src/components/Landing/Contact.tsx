import { CupContainer, Hero } from '@/styles/components';
import { Email } from '.';
import { HighlightedWords } from '../HighlightedWords';
import { SlidingButton } from './Buttons';
import Cup from './cup.svg';
import Steam from './steam_1.svg';

export const ContactSection = ({ contact }) => {
  const { action, title } = contact;

  return (
    <div id="contactBox">
      <Hero invert={false}>{<HighlightedWords title={title} />}</Hero>
      <CupContainer>
        <div className="steam">
          <Steam />
        </div>
        <div className="cup">
          <Cup />
        </div>
      </CupContainer>

      <Email href={'mailto:contact@aaspinwall.com'}>
        contact@aaspinwall.com
      </Email>

      <div
        style={{
          gridArea: 'button',
          marginTop: '1rem',
          marginBottom: '3rem',
        }}
      >
        <SlidingButton
          buttonText={'Get in touch'}
          link="https://calendly.com/aaspinwall/15"
        />
      </div>
    </div>
  );
};
