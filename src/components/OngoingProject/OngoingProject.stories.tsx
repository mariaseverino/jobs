import { Meta, StoryObj } from '@storybook/react';
import { OngoingProject } from './';
import { MemoryRouter } from 'react-router';
import { UserProvider } from '../../context/user-context';
export default {
    title: 'Components/Ongoing Project List/Ongoing Project',
    component: OngoingProject,
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
        name: 'Plataforma de E-commerce',
        client: 'Startup X',
        status: 'Pagamento parcial',
        value: '$2,500',
    },
};
