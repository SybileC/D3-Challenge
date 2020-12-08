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

    // Parse data
    // importedData.map(function(data) {
    //   abbr = data.abbr;
    //   poverty = +data.poverty;
    //   age = +data.age;
    //   income = +data.income;
    //   healthcare = +data.healthcare;
    //   obesity = +data.obesity;
    //   smokes = +data.smokes;
    // });

    // console.log(smokes);
    // console.log(abbr);

    // var xLinearScale = d3.scaleLinear()
    // .domain(d3.extent(importedData, d => d.poverty))
    // .range([0, chartWidth]);

    // var yLinearScale = d3.scaleLinear()
    // .domain([0, d3.max(importedData, d => d.healthcare)])
    // .range([chartHeight, 0]);

    // var bottomAxis = d3.axisBottom(xLinearScale);
    // var leftAxis = d3.axisLeft(yLinearScale);

    // chartGroup.append("g")
    //   .attr("transform", `translate(0, ${chartHeight})`)
    //   .call(bottomAxis);

    // chartGroup.append("g")
    //   .call(leftAxis);

    // // Step 5: Create Circles
    // // ==============================
    // var circlesGroup = chartGroup.selectAll("circle")
    // .data(importedData)
    // .enter()
    // .append("circle")
    // // .classed("scatter")
    // .attr("cx", d => xLinearScale(d.poverty))
    // .attr("cy", d => yLinearScale(d.healthcare))
    // .attr("r", "15")
    // .attr("fill", "blue")
    // .attr("opacity", ".5");


});