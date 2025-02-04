import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    label: "Testing checkbox",
    variant: "default",
    checkboxSize: "medium",
    checked: false,
    labelPosition: "right",
    disabled: false,
  },
  argTypes: {
    checkboxSize: { control: "select", options: ["small", "medium", "large"] },
    labelPosition: { control: "select", options: ["left", "right"] },
    variant: { control: "select", options: ["flat", "rounded", "pill", "default"] },
    disabled: { control: "boolean" },
    label: { control: "text" },
    backgroundColor: { control: "color" },
    borderColor: { control: "color" },
    checked: { control: "boolean" },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Default Checkbox",
    checked: false,
    onChange: action("onChange"),
  },
};

export const Flat: Story = { args: { variant: "flat" } };
export const Rounded: Story = { args: { variant: "rounded" } };
export const Pill: Story = { args: { variant: "pill" } };
export const Small: Story = { args: { checkboxSize: "small" } };
export const Medium: Story = { args: { checkboxSize: "medium" } };
export const Large: Story = { args: { checkboxSize: "large" } };
export const LabelLeft: Story = { args: { labelPosition: "left" } };
export const LabelRight: Story = { args: { labelPosition: "right" } };
export const Disabled: Story = { args: { disabled: true } };
