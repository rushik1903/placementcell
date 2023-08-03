// select first column of my table
let table = document.getElementById("myTable");
let tables = document.getElementsByTagName("table");
$("table tr td:nth-child(1)").each(function () {
  // add right border to the first column
  $(this).css("border-right", "2px solid #fff");
});
// select all row with class my-th expect last
$("table .my-th th:not(:last)").each(function () {
  // add right border to the first column
  $(this).css("border-right", "2px solid #fff");
});
$("table tr td").each(function () {
  // add bottom border
  $(this).css("border-bottom", "2px solid #fff");
  // add bg color
});

// google chart
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
// pie chart
function drawChart() {
	  var data = google.visualization.arrayToDataTable([
	["Branch", "offers"],
	["CSE",88],
	["ECE", 46],
	["ME", 36],
	["MSM", 18],
  ]);

  var options = {
	title: "No. of offers branch-wise",
	  backgroundColor: "transparent",
	  width: 500,
	  height: 300,
  };

  var chart = new google.visualization.PieChart(
	document.getElementById("branch-wise")
  );
  chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawMyChart);
// pie chart
function drawMyChart() {
	  var data = google.visualization.arrayToDataTable([
	["Course", "offers"],
	["B.Tech", 100],
	["Dual Degree", 74],
	["M.Tech", 15],
  ]);

  var options = {
	title: "No. of offers branch-wise",
	  backgroundColor: "transparent",
	  width: 500,
	  height: 300,
  };

  var chart = new google.visualization.PieChart(
	document.getElementById("degree-wise")
  );
  chart.draw(data, options);
}
