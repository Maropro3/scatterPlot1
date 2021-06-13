import {colorLegend} from './colorLegend'
export const scatterPlot = (selection, props) => {

    const {
        title,
        xValue,
        xLabel,
        xColName,
        yValue,
        yLabel,
        yColName,
        margin,
        width,
        height,
        xUnits,
        yUnits,
        dateRange,
        colorScale,
        colorValue,
        data

    } = props;

    const innerWidth = width- width/4 -300;
    const innerHeight = height -height/4;
    let dataF = data;

    const g = selection.selectAll('.container').data([null]);
    const gEnter = g.enter().append('g')
    .attr('class', 'container');
    
   // d3.selectAll('#svgG').remove();

    // const svgZ = selection.append('svg').attr('id', 'svgG');

    const svgZM = selection.selectAll('.svgG').data([null]);
    const svgZMEnter = svgZM.enter().append('svg')
    .attr('class', 'svgG')
    .attr('x', margin.left)
    .attr('y', margin.top)
    .attr("width", innerWidth)
    .attr("height", innerHeight)
    .append("rect")
    .attr('x', margin.left)
    .attr('y', margin.top)
    .attr("width", innerWidth)
    .attr("height", innerHeight)
    .style("fill", "none");

    svgZMEnter.merge(svgZM);
   // .attr('transform', `translate(${margin.left},${margin.top})`);
    
    // svgZ.append("rect")
    // .attr('x', margin.left)
    // .attr('y', margin.top)
    // .attr("width", innerWidth)
    // .attr("height", innerHeight)
    // .style("fill", "none")
    const svgZ = d3.selectAll('.svgG');

    const gZ = svgZ.selectAll('.containerZ').data([null]);
    const gZEnter = gZ.enter().append('g')
    .attr('class', 'containerZ');

    gEnter.merge(g)
    .attr('transform', `translate(${margin.left},${margin.top})`);


  //  d3.selectAll('.svgX').remove()

    const xScale = d3.scaleLinear()
    .domain(d3.extent(dataF, xValue))
    .range([0,innerWidth])
    .nice();

    const yScale = d3.scaleLinear()
    .domain(d3.extent(dataF, yValue))
    .range([ innerHeight, 0])
    .nice();
    
    const yAxis = d3.axisLeft(yScale)
    .tickSize(-innerWidth)
    .tickPadding(10);

    const xAxis = d3.axisBottom(xScale)
    .tickSize(-innerHeight)
    .tickPadding(10);

    const yAxisG = g.select('.yAxis');
    const yAxisGEnter = gEnter.append('g')
    .attr('class', 'yAxis');

    yAxisG.merge(yAxisGEnter)
    .call(yAxis)
    .selectAll('.domain')
    .remove();

    const yAxisLabelText = yAxisGEnter
    .append('text')
    .attr('class', 'axis-label')
    .attr('transform', `rotate(270)`)
    .attr('fill', 'black')
    .attr('text-anchor', 'middle')
    .attr('y', -70)
    .merge(yAxisG.select('.axis-label'))
    .attr('x', -innerHeight/2)
    .text(yLabel + yUnits);

    const xAxisG = g.select('.xAxis');
    const xAxisGEnter = gEnter.append('g')
    .attr('class', 'xAxis')
    .attr('transform', `translate(0,${innerHeight})`);

    xAxisG.merge(xAxisGEnter)
    .call(xAxis)
    .selectAll('.domain')
    .remove();

    const xAxisLabelText = xAxisGEnter
    .append('text')
    .attr('class', 'axis-label')
    .attr('fill', 'black')
    .attr('align', 'center')
    .attr('y', 50)
    .merge(xAxisG.select('.axis-label'))
    .attr('x', innerWidth/2)
    .text(xLabel + xUnits);

    const titleG = g.select('.title');
    const titleGEnter = gEnter.append('g')
    .attr('class', 'title')

    titleG.merge(titleGEnter)
    .selectAll('.domain')
    .remove();

    const titleGText = titleGEnter
    .append('text')
    .attr('class', 'axis-label')
    .attr('fill', 'black')
    .attr('align', 'center')
    .attr('y', -10)
    .merge(titleG.select('.axis-label'))
    .attr('x', innerWidth/2)
    .text(title);


   var opacity = function(val) {
    if (val.length < 500) {
          return 1;
      }
    if ( val.length < 1000) {
        return 0.8;
    }
    if ( val.length < 2000) {
        return 0.65;
    }
    if ( val.length < 5000) {
        return 0.45;
    }
    if ( val.length < 10000) {
        return 0.25;
    }
    if ( val.length < 20000) {
        return 0.1;
    }
    else {
        return 0.08;
    }
   }

   d3.selectAll('.tooltip').remove();
   
    var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("fill-opacity", 0);

  //  var hideT = document.getElementsByClassName("tooltip");
    var tipMouseover = function(event,d) {

       // hideT.style.display = "block";
        
        var color = colorScale(colorValue(d));

        d3.select(this)
        .attr('stroke-width', '2')
        .attr("stroke", "black")
        .attr('fill-opacity', 1 );

        tooltip.html( "<b>" + d.pl_name + "</b>" + "<br/>" +
        "<span style='color:" + color + ";'>" + d.discoverymethod + "</span><br/>" +
        yLabel + ": " + d[yColName] + "<br/>" + xLabel + ": " + + d[xColName] 
        )
        .style("left", (event.pageX -95) + "px")
        .style("top", (event.pageY -90) + "px")
        .transition()
            .duration(200) 
            .style("fill-opacity", .9) 
            .style('display','block'); 

    };
    var tipMouseout = function(d) {

        // d3.selectAll('.circleG')
        // .attr('fill-opacity', opacity);

        d3.select(this)
        .attr('stroke-width', '0')
        .attr('fill-opacity', opacity(dataF) );

        tooltip.transition()
            .duration(200) 
            .style("fill-opacity", 0)
            .style('display','none'); 

       // hideT.style.display = "none";
    };


    var zoom = d3.zoom()
    .extent([[0, 0], [innerWidth, innerHeight]])
    .on("zoom", zoomed);

    function zoomed(event) {
        // create new scale ojects based on event
            var new_xScale = event.transform.rescaleX(xScale);
            var new_yScale = event.transform.rescaleY(yScale);
        // update axes
            // gX.call(xAxis.scale(new_xScale));
            // gY.call(yAxis.scale(new_yScale));

            // var yAxisZ = d3.axisLeft(new_yScale)
            // .tickSize(-innerWidth)
            // .tickPadding(10);
        
            // var xAxisZ = d3.axisBottom(new_xScale)
            // .tickSize(-innerHeight)
            // .tickPadding(10);

            xAxisG.merge(xAxisGEnter)
            .call(xAxis.scale(new_xScale))
            .selectAll('.domain')
            .remove();

            yAxisG.merge(yAxisGEnter)
            .call(yAxis.scale(new_yScale))
            .selectAll('.domain')
            .remove();

            // xAxisGEnter
            // .call(xAxis.scale(new_xScale))
            // .selectAll('.domain')
            // .merge(xAxisG.select('.axis-label'))
            // .call(xAxis.scale(new_xScale))
            // .attr('x', innerWidth/2)
            // .text(xLabel + xUnits)
            // .remove();
          
            // yAxisGEnter
            // .call(yAxis.scale(new_yScale))
            // .selectAll('.domain')
            // .merge(xAxisG.select('.axis-label'))
            // .call(yAxis.scale(new_xScale))
            // .attr('x', innerHeight/2)
            // .text(yLabel + yUnits)
            // .remove();

            // var newX = event.transform.rescaleX(xScale);
            // var newY = event.transform.rescaleY(yScale);

            // xAxis.call(d3.axisBottom(newX));
            // yAxis.call(d3.axisLeft(newY));
        
              d3.selectAll('.circleG')
               .attr('cy', d => new_yScale(yValue(d)))
                .attr('cx', d => new_xScale(xValue(d)));
    }
    
    const circles =  gZ.merge(gZEnter).selectAll('circle').data(dataF);

   circles.enter().append('circle')
    .attr('class', 'circleG')
    .attr('cx', innerWidth/2)
    .attr('cy', innerHeight/2)
    .attr('r', 3)
    .merge(circles)
    .transition().duration(2000)
    .attr('cy', d => yScale(yValue(d)))
    .attr('cx', d => xScale(xValue(d)))
    .attr('r', 4.5)
    .attr('fill', d => colorScale(colorValue(d)))
    .attr('fill-opacity', opacity(dataF));

    d3.selectAll('.circleG')
    .on('mouseover', tipMouseover)
    .on('mouseout', tipMouseout);

    d3.selectAll('.circleG');
    
    d3.selectAll('#svgM').call(d3.zoom().on("zoom",zoomed));

    circles.exit().remove();

};

