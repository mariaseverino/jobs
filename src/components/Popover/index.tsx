import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { ReactNode } from 'react';
interface PopoverProps {
    children: ReactNode;
}

export function PopoverWrapper({ children }: PopoverProps) {
    return (
        <Popover>
            <PopoverTrigger>{children}</PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
    );
}
