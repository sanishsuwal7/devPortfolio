import * as movingday from '../../public/projects/movingday/content';
import * as refy from '../../public/projects/refy/content';

export type Content = {
  title: string;
  featuredImage: string;
  description: string;
  details: {
    type: string;
    stack: string;
    code: string;
    live: string;
  };
  keywords: string[];
  role: string;
};

export const content = {
  movingday: { ...movingday.content },
  refy: { ...refy.content },
};
