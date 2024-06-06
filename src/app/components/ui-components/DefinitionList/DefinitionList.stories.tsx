import { Meta, StoryObj } from '@storybook/react';
import { DefinitionList } from './DefinitionList';
import { Dt } from './Dt';
import { Dd } from './Dd';

const meta = {
  title: 'Components/DefinitionList',
  component: DefinitionList,
} satisfies Meta<typeof DefinitionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DefinitionList>
      <>
        <Dt>ここにタイトル1が入ります</Dt>
        <Dd>ここに説明文1が入ります。</Dd>
      </>
      <>
        <Dt>ここにタイトル2が入ります</Dt>
        <Dd>ここに説明文2が入ります。</Dd>
      </>
    </DefinitionList>
  ),
};
