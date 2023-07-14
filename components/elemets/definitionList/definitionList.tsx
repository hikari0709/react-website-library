import ReactNode from 'react';

type Props = {
  listItem: {};
};

const DefinitionList = (props: Props) => {
  return (
    <dl>
      <div>
        <dt>{props.listItem.title}</dt>
        <dd>{props.listItem}</dd>
      </div>
    </dl>
  );
};

export default DefinitionList;
