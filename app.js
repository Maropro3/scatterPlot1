import {dropDown} from './dropDown'
import {scatterPlot} from './scatterPlotComp'
import {colorLegend} from './colorLegend'
  
const svg = d3.select('#svgM');
const gpu = new GPU();

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
let dataFilter = [];
var xRange = [0, 2.5];
var yRange = [2000, 11000];
var gRangeX;
var gRangeY;
var sliderRangeX;
var sliderRangeY;
var xOff = -170;
var yOff = -250;
var xUnits = " (Solar Mass)"
var yUnits = " (K)"
var contD = 0;

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

let menusCSS = document.querySelector("#menus");
menusCSS.style.left = `${(width- width/4 -300)/6}px`;
menusCSS.style.top = `10px`;

const onLegendChange = (methodsF) => {
    methods = methodsF;
    render();
}

const onXColumnClick = (column, label, slider, range, xOffset, units) => {
    xColumn = column;
    xLabelColumn = label;
    xRange = range;
    xOff = xOffset;
    xUnits = units
    sliderRangeX = slider;
    sliderRangeX .width(450)
    .fill('#2196f3')
    .on('onchange', val => {
    //     sliderRangeX
    //     .min(d3.min(dataF, d => d[xColumn]))
    //     .max(d3.max(dataF, d => d[xColumn]))
    //     .ticks(0)
    //    ;
       // sleep(100);
        xRange = sliderRangeX.value();
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

    render();
};
const onYColumnClick = (column, label, slider, range, xOffset, units) => {
    yColumn = column;
    yLabelColumn = label;
    yRange = range;
    yOff = xOffset;
    yUnits = units;
    sliderRangeY = slider;
    sliderRangeY .width(450)
    .fill('#2196f3')
    .on('onchange', val => {
    //     sliderRangeX
    //     .min(d3.min(dataF, d => d[xColumn]))
    //     .max(d3.max(dataF, d => d[xColumn]))
    //     .ticks(0)
    //    ;
       // sleep(100);
        yRange = sliderRangeY.value();
        render();
    });
    gRangeY = d3
    .select('.svgY')
    //.attr('transform', 'translate(700,-100)')
    .append('g')
    .attr('transform', `translate(${-yOff},20)`)

    gRangeY.call(sliderRangeY)
    .append('text')
    .attr('width', '10px')
    .attr('height', '10px')
    .attr('transform', `translate(${yOff},12)`)
    .text(yLabelColumn + ":");
    render();
}

const colorScale = d3.scaleOrdinal()
  .domain(methods)
  .range(['#f27777',  '#d577f2',
  '#77d3f2','#777ff2',
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
.step(1000 * 60 * 60 * 24 * 30)
.width(700)
.height(50)
.tickPadding(3)
.tickFormat(d3.timeFormat('%Y'))
.ticks(12)
.default([new Date("1992"), new Date("2022")])
.fill('#2196f3')
.on('onchange', val => {
    dateRange = sliderRangeDate.value();
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
.ticks(10)
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
.ticks(10)
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
.attr('transform', 'translate(270,20)')

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

    dataFilter.push({type: xColumn,name: NaN},
        {type: yColumn,name: NaN});

    var dataM = data.filter(
        
        v => methods.includes(v.discoverymethod)
    );

    if(dataM.length == 0) {
        dataM = data;
    }

    const dataF1 = dataM.filter( v =>
            !Number.isNaN(v[yColumn]));
    
    const dataF2 = dataF1.filter( v =>
            !Number.isNaN(v[xColumn]));
    
    const dataFX = dataF2.filter(function (v) {
            if (v.disc_pubdate < dateRange[1] && v.disc_pubdate > dateRange[0]) {
                return v
            }
    });
    const dataF = dataFX.filter(function (v) {
        if (v[xColumn] < xRange[1] && v[xColumn] > xRange[0]) {
            if (v[yColumn] < yRange[1] && v[yColumn] > yRange[0]) {
                return v
            }
        }
    });

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
        dateRange: dateRange,
        colorScale: colorScale,
        colorValue: d => d.discoverymethod,
        data: dataF
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

   console.log(dataF)

};

d3.csv('https://raw.githubusercontent.com/Maropro3/DataUpload/main/ExoplanetsTestFULL.csv').then(loadedData => {
   
    loadedData.forEach(clearFunction);

    function clearFunction(i,n) {
        for(var k in i){
            if (i[k] === ""){
                i[k] = "no";
            };
        }
    };

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
    console.log(loadedData);

    var nest = d3.nest()
    .key(function(d) { return d.discoverymethod; })
    .entries(loadedData);
    

    var test = []
    var a = 0;
    for(var i = 0, len=nest.length; i<len; i++){
        
        if(nest[i].key !== "Astrometry" && nest[i].key !== "Eclipse Timing Variations") {
            test[a] = nest[i].key;
           a = a+1;
        }
        
    }

    methods = test;

    console.log(test)

    for(var i = 0, len = loadedData.length; i < len-4; i++){

        if (Object.prototype.toString.call(loadedData[i].disc_pubdate) === "[object Date]"){
            if (isNaN(loadedData[i].disc_pubdate.getTime())) {  
                loadedData.splice(i,1);
              } 
        }
    }

    loadedData.sort(function(a,b){
        return a.disc_pubdate - b.disc_pubdate;
    })


    dataFilter.push({type: xColumn,name: NaN},
        {type: yColumn,name: NaN});
    
    const dataF1 = loadedData.filter( v =>
            !Number.isNaN(v[yColumn]));
    
    const dataF2 = dataF1.filter( v =>
            !Number.isNaN(v[xColumn]));
    
    const dataF = dataF2.filter(function (v) {
            if (v.disc_pubdate < dateRange[1] && v.disc_pubdate > dateRange[0]) {
                return v
            }
    });

    data = dataF;

  render();
  
});


