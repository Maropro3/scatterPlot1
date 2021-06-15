(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () { 'use strict';

    const dropDown = (selection, props) => {
        const {
            options,
            onOptionClick,
            selectedOption,
            axis,
            data,
            
        } = props;

        let slider = d3.sliderBottom();
        let dataF = data;
        let range = [];
        let axisD = axis;
        let select = selection.selectAll('select').data([null]);
        let xOffset;
        let units = "";
        
        select = select.enter().append('select')
        .merge(select)
        .attr('id', 'drop')
        .on('change', function() {
            switch(this.value){
                case 'Stellar Mass':
                    if (axisD === "x") {
                        d3.selectAll('.svgX g').remove();
                        console.log("okX");
                    }
                    if (axisD === "y") {
                        d3.selectAll('.svgY g').remove();
                        console.log("okY");
                    }
                    slider
                    .min(d3.min(dataF, d => d['st_mass']))
                    .max(d3.max(dataF, d => d['st_mass']))
                    .ticks(10)
                    .default([d3.min(dataF, d => d['st_mass']), d3.max(dataF, d => d['st_mass'])]);
                    range = [d3.min(dataF, d => d['st_mass']), d3.max(dataF, d => d['st_mass'])];
                    xOffset = -170;
                    units = " (Solar Mass)";

                    onOptionClick('st_mass', this.value, slider, range, xOffset, units);
                    break;
                case 'Stellar Temperature':
                    if (axisD === "x") {
                        d3.selectAll('.svgX g').remove();
                        console.log("okX");
                    }
                    if (axisD === "y") {
                        d3.selectAll('.svgY g').remove();
                        console.log("okY");
                    }
                    slider
                    .min(d3.min(dataF, d => d['st_teff']))
                    .max(d3.max(dataF, d => d['st_teff']))
                    .ticks(6)
                    .default([d3.min(dataF, d => d['st_teff']), d3.max(dataF, d => d['st_teff'])]);
                    range = [d3.min(dataF, d => d['st_teff']), d3.max(dataF, d => d['st_teff'])];
                    xOffset = -250;
                    units = " (K)";

                    onOptionClick('st_teff', this.value, slider, range, xOffset, units);
                    break;
                case 'Stellar Radius':
                    if (axisD === "x") {
                        d3.selectAll('.svgX g').remove();
                        console.log("okX");
                    }
                    if (axisD === "y") {
                        d3.selectAll('.svgY g').remove();
                        console.log("okY");
                    }
                    slider
                    .min(d3.min(dataF, d => d['st_rad']))
                    .max(d3.max(dataF, d => d['st_rad']))
                    .ticks(10)
                    .default([d3.min(dataF, d => d['st_rad']), d3.max(dataF, d => d['st_rad'])]);
                    range = [d3.min(dataF, d => d['st_rad']), d3.max(dataF, d => d['st_rad'])];
                    xOffset = -185;
                    units = " (Solar Radius)";

                    onOptionClick('st_rad', this.value, slider, range, xOffset, units);
                    break;
                case 'Stellar Luminosity':
                    if (axisD === "x") {
                        d3.selectAll('.svgX g').remove();
                        console.log("okX");
                    }
                    if (axisD === "y") {
                        d3.selectAll('.svgY g').remove();
                        console.log("okY");
                    }
                    slider
                    .min(d3.min(dataF, d => d['st_lum']))
                    .max(d3.max(dataF, d => d['st_lum']))
                    .ticks(6)
                    .default([d3.min(dataF, d => d['st_lum']), d3.max(dataF, d => d['st_lum'])]);
                    range = [d3.min(dataF, d => d['st_lum']), d3.max(dataF, d => d['st_lum'])];
                    xOffset = -230;
                    units = " (log(Solar))";

                    onOptionClick('st_lum', this.value, slider, range, xOffset, units);
                    break;
                case 'Planetary Mass':
                    if (axisD === "x") {
                        d3.selectAll('.svgX g').remove();
                        console.log("okX");
                    }
                    if (axisD === "y") {
                        d3.selectAll('.svgY g').remove();
                        console.log("okY");
                    }
                    slider
                    .min(d3.min(dataF, d => d['pl_bmasse']))
                    .max(d3.max(dataF, d => d['pl_bmasse']))
                    .ticks(6)
                    .default([d3.min(dataF, d => d['pl_bmasse']), d3.max(dataF, d => d['pl_bmasse'])]);
                    range = [d3.min(dataF, d => d['pl_bmasse']), d3.max(dataF, d => d['pl_bmasse'])];
                    xOffset = -200;
                    units = " (Earth Mass)";

                    onOptionClick('pl_bmasse', this.value, slider, range, xOffset, units);
                    break;
                case 'Planetary Radius':
                    if (axisD === "x") {
                        d3.selectAll('.svgX g').remove();
                        console.log("okX");
                    }
                    if (axisD === "y") {
                        d3.selectAll('.svgY g').remove();
                        console.log("okY");
                    }
                    slider
                    .min(d3.min(dataF, d => d['pl_rade']))
                    .max(d3.max(dataF, d => d['pl_rade']))
                    .ticks(10)
                    .default([d3.min(dataF, d => d['pl_rade']), d3.max(dataF, d => d['pl_rade'])]);
                    range = [d3.min(dataF, d => d['pl_rade']), d3.max(dataF, d => d['pl_rade'])];
                    xOffset = -225;
                    units = " (Earth Radius)";

                    onOptionClick('pl_rade', this.value, slider, range, xOffset, units);
                    break;
                case 'Orbital Period':
                    if (axisD === "x") {
                        d3.selectAll('.svgX g').remove();
                        console.log("okX");
                    }
                    if (axisD === "y") {
                        d3.selectAll('.svgY g').remove();
                        console.log("okY");
                    }
                    slider
                    .min(d3.min(dataF, d => d['pl_orbper']))
                    .max(d3.max(dataF, d => d['pl_orbper']))
                    .ticks(6)
                    .default([d3.min(dataF, d => d['pl_orbper']), d3.max(dataF, d => d['pl_orbper'])]);
                    range = [d3.min(dataF, d => d['pl_orbper']), d3.max(dataF, d => d['pl_orbper'])];
                    xOffset = -225;
                    units = " (Days)";

                    onOptionClick('pl_orbper', this.value, slider, range, xOffset, units);
                    break;
                case 'Orbit Semi-Major Axis':
                    if (axisD === "x") {
                        d3.selectAll('.svgX g').remove();
                        console.log("okX");
                    }
                    if (axisD === "y") {
                        d3.selectAll('.svgY g').remove();
                        console.log("okY");
                    }
                    slider
                    .min(d3.min(dataF, d => d['pl_orbsmax']))
                    .max(d3.max(dataF, d => d['pl_orbsmax']))
                    .ticks(10)
                    .default([d3.min(dataF, d => d['pl_orbsmax']), d3.max(dataF, d => d['pl_orbsmax'])]);
                    range = [d3.min(dataF, d => d['pl_orbsmax']), d3.max(dataF, d => d['pl_orbsmax'])];
                    xOffset = -270;
                    units = " (AU)";

                    onOptionClick('pl_orbsmax', this.value, slider, range, xOffset, units);
                    break;
                case 'Planet Density':
                    if (axisD === "x") {
                        d3.selectAll('.svgX g').remove();
                        console.log("okX");
                    }
                    if (axisD === "y") {
                        d3.selectAll('.svgY g').remove();
                        console.log("okY");
                    }
                    slider
                    .min(d3.min(dataF, d => d['pl_dens']))
                    .max(d3.max(dataF, d => d['pl_dens']))
                    .ticks(10)
                    .default([d3.min(dataF, d => d['pl_dens']), d3.max(dataF, d => d['pl_dens'])]);
                    range = [d3.min(dataF, d => d['pl_dens']), d3.max(dataF, d => d['pl_dens'])];
                    xOffset = -188;
                    units = " (g/cm^3)";

                    onOptionClick('pl_dens', this.value, slider, range, xOffset, units);
                    break;
                case 'Planet Temperature':
                    if (axisD === "x") {
                        d3.selectAll('.svgX g').remove();
                        console.log("okX");
                    }
                    if (axisD === "y") {
                        d3.selectAll('.svgY g').remove();
                        console.log("okY");
                    }
                    slider
                    .min(d3.min(dataF, d => d['pl_eqt']))
                    .max(d3.max(dataF, d => d['pl_eqt']))
                    .ticks(7)
                    .default([d3.min(dataF, d => d['pl_eqt']), d3.max(dataF, d => d['pl_eqt'])]);
                    range = [d3.min(dataF, d => d['pl_eqt']), d3.max(dataF, d => d['pl_eqt'])];
                    xOffset = -245;
                    units = " (K)";

                    onOptionClick('pl_eqt', this.value, slider, range, xOffset, units);
                    break;
                default:
                    if (axisD === "x") {
                        d3.selectAll('.svgX g').remove();
                        console.log("okX");
                    }
                    if (axisD === "y") {
                        d3.selectAll('.svgY g').remove();
                        console.log("okY");
                    }
                    slider
                    .min(d3.min(dataF, d => d['st_mass']))
                    .max(d3.max(dataF, d => d['st_mass']))
                    .ticks(10)
                    .default([d3.min(dataF, d => d['st_mass']), d3.max(dataF, d => d['st_mass'])]);
                    range = [d3.min(dataF, d => d['st_mass']), d3.max(dataF, d => d['st_mass'])];
                    xOffset = -170;
                    units = " (Solar Mass)";

                    onOptionClick('st_mass', this.value, slider, range, xOffset, units);
            }
        });

        const option = select.selectAll('option').data(options);
        option.enter().append('option').merge(option)
        .attr('value', d => d)
        .property('selected', d => d === selectedOption)
        .text(d => d);
    };

    const colorLegend = (selection, props) => {
      const { colorScale, circleRadius, spacing, textOffset, onLegendChange} = props;

      var contClick = 0;
      var methodsF = [];
      let select = selection.selectAll('select').data([null]);

      const onCLick = function(event, d){
        if(contClick == 0) {
          d3.selectAll('.gLegend')
          .attr('opacity', 0.2);
          d3.select(this)   
          .attr('opacity', 1);
          contClick++;
          methodsF.push(d3.select(this).selectAll('text').text());
          onLegendChange(methodsF);
        }
        else if(methodsF.length === 6) {
          d3.selectAll('.gLegend')
          .attr('opacity', 0.2);
          d3.select(this)   
          .attr('opacity', 1);
          methodsF = [];
          methodsF.push(d3.select(this).selectAll('text').text());
          onLegendChange(methodsF);
         }
        else {
          if ( d3.select(this).attr('opacity') == 1) { 

            d3.select(this)   
            .attr('opacity', 0.2);
            methodsF = methodsF.filter (
               v => v !== d3.select(this).selectAll('text').text()
            );
            onLegendChange(methodsF);
            }
          else {
            d3.select(this)   
          .attr('opacity', 1);
          methodsF.push(d3.select(this).selectAll('text').text());
          onLegendChange(methodsF);
          }
        }
       
     
      };

      const onDBCLick = function(event, d){
        if(d3.selectAll('.gLegend').attr('opacity') == 1) {
          d3.selectAll('.gLegend')
          .attr('opacity', 0.2);
          d3.select(this)   
          .attr('opacity', 1);
          methodsF = [];
         onLegendChange(methodsF);
        }
        else {
          d3.selectAll('.gLegend')
          .attr('opacity', 1);
          methodsF = [];
          onLegendChange(methodsF);
        }
        contClick = 0;
       
      };

      const onMouseover = function(event, d){

        d3.select(this).selectAll('circle')
        .attr("stroke", "white")
        .attr('stroke-width', '2');
      };

      const onMouseout = function(event, d){

        d3.select(this).selectAll('circle')
        .attr("stroke", "none")
        .attr('stroke-width', '2');
        
      };
      select.enter()
      .merge(select)
      .append('text')
      .attr('x', 0)
      .attr('y', 0)
      .attr('fill', 'black')
      .attr('font-family', 'Helvetica Neue, Arial')
      .attr('font-weight', 'bold')
      .attr('font-size', '12px')
      .text('Discovery Method:')
      .style('fill', '#b3aca7');

      const entries = select.enter()
      .merge(select).selectAll('g')
      .data(colorScale.domain())
      .join('g')
      .attr('transform', (d, i) =>
      `translate(0, ${i * spacing + 26})`)
      .attr('class', 'gLegend')
      .on('click', onCLick)
      .on('dblclick', onDBCLick)
      .on('mouseover', onMouseover)
      .on('mouseout', onMouseout);

    entries.append('circle')
      .attr('cx', circleRadius) 
      .attr('r', circleRadius)
      .attr('fill',colorScale);

    entries.append('text')
      .attr('x', textOffset +5) 
      .attr('dy', '0.32em') 
      .attr('fill', 'black')
      .attr('font-family', 'Helvetica Neue, Arial')
      .attr('font-size', '11px')
      .attr('class', 'legendText')
      .style('user-select', 'none') 
      .style('fill', '#a8a09e')
      .text(d => d);
    };

    const scatterPlot = (selection, props) => {

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
            flag,
            dateRange,
            colorScale,
            colorValue,
            data,
            data2
            

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

        yAxisGEnter
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

        xAxisGEnter
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
        .attr('class', 'title');

        titleG.merge(titleGEnter)
        .selectAll('.domain')
        .remove();

        titleGEnter
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
       };

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


        d3.zoom()
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

        // function size (d) {
        //     if(d)
        // }

        if(flag == 0) {
            circles.enter().append('circle')
            .attr('class', 'circleG')
            .attr('cx', innerWidth/2)
            .attr('cy', innerHeight/2)
            .attr('r', 4.5)
            .merge(circles)
            .attr('r', d => d.sizeP)
            .transition().duration(2000)
            .attr('fill', d => colorScale(colorValue(d)))
            .attr('fill-opacity', opacity(dataF))
            .attr('cy', d => yScale(yValue(d)))
            .attr('cx', d => xScale(xValue(d)));
            

        }

        if(flag == 1) {
            circles.enter().append('circle')
            .attr('class', 'circleG')
            .attr('cx', innerWidth/2)
            .attr('cy', innerHeight/2)
            .attr('r', 3)
            .merge(circles)
            .attr('fill', d => colorScale(colorValue(d)))
            .attr('fill-opacity', opacity(dataF))
            .attr('cy', d => yScale(yValue(d)))
            .attr('cx', d => xScale(xValue(d)))
            .attr('r', d => d.sizeP);
        }

            //  var u = d3.selectAll('.circleG')
            //   .data(data2)
        
            // circles.exit()
            //   .transition() // and apply changes to all of them
            //   .duration(2000)
            //   .style("opacity", 0)
            //   .remove()
          

      

            // // Create the u variable
            // var u = d3.selectAll('.circleG')
            //   .data(data2)
          
            // u
            //   .transition() // and apply changes to all of them
            //   .duration(2000)
            //     .attr("cx",  d => xScale(xValue(d)))
            //     .attr("cy", d => yScale(yValue(d)))
            //     .attr('fill', d => colorScale(colorValue(d)))
            //     .attr('fill-opacity', opacity(dataF))
            //     .attr("r", 4.5)

            // u
            // .enter()
            // .append("circle") // Add a new circle for each new elements
            // .merge(u) // get the already existing elements as well
            // .transition() // and apply changes to all of them
            // .duration(1000)
            // .attr("cx",  d => xScale(xValue(d)))
            // .attr("cy", d => yScale(yValue(d)))
            // .attr('fill', d => colorScale(colorValue(d)))
            // .attr('fill-opacity', opacity(dataF))
            // .attr("r", 4.5)
          
            // // If less group in the new dataset, I delete the ones not in use anymore
            // u
            //   .exit()
            //   .transition() // and apply changes to all of them
            //   .duration(2000)
            //   .style("opacity", 0)
            //   .remove()
          
     
        d3.selectAll('.circleG')
        .on('mouseover', tipMouseover)
        .on('mouseout', tipMouseout);

        d3.selectAll('.circleG').exit().remove();
        
        d3.selectAll('#svgM').call(d3.zoom().on("zoom",zoomed));

        circles.exit().remove();

    };

    const svg = d3.select('#svgM');

    const width = document.body.clientWidth;
    const height = document.body.clientHeight - 300;

    svg
    .attr('width', width)
    .attr('height', height);

    let data;
    let xColumn = 'st_mass';
    let xLabelColumn = 'Stellar Mass';
    let yColumn = 'st_teff';
    let yLabelColumn = 'Stellar Temperature';
    const columns = ['Stellar Mass', 'Stellar Temperature', 'Stellar Radius', 'Stellar Luminosity', 'Planetary Mass', 'Planetary Radius', 'Orbital Period', 'Orbit Semi-Major Axis', 'Planet Density', 'Planet Temperature'];
    var methods = [];
    let dateRange = [new Date("1990"), new Date ("2021")]; 
    var xRange = [0, 3];
    var yRange = [2000, 11000];
    var gRangeX;
    var gRangeY;
    var sliderRangeX;
    var sliderRangeY;
    var xOff = -170;
    var yOff = -250;
    var xUnits = " (Solar Mass)";
    var yUnits = " (K)";
    var flag = 0;
    var dataBuffer = [];

    let menusCSS = document.querySelector("#menus");
    menusCSS.style.left = `${(width- width/4 -300)/6}px`;
    menusCSS.style.top = `10px`;

    const onLegendChange = (methodsF) => {
        methods = methodsF;
        flag = 1;
        render();
    };

    const onXColumnClick = (column, label, slider, range, xOffset, units) => {
        xColumn = column;
        xLabelColumn = label;
        xRange = range;
        xOff = xOffset;
        xUnits = units;
        sliderRangeX = slider;
        sliderRangeX.width(450)
        .fill('#2196f3')
        .on('onchange', val => {
        //     sliderRangeX
        //     .min(d3.min(dataF, d => d[xColumn]))
        //     .max(d3.max(dataF, d => d[xColumn]))
        //     .ticks(0)
        //    ;
           // sleep(100);
            xRange = sliderRangeX.value();
            flag = 1;
            render();
        });
        gRangeX = d3
        .select('.svgX')
        .append('g')
        .attr('transform', `translate(${-xOff},10)`);

        // var gRangeXdef = d3
        // .select('div#slider-range')
        // .append('svg')
        // .attr('width', 900)
        // .attr('height', 100)
        // .attr('transform', 'translate(30,10)')
        // .attr('class', 'svgX')
        // .append('g')
        // .attr('transform', 'translate(180,10)');

        gRangeX.call(sliderRangeX)
        .append('text')
        .attr('width', '10px')
        .attr('height', '10px')
        .attr('transform', `translate(${xOff},10)`)
        .text(xLabelColumn + ":");

        flag = 0;

        render();
    };
    const onYColumnClick = (column, label, slider, range, xOffset, units) => {
        yColumn = column;
        yLabelColumn = label;
        yRange = range;
        yOff = xOffset;
        yUnits = units;
        sliderRangeY = slider;
        sliderRangeY
        .width(450)
        .fill('#2196f3')
        .on('onchange', val => {
        //     sliderRangeX
        //     .min(d3.min(dataF, d => d[xColumn]))
        //     .max(d3.max(dataF, d => d[xColumn]))
        //     .ticks(0)
        //    ;
           // sleep(100);
            yRange = sliderRangeY.value();
            flag = 1;
            render();
        });
        gRangeY = d3
        .select('.svgY')
        //.attr('transform', 'translate(700,-100)')
        .append('g')
        .attr('transform', `translate(${-yOff},20)`);

        gRangeY.call(sliderRangeY)
        .append('text')
        .attr('width', '10px')
        .attr('height', '10px')
        .attr('transform', `translate(${yOff},12)`)
        .text(yLabelColumn + ":");

        flag = 0;
        render();
    };

    const colorScale = d3.scaleOrdinal()
      .domain(methods)
      .range(['#f27777',  '#77d3f2',
      '#d577f2','#777ff2',
      '#f2d977', '#77f2bb',
      '#c1eb73', '#eb83c8',
      '#edb861'
     ]);


    //   ["Pulsar Timing", "Radial Velocity", 
    //   "Transit", "Microlensing", 
    //   "Imaging", "Eclipse Timing Variations", 
    //   "Transit Timing Variations", "Orbital Brightness Modulation", 
    //   "Disk Kinematics"]

    // ['#e3c91e', '#FF0000', 
    //   '#60a9e4','#00FF00',
    //   '#8000FF', '#FF00BF',
    //   '#FF8000', '#0000FF',
    //   '#005704']

    //SLIDER 1
    var sliderRangeDate = d3
    .sliderBottom()
    .min(new Date("1990"))
    .max(new Date("2022"))
    .ticks(8)
    .step(1000 * 60 * 60 * 24 * 30)
    .width(700)
    .height(50)
    .tickPadding(3)
    .tickFormat(d3.timeFormat('%Y'))
    .default([new Date("1992"), new Date("2022")])
    .fill('#2196f3')
    .on('onchange', val => {
        dateRange = sliderRangeDate.value();
        flag = 1;
        render();
    });

    var gRange = d3
    .select('div#slider-range')
    .append('svg')
    .attr('width', 5000)
    .attr('height', 100)
    .append('g')
    .attr('transform', `translate(${width/4},8)`);

    gRange.call(sliderRangeDate)
    .append('text')
    .attr('width', '10px')
    .attr('height', '10px')
    .attr('transform', `translate(-90,11)`)
    .text("Years:");

     //END SLIDER 1

    //SLIDER 2
    var sliderRangeXdef = d3
    .sliderBottom()
    .min(0)
    .max(2.6)
    .width(450)
    .height(100)
    .ticks(8)
    .default([0, 2.6])
    .fill('#2196f3')
    .on('onchange', val => {
        //     sliderRangeX
        //     .min(d3.min(dataF, d => d[xColumn]))
        //     .max(d3.max(dataF, d => d[xColumn]))
        //     .ticks(0)
        //    ;
           // sleep(100);
        xRange = sliderRangeXdef.value();
        flag = 1;
        render();
    });

    var gRangeXdef = d3
    .select('div#slider-range')
    .append('svg')
    .attr('width', 900)
    .attr('height', 100)
    .attr('transform', 'translate(20,10)')
    .attr('class', 'svgX')
    .append('g')
    .attr('transform', 'translate(170,10)');

    gRangeXdef.call(sliderRangeXdef);

    gRangeXdef
    .append('text')
    .attr('class', 'text-sliderX')
    .attr('width', '10px')
    .attr('height', '10px')
    .attr('transform', `translate(-170,10)`)
    .text(xLabelColumn + ":");

    //END SLIDER 2

    //SLIDER 3
    var sliderRangeYdef = d3
    .sliderBottom()
    .min(2000)
    .max(11000)
    .width(450)
    .height(100)
    .ticks(6)
    .default([2000, 11000])
    .fill('#2196f3')
    .on('onchange', val => {
        //     sliderRangeX
        //     .min(d3.min(dataF, d => d[xColumn]))
        //     .max(d3.max(dataF, d => d[xColumn]))
        //     .ticks(0)
        //    ;
           // sleep(100);
        yRange = sliderRangeYdef.value();
        flag = 1;
        render();
    });

    var gRangeYdef = d3
    .select('div#slider-range')
    .append('svg')
    .attr('width', 900)
    .attr('height', 100)
    .attr('class', 'svgY')
    .attr('transform', 'translate(-110,0)')
    .append('g')
    .attr('transform', 'translate(270,20)');

    gRangeYdef.call(sliderRangeYdef);

    gRangeYdef
    .append('text')
    .attr('class', 'text-sliderY')
    .attr('width', '10px')
    .attr('height', '10px')
    .attr('transform', `translate(-250,10)`)
    .text(yLabelColumn + ":");
    //END SLIDER 3


    const render = () => {

        // var mainscreenURL = "676.jpg";
        // svg.select(".mainScreen").transition().attr("height",0).remove();

        // svg.append("image")
        // .on('load', function() {
        //     alert('loaded');
        // })
        // .attr("xlink:href", mainscreenURL)
         

        // dataFilter.push({type: xColumn,name: NaN},
        //     {type: yColumn,name: NaN});
        //console.log(methods)
        var dataM = data.filter(
            
            v => methods.includes(v.discoverymethod)
        );

        if(dataM.length == 0) {
            dataM = data;
        }

        // const dataF1 = dataM.filter( v =>
        //         !Number.isNaN(v[yColumn]));
        
        // const dataF2 = dataF1.filter( v =>
        //         !Number.isNaN(v[xColumn]));
        
        const dataFX = dataM.filter(function (v) {
                if (v.disc_pubdate < dateRange[1] && v.disc_pubdate > dateRange[0]) {
                    return v
                }
        });
        console.log(flag);
     
        const dataF = dataFX.filter(function (v) {
            if ((isNaN(v[xColumn]) || isNaN(v[yColumn])) && flag ==0) {
              v.sizeP = 0;
               return v
            }
            else {
                if (v[xColumn] < xRange[1] && v[xColumn] > xRange[0]) {
                    if (v[yColumn] < yRange[1] && v[yColumn] > yRange[0]) {
                        v.sizeP = 0;
                        return v
                    }
                }
                
                if (flag == 0) {return v}
        
             }
        });
        console.log(dataFX);
        

        dataF.filter(function (v) {
            if (isNaN(v[xColumn]) || isNaN(v[yColumn])) {
                return v.sizeP = 0;
            }
            else {return v.sizeP = 4.5}
            }
        );
        console.log(dataF);
       //  console.log(dataBuffer)
        // console.log(dataF[1].pl_name)
        // console.log(dataBuffer[1].pl_name)
        // console.log(dataF[1].pl_name === dataBuffer[1].pl_name)

        // if(dataBuffer.length !== 0) {
        //     if (true) {
         
        //         for(var i = 0, len = dataF.length; i < len; i++){
        //             if (dataBuffer.some(e => e.pl_name === dataF[i].pl_name)) {
                           
        //             }
        //             else { 
        //                 console.log("spl");
        //                 dataF.splice(i,1);
        //                // i = i-1;
        //             }
        
                  
        //         }
        //     }
        //   //  console.log(dataPush)

        //     console.log(dataF)
        // }
        
       

        d3.select('#x_menu')
        .call(dropDown, {
            options: columns,
            onOptionClick: onXColumnClick,
            selectedOption: xLabelColumn,
            axis: "x",
            data: dataF,
           
            }
        ); 

        d3.select('#y_menu')
        .call(dropDown, {
            options: columns,
            onOptionClick: onYColumnClick,
            selectedOption: yLabelColumn,
            axis: "y",
            data: dataF,
          
            }
        ); 
      
       svg.call(scatterPlot, {
            title: `${yLabelColumn}/${xLabelColumn} distribution`,
            xValue: d => d[xColumn],
            xLabel: xLabelColumn,
            xColName: xColumn,
            yValue: d => d[yColumn],
            yLabel: yLabelColumn,
            yColName: yColumn,
            margin: { top:70, right: 80, bottom: 150, left:180},
            width,
            height,
            xUnits,
            yUnits,
            flag,
            dateRange: dateRange,
            colorScale: colorScale,
            colorValue: d => d.discoverymethod,
            data: dataF,
            data2: dataBuffer
       });

       const gLegendEnter = svg.append('g')
       .attr('class', 'legend');

       const gLegend = svg.selectAll('.legend').data([null]);

       gLegendEnter
       .attr('transform', `translate(${ width- width/4 -90},${height/8 + 15 })`)
       .merge(gLegendEnter)
       .call(colorLegend, {
           colorScale,
           circleRadius: 10,
           spacing: 30,
           textOffset: 20,
           onLegendChange: onLegendChange,
       });

       gLegend.exit().remove();

       dataBuffer = dataF;

       flag = 0;

       

    };

    d3.csv('https://raw.githubusercontent.com/Maropro3/DataUpload/main/ExoplanetsConfirmed.csv').then(loadedData => {
       
        loadedData.forEach(clearFunction);

        function clearFunction(i,n) {
            for(var k in i){
                if (i[k] === ""){
                    i[k] = "no";
                }        }
        }
        loadedData.forEach(d => { 

            d.pl_bmasse = +d.pl_bmasse;
            d.pl_rade = +d.pl_rade;
            d.st_mass = +d.st_mass;
            d.st_teff = +d.st_teff;
            d.st_rad = +d.st_rad;
            d.st_lum = +d.st_lum;
            d.pl_orbper = +d.pl_orbper;
            d.pl_orbsmax = +d.pl_orbsmax;
            d.pl_dens = +d.pl_dens;
            d.pl_eqt = +d.pl_eqt;
            d.disc_pubdate = new Date(d.disc_pubdate);
        });
       // console.log(loadedData);

        var nest = d3.nest()
        .key(function(d) { return d.discoverymethod; })
        .entries(loadedData);
        

        var test = [];
        var a = 0;
        for(var i = 0, len=nest.length; i<len; i++){
            
            if(nest[i].key !== "Astrometry" && nest[i].key !== "Eclipse Timing Variations") {
                test[a] = nest[i].key;
               a = a+1;
            }
            
        }

       // console.log(nest)

        methods = test;


        for(var i = 0, len = loadedData.length; i < len-4; i++){

            if (Object.prototype.toString.call(loadedData[i].disc_pubdate) === "[object Date]"){
                if (isNaN(loadedData[i].disc_pubdate.getTime())) {  
                    loadedData.splice(i,1);
                  } 
            }
        }
     

        loadedData.sort(function(a,b){
            return a.disc_pubdate - b.disc_pubdate;
        });


        // dataFilter.push({type: xColumn,name: NaN},
        //     {type: yColumn,name: NaN});
        
        // const dataF1 = loadedData.filter( v =>
        //         !Number.isNaN(v[yColumn]));
        
        // const dataF2 = dataF1.filter( v =>
        //         !Number.isNaN(v[xColumn]));
        
        // const dataF = loadedData.filter(function (v) {
        //         if (v.disc_pubdate < dateRange[1] && v.disc_pubdate > dateRange[0]) {
        //             return v
        //         }
        // });
        //console.log(dataF);
      //  console.log(loadedData);

        data = loadedData;

      render();
      
    });

})));
