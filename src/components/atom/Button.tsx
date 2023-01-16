import React from 'react';

const defaultElement = 'button';

type ButtonProps<T extends React.ElementType> = {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

const Button = React.forwardRef(
  <T extends React.ElementType = typeof defaultElement>(
    {as, ...rest}: ButtonProps<T>,
    ref: React.Ref<any>
  ) => {
    const Element = as ?? defaultElement;

    return <Element ref={ref} {...rest} />;
  }
);

export default Button;
