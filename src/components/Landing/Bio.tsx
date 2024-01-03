import { Bio, ImageFull } from '@/styles/components';
import { HighlightedWords } from '../HighlightedWords';
import { Img } from '@chakra-ui/react';
import Link from 'next/link';
import { ReadMore } from '.';
import SkillIcons from '../SkillIcons';
import { Features } from './Features';

type Props = {
  bio: {
    title: string;
    features: { body: string; header: string }[];
    image: string;
  };
};

export const BioSection = ({ bio }: Props) => {
  const { title, features, image } = bio;

  return (
    <Bio>
      <div id="bioContainer">
        <h1 style={{ height: '3rem' }}>
          <HighlightedWords title={title} />
        </h1>
        <ImageFull id="bioImage">
          <Img
            alt="a picture of alejandro"
            style={{ gridArea: 'image', maxWidth: '320px', margin: 'auto' }}
            src="/img/alejandro.jpg"
          />
        </ImageFull>

        <div id="bioText">
          <SkillIcons />
          <Features features={features} />
          <ReadMore>
            <Link href="/about">Keep reading my bio</Link>
          </ReadMore>
        </div>
      </div>
    </Bio>
  );
};
