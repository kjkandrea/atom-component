import React from 'react';

// 1.
type ButtonElementProps = JSX.IntrinsicElements['button'];
type AnchorElementProps = JSX.IntrinsicElements['a'];

// 2.
type PolymorphicElementProps<T extends React.ElementType> = {
  as: T;
} & React.ComponentPropsWithoutRef<T>;

// 3.
type ButtonProps<T extends React.ElementType> =
  | ButtonElementProps
  | AnchorElementProps
  | PolymorphicElementProps<T>;

// 4.
function isPropsForPolymorphicElement<T extends React.ElementType>(
  props: ButtonProps<React.ElementType>
): props is PolymorphicElementProps<T> {
  return 'as' in props;
}

function isPropsForAnchorElement(
  props: ButtonProps<React.ElementType>
): props is AnchorElementProps {
  return 'href' in props;
}

export default function Button<T extends React.ElementType>(
  props: ButtonProps<T>
) {
  if (isPropsForPolymorphicElement<T>(props)) {
    const {as, ...rest} = props;
    const Element: React.ElementType = as;
    return <Element {...rest} />;
  } else if (isPropsForAnchorElement(props)) {
    return <a {...props} />;
  } else {
    return <button {...props} />;
  }
}
