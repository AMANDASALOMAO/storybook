import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

export const Default: StoryObj<typeof Input> = {
    args: {}
}

export const Flat: StoryObj<typeof Input> = {
    args: {
        variant: 'flat'
    }
}

export const Pill: StoryObj<typeof Input> = {
    args: {
        variant: 'pill'
    }
}

export const Rounded: StoryObj<typeof Input> = {
    args: {
        variant: 'rounded'
    }
}

const config: Meta<typeof Input> = {
    title: 'components/Input',
    component: Input,
    tags: ['autodocs'],
    args: {
        variant: 'flat',
        label: 'test label',
        disabled: false,
        placeholder: 'test placeholder'
    },
    argTypes: {
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
        }
    }
}
export default config