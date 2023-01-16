import React from 'react';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
}

export default function Button({children, ...rest}: ButtonProps) {
  return <button {...rest}>{children}</button>;
}
