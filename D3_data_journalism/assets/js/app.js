// @TODO: YOUR CODE HERE!

// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 660;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select scatter id, append SVG area to it, and set the dimensions
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// to the margins set in the "chartMargin" object.
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);


// Load data from data.csv
d3.csv("assets/data/data.csv").then(function(importedData) {
      console.log(importedData);
      
      // Parse data
      var abbr = importedData.map(d => d.abbr);
      console.log("this is abbr");
      console.log(abbr);
      var poverty = importedData.map(d => d.poverty);
      console.log("this is poverty");
      console.log(poverty);
      var age = importedData.map(d => d.age);
      console.log("this is age");
      console.log(age);
      var income = importedData.map(d => d.income);
      console.log("this is income");
      console.log(income);
      var healthcare = importedData.map(d => d.healthcare);
      console.log("this is healthcare");
      console.log(healthcare);
      var obesity = importedData.map(d => d.obesity);
      console.log("this is obesity");
      console.log(obesity);
      var smokes = importedData.map(d => d.smokes);
      console.log("this is smokes");
      console.log(smokes);


    var xLinearScale = d3.scaleLinear()
    .domain(d3.extent(importedData, d => d.income))
    // .domain([0, d3.max(importedData, d => d.healthcare)])
    .range([0, chartWidth]);

    var yLinearScale = d3.scaleLinear()
    .domain([0, d3.max(importedData, d => d.healthcare)])
    // .domain(d3.extent(importedData, d => d.healthcare))
    .range([chartHeight, 0]);
    // .range([0, chartHeight]);

    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    chartGroup.append("g")
      .attr("transform", `translate(0, ${chartHeight})`)
      .call(bottomAxis);

    chartGroup.append("g")
      .call(leftAxis);

    // Create circles
    var circlesGroup = chartGroup.selectAll("#scatter")
    .data(importedData)
    .enter()
    .append("circle")
    .classed("scatter", true)
    .attr("cx", d => xLinearScale(d.income))
    .attr("cy", d => yLinearScale(d.healthcare))
    .attr("r", "15")
    .attr("fill", "blue")
    .attr("opacity", ".5")
    .text(d => d.abbr);

    // chartGroup.append("text")
    // .attr("dx", function(d){return -20})
    // .text(function(d){return d.abbr})

});