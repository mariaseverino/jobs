import { Meta, StoryObj } from '@storybook/react';
import { Dashboard } from './';
import { MemoryRouter } from 'react-router';
import { UserProvider } from '../../context/user-context';
export default {
    title: 'Pages/Dashboard',
    component: Dashboard,
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

export const Default: StoryObj = {};
