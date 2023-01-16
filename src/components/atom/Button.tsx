import React from 'react';

// 1. <button> & <a> 사용 시의 Props 타입
type ButtonElementProps = JSX.IntrinsicElements['button'];
type AnchorElementProps = JSX.IntrinsicElements['a'];

// 2. as 를 통해 ElementType 를 지정할 경우의 Props 타입
type PolymorphicElementProps<T extends React.ElementType> = {
  as: T;
} & React.ComponentPropsWithoutRef<T>;

type ButtonProps<T extends React.ElementType> =
  | ButtonElementProps
  | AnchorElementProps
  | PolymorphicElementProps<T>;

// 3. 렌더링 분기를 위한 is 함수
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
