"use client"
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';
import moment from 'moment';

interface LineComponentProps {
    data: number[]; // Định nghĩa kiểu dữ liệu cho tham số data
}
export default function LineComponent({ data }: LineComponentProps) {
    const LineRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (LineRef.current) {
            const ctx = LineRef.current.getContext('2d');
            if (ctx) {
                const labels = Array.from({ length: 12 }, (_, i) =>
                    moment().subtract(11 - i, 'months').format('MM-YYYY')
                );
                labels.reverse();
                new Chart(ctx, {
                    type: 'line', // Thay đổi type thành 'line'
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Số bài viết',
                            data: data,
                            borderColor: "#570000",
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }],
                            xAxes: [{
                                gridLines: {
                                    display: false // Loại bỏ sọc kẻ dọc
                                }
                            }]
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false,
                        }
                    }
                });
            }
        }
    }, [data]);

    return <canvas ref={LineRef} />;
};
