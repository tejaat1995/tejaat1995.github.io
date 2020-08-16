function renderIcons() {
    // Move icon
    if (!this.series[0].icon) {
        this.series[0].icon = this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
            .attr({
                stroke: '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 2,
                zIndex: 10
            })
            .add(this.series[2].group);
    }
    this.series[0].icon.translate(
        this.chartWidth / 2 - 10,
        this.plotHeight / 2 - this.series[0].points[0].shapeArgs.innerR -
        (this.series[0].points[0].shapeArgs.r - this.series[0].points[0].shapeArgs.innerR) / 2
    );

    // Exercise icon
    if (!this.series[1].icon) {
        this.series[1].icon = this.renderer.path(
            ['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8,
                'M', 8, -8, 'L', 16, 0, 8, 8]
        )
            .attr({
                stroke: '#ffffff',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 2,
                zIndex: 10
            })
            .add(this.series[2].group);
    }
    this.series[1].icon.translate(
        this.chartWidth / 2 - 10,
        this.plotHeight / 2 - this.series[1].points[0].shapeArgs.innerR -
        (this.series[1].points[0].shapeArgs.r - this.series[1].points[0].shapeArgs.innerR) / 2
    );

    // Stand icon
    if (!this.series[2].icon) {
        this.series[2].icon = this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
            .attr({
                stroke: '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 2,
                zIndex: 10
            })
            .add(this.series[2].group);
    }

    this.series[2].icon.translate(
        this.chartWidth / 2 - 10,
        this.plotHeight / 2 - this.series[2].points[0].shapeArgs.innerR -
        (this.series[2].points[0].shapeArgs.r - this.series[2].points[0].shapeArgs.innerR) / 2
    );
}

$(function () {
    $('#column-chart-container').highcharts({
        chart: {
            type: 'column',
        },
        title: {
            text: null
        },
        xAxis: {
            categories: [
                'Time',
            ],
            crosshair: true
        },
        yAxis: {
            title: null
        },
        credits: false,
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: '1',
            data: [49.9]

        }, {
            name: '2',
            data: [83.6]

        }, {
            name: '3',
            data: [48.9]

        }, {
            name: '4',
            data: [42.4]

        }]
    });
    $('#solidgauge-chart-container').highcharts({
        chart: {
            type: 'solidgauge',
            events: {
                render: renderIcons
            }
        },

        title: {
            text: null,
            style: {
                fontSize: '24px'
            }
        },

        credits: false,
        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '16px'
            },
            valueSuffix: '%',
            pointFormat: '{series.name}<br><span style="font-size:1em; color: black; font-weight: bold">{point.y}</span>',
            positioner: function (labelWidth) {
                return {
                    x: (this.chart.chartWidth - labelWidth) / 2,
                    y: (this.chart.plotHeight / 2) + 15
                };
            }
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for Move
                outerRadius: '112%',
                innerRadius: '88%',
                backgroundColor: Highcharts.color(Highcharts.getOptions().colors[0])
                    .setOpacity(0.3)
                    .get(),
                borderWidth: 0
            }, { // Track for Exercise
                outerRadius: '87%',
                innerRadius: '63%',
                backgroundColor: Highcharts.color(Highcharts.getOptions().colors[1])
                    .setOpacity(0.3)
                    .get(),
                borderWidth: 0
            }, { // Track for Stand
                outerRadius: '62%',
                innerRadius: '38%',
                backgroundColor: Highcharts.color(Highcharts.getOptions().colors[2])
                    .setOpacity(0.3)
                    .get(),
                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
        },

        series: [{
            name: '1',
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '112%',
                innerRadius: '88%',
                y: 80
            }]
        }, {
            name: '2',
            data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '87%',
                innerRadius: '63%',
                y: 65
            }]
        }, {
            name: '3',
            data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '62%',
                innerRadius: '38%',
                y: 50
            }]
        }]
    });
    $('#pie-chart-container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            renderTo: 'pie-chart-container'
        },
        title: {
            text: null
        },
        credits: false,
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: '1',
                y: 61.41,
                sliced: true,
                selected: true
            }, {
                name: '2',
                y: 11.84
            }, {
                name: '3',
                y: 10.85
            }, {
                name: '4',
                y: 4.67
            }, {
                name: '5',
                y: 4.18
            }, {
                name: '6',
                y: 1.64
            }, {
                name: '7',
                y: 1.6
            }, {
                name: '8',
                y: 1.2
            }, {
                name: '9',
                y: 2.61
            }]
        }]
    });
});


