import React, { useEffect, useRef } from "react";
import { Chart, RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip } from "chart.js";

Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

const RadarChart = ({ data }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        // 축 라벨 설정 (평가 결과에 따라 동적 반영)
        const labels = data.map((value, index) => {
            const leftLabels = ["친절", "필기 시험", "옵션 1", "옵션 3", "옵션 5"];
            const rightLabels = ["엄격", "디지털 시험", "옵션 2", "옵션 4", "옵션 6"];
            return value < 0 ? leftLabels[index] : rightLabels[index]; // 음수는 왼쪽, 양수는 오른쪽
        });

        const ctx = chartRef.current.getContext("2d");
        chartInstance.current = new Chart(ctx, {
            type: "radar",
            data: {
                labels, // 평가 결과에 따른 라벨 반영
                datasets: [
                    {
                        label: "평가 결과",
                        data: data.map((value) => Math.abs(value)), // 절대값을 그래프 데이터로 사용
                        backgroundColor: "rgba(54, 162, 235, 0.2)",
                        borderColor: "rgba(54, 162, 235, 1)",
                        borderWidth: 2,
                        pointBackgroundColor: "rgba(54, 162, 235, 1)",
                        pointRadius: 3,
                    },
                ],
            },
            options: {
                responsive: false,
                maintainAspectRatio: false,
                layout: {
                    padding: 20,
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        min: 0, // 최소값을 0으로 설정 (절대값)
                        max: 3, // 최대값은 3
                        ticks: {
                            stepSize: 1,
                            display: false, // 점수 숨김
                        },
                        grid: {
                            color: "rgba(200, 200, 200, 0.5)",
                        },
                        angleLines: {
                            color: "rgba(200, 200, 200, 0.5)",
                        },
                        pointLabels: {
                            font: {
                                size: 14,
                            },
                            color: "rgba(0, 0, 0, 0.7)",
                            padding: 15,
                        },
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                },
            },
        });
    }, [data]);

    return (
        <div style={{ width: "300px", height: "300px", margin: "0 auto" }}>
            <canvas ref={chartRef} width="300" height="300" />
        </div>
    );
};

export default RadarChart;
