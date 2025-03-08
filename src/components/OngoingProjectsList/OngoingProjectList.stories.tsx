import { Meta, StoryObj } from '@storybook/react';
import { OngoingProjectsList } from './';
import { MemoryRouter } from 'react-router';
import { UserProvider } from '../../context/user-context';
export default {
    title: 'Components/Ongoing Project List',
    component: OngoingProjectsList,
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
