import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-style';

import helper from 'helpers';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

const Diagram = ({ data, onChangeData }) => {
    if (data === undefined) {
        return [];
    }

    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: false,
            tooltip: {
                callbacks: {
                    title: function () {},

                    label: function (tooltipItem) {
                        const label =
                            tooltipItem.datasetIndex === 0
                                ? tooltipItem.label.split(',')[0]
                                : tooltipItem.label.split(
                                      ',',
                                  )[1];

                        let label2 = tooltipItem.raw;
                        let label3 = '';
                        return [label, label2, label3];
                    },

                    labelTextColor: function (context) {
                        if (context.datasetIndex === 1) {
                            return (context.dataset.backgroundColor =
                                'rgba(33,150,243,0.5)');
                        }
                    },
                },
                bodyFont: {
                    size: 12,
                },
                backgroundColor: 'white',
                bodyColor: '#64B6F7',
                displayColors: false,
                mode: 'index',
                caretSize: 0,
                bodyAlign: 'left',
                borderColor: 'rgba(0,0,0,0.05)',
                borderWidth: 1.5,
            },
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
                grid: {
                    display: false,
                    borderColor: 'transparent',
                },
                barPercentage: 0.1,
                ticks: { display: false },
            },

            y: {
                stacked: true,
                grid: {
                    display: false,
                    borderColor: 'transparent',
                },
                ticks: { display: false },
            },
        },
    };

    const labels = data ? helper.getLabelArr(data) : '';

    const dataDiagram = {
        labels,
        datasets: [
            {
                data: data[0][0].hasOwnProperty('value')
                    ? data[0].map(el => el.value)
                    : data[0].map(el => el.view),

                backgroundColor: '#64B6F7',
                barPercentage: 1.24,
            },
            {
                data: data[1][0].hasOwnProperty('value')
                    ? data[1].map(el => el.value)
                    : data[1].map(el => el.view),

                backgroundColor: 'rgba(33, 150, 243, 0.1)',
                barPercentage: 1.24,
            },
        ],
    };

    return <Bar options={options} data={dataDiagram} />;
};
export default Diagram;
