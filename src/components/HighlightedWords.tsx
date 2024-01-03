import React from 'react';
import styles from '@/styles/style.module.scss';

export const HighlightedWords = ({ title }: { title: string }) => {
  return title.split(' ').map((el, i) => {
    if (el.includes('**')) {
      const reg = /\*/g;
      return (
        <div key={`highlightwords-${i}`} className={styles.highlight}>
          <div>{el.replace(reg, '')}</div>
          <div></div>
        </div>
      );
    } else return <div>{el}</div>;
  });
};
