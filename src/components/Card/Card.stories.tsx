import { Meta, StoryObj } from '@storybook/react';
import { Card } from './';
import { MemoryRouter } from 'react-router';
import { UserProvider } from '../../context/user-context';
export default {
    title: 'Components/Card',
    component: Card,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <UserProvider>
                    <Story />
                </UserProvider>
            </MemoryRouter>
        ),
    ],
} as Meta;

export const Default: StoryObj = {
    args: {
        title: 'Clientes Ativos',
        value: '12',
        percentage_change: '12%',
        color: '#fe9496',
    },
};
