import ReactNode from 'react';

type Props = {
  listItem: {
    title: string;
    detail: string;
  };
};

const DefinitionList = ({ listItem }: Props) => {
  return (
    <dl>
      <div>
        <dt>{listItem.title}</dt>
        <dd>{listItem.detail}</dd>
      </div>
    </dl>
  );
};

export default DefinitionList;
