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
      console.log(abbr);
      console.log("income")   
      var poverty = importedData.map(d => d.poverty);
      console.log("poverty")
      console.log(poverty);
      var age = importedData.map(d => d.age);
      console.log(age);
      var income = importedData.map(d => d.income);
      console.log(income);
      var healthcare = importedData.map(d => d.healthcare);
      console.log("healthcare")
      console.log(healthcare);
      var obesity = importedData.map(d => d.obesity);
      console.log(obesity);
      var smokes = importedData.map(d => d.smokes);
      console.log(smokes);

    importedData.forEach(function(data) {
      data.income = +data.income;
      data.healthcare = +data.healthcare;
      data.poverty = +data.poverty;
    });


    var xLinearScale = d3.scaleLinear()
    .domain([5, d3.max(importedData, d => d.poverty + 2)])
    // .domain([0, d3.max(importedData, d => d.healthcare)])
    .range([0, chartWidth]);

    var yLinearScale = d3.scaleLinear()
    // .domain([0, 33])
    .domain([0, d3.max(importedData, d => d.healthcare + 2)])
    // .domain(d3.extent(importedData, d => d.healthcare))
    .range([chartHeight, 0]);
    // .range([0, chartHeight]);
    // .range([chartHeight - chartMargin.bottom, chartMargin.top]

    // console.log(d3.max(d.healthcare));
    
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
    .attr("cx", d => xLinearScale(d.poverty))
    .attr("cy", d => yLinearScale(d.healthcare))
    .attr("r", "15")
    .attr("fill", "green")
    .attr("opacity", ".5");
    // .text(function(d) {return d.abbr});

    chartGroup.selectAll("#circleText")
    .data(importedData)
    .enter()
    .append("text")
    .attr("dx", d => xLinearScale(d.poverty) - 12)
    .attr("dy", d => yLinearScale(d.healthcare) + 5)
    .attr("stroke", "white")
    .text(d => d.abbr);

    // Create axes labels
    // chartGroup.append("text")
    //   .attr("transform", "rotate(-90)")
    //   .attr("dy", 700)
    //   .attr("dx", 700)
    //   // .attr("dy", "1em")
    //   .attr("class", "axisText")
    //   .text("Lacks Healthcare");

    // chartGroup.append("text")
    //   .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
    //   // .attr("class", "axisText")
    //   .text("In Poverty");

    chartGroup.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left + 40)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .attr("class", "axisText")
      .text("In Poverty");


  }).catch(function(error) {
    console.log(error);

});