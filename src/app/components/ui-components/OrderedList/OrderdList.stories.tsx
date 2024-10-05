import type { Meta, StoryObj } from "@storybook/react";
import { OrderedList } from "./OrderedList";

const meta = {
  title: "Components/OrderedList",
  component: OrderedList,
} satisfies Meta<typeof OrderedList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    listItems: [{ content: "Item 1" }, { content: "Item 2" }],
  },
};
