import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
    },
};

export const Error: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        theme: TextTheme.ERROR,
    },
};

export const onlyTitle: Story = {
    args: {
        title: 'Title lorem ipsun',
    },
};

export const onlyText: Story = {
    args: {
        text: 'Description Description Description Description',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
    },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark: Story = {
    args: {
        title: 'Title lorem ipsun',
    },
};

onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark: Story = {
    args: {
        text: 'Description Description Description Description',
    },
};

onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
