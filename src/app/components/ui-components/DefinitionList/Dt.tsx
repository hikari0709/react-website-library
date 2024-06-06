import { FC, PropsWithChildren, ComponentProps } from 'react';

type Props = ComponentProps<'dt'>;

export const Dt: FC<PropsWithChildren<Props>> = ({ children, ...args }) => (
  <dt
    {...args}
    className="break-all text-base leading-normal font-bold"
  >
    {children}
  </dt>
);
