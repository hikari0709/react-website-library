import { FC, PropsWithChildren, Children } from 'react';
/**
 * dtとddを横並びにできるように
 * dtとddのセットとセパレートするようにdividerを入れられるようにする？
 */

export const DefinitionList: FC<PropsWithChildren> = ({ children }) => {
  return (
    <dl className="flex flex-col gap-y-3">
      {Children.map(children, (child, index) => (
        <div
          key={index}
          className="flex flex-col gap-y-1"
        >
          {child}
        </div>
      ))}
    </dl>
  );
};
