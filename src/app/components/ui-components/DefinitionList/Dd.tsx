import { FC, PropsWithChildren, ComponentProps } from 'react';

export const Dd: FC<PropsWithChildren<ComponentProps<'dd'>>> = ({
  children,
  ...args
}) => (
  <dd
    {...args}
    className="break-all text-sm leading-snug"
  >
    {children}
  </dd>
);
