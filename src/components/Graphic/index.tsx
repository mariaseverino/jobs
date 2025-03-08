import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../ui/card';
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '../ui/chart';
const chartData = [
    { month: 'Setembro', desktop: 32000 },
    { month: 'Outubro', desktop: 28500 },
    { month: 'Novembro', desktop: 34000 },
    { month: 'Dezembro', desktop: 73 },
    { month: 'Janeiro', desktop: 39000 },
    { month: 'Fevereiro', desktop: 37500 },
];

const chartConfig = {
    desktop: {
        label: 'Desktop2',
        color: '#013d5a',
    },
} satisfies ChartConfig;

export function Graphic() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Faturamento Mensal - Últimos 6 Meses</CardTitle>
                <CardDescription>
                    Setembro 2024 - Fevereiro 2025
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Line
                            dataKey="desktop"
                            type="natural"
                            stroke="var(--color-desktop)"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
