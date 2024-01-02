import Link from "next/link"

type Props = {
  action: string
  link: string
  alt?: () => void
}
export const SlidingButton = ({ action, alt, link }: Props) => {
  return [0, 0].map((e, i) =>
    alt ? (
      <div
        key={i}
        className="topButton"
        tabIndex={i === 0 ? 0 : -1}
        onClick={alt}
      >
        {action}
      </div>
    ) : (
      <Link key={i} tabIndex={i === 0 ? 0 : -1} href={link}>
        {action}
      </Link>
    ),
  )
}
