import React from 'react';

const defaultElement = 'button';

type ButtonProps<T extends React.ElementType> = {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

export default function Button<
  T extends React.ElementType = typeof defaultElement
>({as, ...rest}: ButtonProps<T>) {
  const Element = as ?? defaultElement;

  return <Element {...rest} />;
}
