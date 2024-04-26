import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, ICheckboxProps } from "./Checkbox";
import { useArgs } from "@storybook/addons";
import { action } from "@storybook/addon-actions";
import { ChangeEvent } from "react";

const meta: Meta<typeof Checkbox> = {
    title: 'Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    args: {
        label: 'testing checkbox',
        variant: 'default',
        checkboxSize: 'medium',
        checked: false,
        labelPosition: 'left',
        disabled: false,
    },
    argTypes: {
        checkboxSize: {
            control: 'select',
            options: ['small', 'medium', 'large']
        },
        labelPosition: {
            control: 'select',
            options: ['left', 'right']
        },
        variant: {
            control: 'select',
            options: ['flat', 'rounded', 'pill']
        },
        disabled: {
            control: 'boolean'
        },
        label: {
            control: 'text'
        },
        backgroundColor: {
            control: 'color'
        },
        borderColor: {
            control: 'color'
        },
        checked: {
            control: 'boolean'
        }
    },
}satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: ICheckboxProps) => {
    const [, updateArgs] = useArgs()

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        args.onChange?.(e)
        updateArgs({ checked: !args.checked })
        action('onChange')(e)
    }
    return<Checkbox {...args} onChange={handleChange}/>}
Default.args = {
    label: ''
}

export const Flat: StoryObj<typeof Checkbox> = {
    args: {
        variant: 'flat'
    }
}

export const Pill: StoryObj<typeof Checkbox> = {
    args: {
        variant: 'pill'
    }
}

export const Rounded: StoryObj<typeof Checkbox> = {
    args: {
        variant: 'rounded'
    }
}

export const CheckboxSmall: StoryObj<typeof Checkbox> = {
    args: {
        checkboxSize: 'small'
    }
}

export const CheckboxMedium: StoryObj<typeof Checkbox> = {
    args: {
        checkboxSize: 'medium'
    }
}

export const CheckboxLarge: StoryObj<typeof Checkbox> = {
    args: {
        checkboxSize: 'large'
    }
}

export const LabelRight: StoryObj<typeof Checkbox> = {
    args: {
        labelPosition: 'right'
    }
}

export const LabelLeft: StoryObj<typeof Checkbox> = {
    args: {
        labelPosition: 'left'
    }
}