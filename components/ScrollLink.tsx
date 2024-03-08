import React from "react";
import Link from "next/link";

interface ScrollLinkProps {
  href: string;
  offset: number;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({
  href,
  offset,
  className,
  onClick,
  children,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offsetPosition = element.offsetTop - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    if (onClick) onClick();
  };

  return (
    <Link href={href} passHref className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ScrollLink;
