google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
	// chart 1920
	var w=document.body.clientWidth/1.2;
	var h= document.documentElement.clientHeight/1.8;

	var data1920 = google.visualization.arrayToDataTable([
		['branch', 'Students'],
		['CDS'	, 3],
		['CED'	, 39],
		['COE'	, 54],
		['EDM'	, 25],
		['EDS'	, 3],
		['ESD'	, 8],
		['EVD'	, 13],
		['MDM'	, 4],
		['MDS'	, 1],
		['MFD'	, 4],
		['MPD'	, 4],
		['MSM'	, 19],
		['SMT'	, 5],
	].sort(function(a,b){
		return b[1]-a[1];
	}));
	var chart1920 = new google.visualization.PieChart(document.getElementById('chart1920'));
	chart1920.draw(data1920,{
		title : "Total : 182 students",
		width: w,
		height: h,
		// is3D: true,
		pieHole: 0.5,
		legend : {position: 'right',alignment:'center'}
	});

	// chart 1819
	var data1819 = google.visualization.arrayToDataTable([
		['branch', 'Students'],
		['COE',	35],
		['CED',	27],
		['EDM',	18],
		['MDM',	14],
		['MDS',	6],
		['ESD',	7],
		['EVD',	7],
		['EDS',	2],
		['MFD',	2],
		['MPD',	3],
		['CDS',	3],
		['SMT',	1]
	].sort(function(a,b){
		return b[1]-a[1];
	}));
	var chart1819 = new google.visualization.PieChart(document.getElementById("chart1819"));
	chart1819.draw(data1819,{
		title: "Total Student Placed :-152",
		width: w,
		height: h,
		// is3D: true,
		pieHole: 0.5,
		// title : "Total : 136 students",
		legend : {position: 'right',alignment:'center'}
		});
		
	// chart 1718
	var data1718 = google.visualization.arrayToDataTable([
		['branch', 'Students'],
		['COE', 33],
		['EDM', 11],
		['MDM', 13],
		['CDS', 2],
		['EDS', 6],
		['MDS', 9],
		['PhD' ,1]
	].sort(function(a,b){
		return b[1]-a[1];
	}));
	var chart1718 = new google.visualization.PieChart(document.getElementById("chart1718"));
	chart1718.draw(data1718,{
		title: "Total Student Placed :- 68",
		width: w,
		height: h,
		// is3D: true,
		pieHole: 0.5,
		// title : "Total : 136 students",
		legend : {position: 'right',alignment:'center'}
	});

	// // chart 1617
	// var data1617 = google.visualization.arrayToDataTable([
	// 	['branch', 'Students'],
	// 	['COE', 27],
	// 	['EDM', 32],
	// 	['MDM', 18],
	// 	['CDS', 3],
	// 	['EDS', 4],
	// 	['MDS', 4],
	// 	['PhD' ,2]
	// ].sort(function(a,b){
	// 	return b[1]-a[1];
	// }));
	// var chart1617 = new google.visualization.PieChart(document.getElementById("chart1617"));
	// chart1617.draw(data1617,{
	// 	title: "Total Student Placed :-90",
	// 	width: w,
	// 	height: h,
	// 	// is3D: true,
	// 	pieHole: 0.5,
	// 	// title : "Total : 136 students",
	// 	legend : {position: 'right',alignment:'center'}
	// });

	// // chart 1516
	// var data1516 = google.visualization.arrayToDataTable([
	// 	['branch', 'Students'],
	// 	['COE', 33 ],
	// 	['EDM', 17 ],
	// 	['MDM', 11 ],
	// 	['CDS', 6 ],
	// 	['EDS', 11 ],
	// 	['MDS', 8 ]
	// ].sort(function(a,b){
	// 	return b[1]-a[1];
	// }));
	// var chart1516 = new google.visualization.PieChart(document.getElementById("chart1516"));
	// chart1516.draw(data1516,{
	// 	title: "Total Student Placed :-86",
	// 	width: w,
	// 	height: h,
	// 	// is3D: true,
	// 	pieHole: 0.5,
	// 	// title : "Total : 136 students",
	// 	legend : {position: 'right',alignment:'center'}
	// });
}