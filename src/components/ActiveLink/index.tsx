'use client';
import Link, { LinkProps } from 'next/link';
import React, { PropsWithChildren, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

type ActiveLinkProps = LinkProps & {
  className?: string;
  activeClassName: string;
};

const ActiveLink = ({
  children,
  activeClassName,
  className,
  ...props
}: PropsWithChildren<ActiveLinkProps>) => {
  const pathname = usePathname();
  return (
    <Link
      className={
        pathname == props.href ? className + ' ' + activeClassName : className
      }
      {...props}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
