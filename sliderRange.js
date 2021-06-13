export const sliderR = (selection, props)  =>{ 

    const {
        range,
        width,
        onSlider
    } = props;

    var sliderRange = d3
    .sliderBottom()
    .domain(range)
    .step(1000 * 60 * 60 * 24 * 30)
    .width(700)
    .height(50)
    .tickPadding(3)
    .tickFormat(d3.timeFormat('%Y'))
    .ticks(12)
    .default([new Date("1992"), new Date("2022")])
    .fill('#2196f3')
    .on('onchange', val => {
        render();
    });

    var gRange = d3
    .select('div#slider-range2')
    .append('svg')
    .attr('width', 5000)
    .attr('height', 100)
    .append('g')
    .attr('transform', `translate(${width/6},8)`);

    gRange.call(sliderRange)
}