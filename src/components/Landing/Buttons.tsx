import Link from 'next/link';

type Props = {
  buttonText: string;
  link: string;
  onClick?: () => void;
};

export const SlidingButton = ({ buttonText, onClick, link }: Props) => {
  return [0, 0].map((e, i) =>
    onClick ? (
      <div
        key={i}
        className="topButton"
        tabIndex={i === 0 ? 0 : -1}
        onClick={onClick}
      >
        {buttonText}
      </div>
    ) : (
      <Link key={i} tabIndex={i === 0 ? 0 : -1} href={link}>
        {buttonText}
      </Link>
    ),
  );
};
