
var data = [
    {"week": 1, "time": "AM", "date": "8-Feb-13", "month": "M", "name": "Team Rubicon", "category": "core & abs", "donation": 95, "location": "x"},
    {"week": 1, "time": "AM", "date": "15-Feb-13", "month": "M", "name": "Project C.U.R.E.", "category": "core & abs", "donation": 245, "location": "x"},
    {"week": 1, "time": "AM", "date": "22-Feb-13", "month": "M", "name": "Building Tomorrow", "category": "core & abs", "donation": 430, "location": "x"},
    {"week": 1, "time": "AM", "date": "1-Mar-13", "month": "Tu", "name": "P.S. Arts", "category": "stretch & yoga", "donation": 565, "location": "x"},
    {"week": 2, "time": "AM", "date": "8-Mar-13", "month": "Tu", "name": "I Am That Girl", "category": "stretch & yoga", "donation": 590, "location": "x"},
    {"week": 2, "time": "AM", "date": "15-Mar-13", "month": "W", "name": "The Adventure Project", "category": "stretch & yoga", "donation": 610, "location": "x"},
    {"week": 3, "time": "AM", "date": "22-Mar-13", "month": "Th", "name": "Water.org", "category": "stretch & yoga", "donation": 690, "location": "x"},
    {"week": 3, "time": "AM", "date": "29-Mar-13", "month": "Th", "name": "Can Do Multiple Sclerosis", "category": "stretch & yoga", "donation": 725, "location": "x"},
    {"week": 3, "time": "AM", "date": "5-Apr-13", "month": "F", "name": "Bonnie J. Addario Lung Cancer Foundation", "category": "stretch & yoga", "donation": 730, "location": "x"},
    {"week": 3, "time": "AM", "date": "12-Apr-13", "month": "F", "name": "Move For Hunger", "category": "core & abs", "donation": 740, "location": "x"},
    {"week": 3, "time": "Lunch", "date": "19-Apr-13", "month": "Sa", "name": "TUGG Boston Marathon Fundraiser", "category": "legs", "donation": 770, "location": "x"},
    {"week": 3, "time": "Lunch", "date": "26-Apr-13", "month": "Sa", "name": "Injured Marine Semper Fi Fund", "category": "legs", "donation": 810, "location": "x"},
    {"week": 4, "time": "AM", "date": "3-May-13", "month": "Su", "name": "Free Wheelchair Mission", "category": "legs", "donation": 815, "location": "x"},
    {"week": 4, "time": "PM", "date": "10-May-13", "month": "Su", "name": "Citizens For Animal Prevention", "category": "legs", "donation": 830, "location": "x"},
    {"week": 4, "time": "PM", "date": "17-May-13", "month": "Su", "name": "American Foundation for Suicide Prevention", "category": "chest, shoulder & triceps", "donation": 850, "location": "x"},
    {"week": 4, "time": "PM", "date": "24-May-13", "month": "Su", "name": "Team Rubicon - OK Tornado Support", "category": "chest, shoulder & triceps", "donation": 850, "location": "x"},
    {"week": 4, "time": "PM", "date": "31-May-13", "month": "Su", "name": "Matthew 25 Ministries - OK Tornado Relief", "category": "back and biceps", "donation": 865, "location": "x"},
    {"week": 4, "time": "PM", "date": "7-Jun-13", "month": "Su", "name": "Henry Street Settlement", "category": "back and biceps", "donation": 875, "location": "x"},
    {"week": 1, "time": "AM", "date": "8-Feb-13", "month": "M", "name": "Team Rubicon", "category": "core & abs", "donation": 95, "location": "x"},
    {"week": 1, "time": "AM", "date": "15-Feb-13", "month": "M", "name": "Project C.U.R.E.", "category": "core & abs", "donation": 245, "location": "x"},
    {"week": 1, "time": "AM", "date": "22-Feb-13", "month": "M", "name": "Building Tomorrow", "category": "core & abs", "donation": 430, "location": "x"},
    {"week": 1, "time": "AM", "date": "1-Mar-13", "month": "Tu", "name": "P.S. Arts", "category": "stretch & yoga", "donation": 565, "location": "x"},
    {"week": 2, "time": "AM", "date": "8-Mar-13", "month": "Tu", "name": "I Am That Girl", "category": "stretch & yoga", "donation": 590, "location": "x"},
    {"week": 2, "time": "AM", "date": "15-Mar-13", "month": "W", "name": "The Adventure Project", "category": "stretch & yoga", "donation": 610, "location": "x"},
    {"week": 3, "time": "AM", "date": "22-Mar-13", "month": "Th", "name": "Water.org", "category": "stretch & yoga", "donation": 690, "location": "x"},
    {"week": 3, "time": "AM", "date": "29-Mar-13", "month": "Th", "name": "Can Do Multiple Sclerosis", "category": "stretch & yoga", "donation": 725, "location": "x"},
    {"week": 3, "time": "AM", "date": "5-Apr-13", "month": "F", "name": "Bonnie J. Addario Lung Cancer Foundation", "category": "stretch & yoga", "donation": 730, "location": "x"},
    {"week": 3, "time": "AM", "date": "12-Apr-13", "month": "F", "name": "Move For Hunger", "category": "core & abs", "donation": 740, "location": "x"},
    {"week": 3, "time": "Lunch", "date": "19-Apr-13", "month": "Sa", "name": "TUGG Boston Marathon Fundraiser", "category": "legs", "donation": 770, "location": "x"},
    {"week": 3, "time": "Lunch", "date": "26-Apr-13", "month": "Sa", "name": "Injured Marine Semper Fi Fund", "category": "legs", "donation": 810, "location": "x"},
    {"week": 4, "time": "AM", "date": "3-May-13", "month": "Su", "name": "Free Wheelchair Mission", "category": "legs", "donation": 815, "location": "x"},
    {"week": 4, "time": "PM", "date": "10-May-13", "month": "Su", "name": "Citizens For Animal Prevention", "category": "legs", "donation": 830, "location": "x"},
    {"week": 4, "time": "PM", "date": "17-May-13", "month": "Su", "name": "American Foundation for Suicide Prevention", "category": "chest, shoulder & triceps", "donation": 850, "location": "x"},
    {"week": 4, "time": "PM", "date": "24-May-13", "month": "Su", "name": "Team Rubicon - OK Tornado Support", "category": "chest, shoulder & triceps", "donation": 850, "location": "x"},
    {"week": 4, "time": "PM", "date": "31-May-13", "month": "Su", "name": "Matthew 25 Ministries - OK Tornado Relief", "category": "back and biceps", "donation": 865, "location": "x"},
    {"week": 4, "time": "PM", "date": "7-Jun-13", "month": "Su", "name": "Henry Street Settlement", "category": "back and biceps", "donation": 875, "location": "x"},
    {"week": 4, "time": "PM", "date": "14-Jun-13", "month": "Su", "name": "Action Against Hunger", "category": "legs", "donation": 885, "location": "x"}
];

var tip = d3.tip()
    .attr('class', 'd3-tip')
    //.html(function(d) { return 'charity: ' + '<span>' + d.name + '</span>' + '<br>' + '<span>' +'$'+ d.value + '</span>' + ' raised' + '<br>' + d.category })
    //.html(function(d) { return d.name; })
    .html(function(d) { return d.category })
    .offset([-12, 0]);

var buttonAll = d3.select("#buttons")
    .append("input")
    //.attr("class", "btn btn-large btn-block btn-primary")
    .attr("class", "btn btn-xs btn-info")
    .attr("id", "button_all")
    .attr("type","button")
    .attr("value", "All workouts");

var buttonWeekly = d3.select("#buttons")
    .append("input")
    .attr("class", "btn btn-default btn-xs")
    .attr("id", "button_weekly")
    .attr("type","button")
    .attr("value", "Days");

var buttonCategory = d3.select("#buttons")
    .append("input")
    .attr("class", "btn btn-xs")
    .attr("id", "button_category")
    .attr("type","button")
    .attr("value", "Category of Workouts");

var width = 1000,
	height = 600,
	layout_gravity = -0.01,
	damper = 0.1,
	nodes = [],
	vis, force, circles, radius_scale;

var center = {x: width / 2, y: height / 2};

var center_all = {x: 450, y: 250};

var month_centers = {
    "M": {x: 200, y: 175},
    "Tu": {x: 450, y: 175},
    "W": {x: 700, y: 175},
    "Th": {x: 325, y: 400},
    "F": {x: 575, y: 400},
    "Sa": {x: 200, y: 475},
    "Su": {x: 325, y: 200}
    //"31": {x: width - 160, y: 400}
};

var category_centers = {
    "animals": {x: 180, y: 175},
    "children": {x: 360, y: 175},
    "disaster relief": {x: 540, y: 175},
    "education": {x: 720, y: 175},
    "health_wellness": {x: 180, y: 400},
    "human rights": {x: 360, y: 400},
    "hunger_water": {x: 540, y: 400},
    "womens issues": {x: 720, y: 400}
};

var category_centers = {
    "core & abs": {x: 180, y: 175},
    "stretch & yoga": {x: 360, y: 175},
    "chest, shoulder & triceps": {x: 540, y: 175},
    "back and biceps": {x: 720, y: 175},
    "legs": {x: 180, y: 400}
};

var fill_color = d3.scale.ordinal()
	.domain(["core & abs", "stretch & yoga", "chest, shoulder & triceps", "back and biceps", "legs"])
	.range(["#d71028","#FAD640", "black", "white", "steelblue",]);

//var max_amount = d3.max(data, function(d) {return parseInt(d.donation, 10); });
var max_amount = d3.max(data, function(d) {return d.donation;});

//var radius_scale = d3.scale.pow().exponent(0.5)
var radius_scale = d3.scale.linear()
	.domain([0, max_amount])
	.range([2, 25]);

data.forEach(function(d) {
	node = {
		id: d.week,
        date: d.date,
		//radius: radius_scale(parseInt(d.donation, 10)),
        radius: 5,
        value: d.donation,
		name: d.name,
		//group: d.group,
		//year: d.start_year,
		x: Math.random() * 900,
		y: Math.random() * 800,
        //meetup: d.event_id,
        month: d.month,
        category: d.category
	};
	nodes.push(node);
});

nodes.sort(function(a,b) {return b.value - a.value; });

vis = d3.select("#vis").append("svg")
    .attr('width', width)
    .attr('height', height)
    .attr('id', 'svg_vis');

var pone = vis.call(tip);

circles = vis.selectAll('circle')
	.data(nodes, function(d) {return d.id; });

circles.enter()
	.append('circle')
	.attr('r', function(d) {return d.radius})
	.attr('fill', function(d) {return fill_color(d.category); })
	.attr('stroke-width', 2)
	.attr('stroke', function(d) {return d3.rgb(fill_color(d.category)).darker(); });

//circles.on("mouseover", myMouseOverFunction)

/*
circles.on("mouseover", function(d) {
    var circle = d3.select(this);
        //circle.attr("stroke", "red");
        if (d.id == 1) {
            return circle.attr("stroke", "red")}
         //   else {return "yellow"}
})
    .on("mouseout", myMouseOutFunction);
*/

function charge(d) {
	return -Math.pow(d.radius * 4, 2.0) / 60;
    //return -Math.pow(50, 2.0) / 60;
}

force = d3.layout.force()
	.nodes(nodes)
	.size([width, height]);

circles.call(force.drag);

force.gravity(-0.01)
	.charge(charge)
	.friction(0.9)
	.on('tick', function(e) {
			force.nodes().forEach(function(d) {
                //var target = center
                var target = month_centers[d.month]
				d.x = d.x + (target.x - d.x) * (damper + 0.02) * e.alpha;
				d.y = d.y + (target.y - d.y) * (damper + 0.02) * e.alpha;
			})
			vis.selectAll('circle')
				.attr('cx', function(d) {return d.x;})
				.attr('cy', function(d) {return d.y;});
	});

//column labeling
var meetups_x = {"M": 200 - 50, "Tu": 450, "W": 700 + 50, "Th": 325 - 27.5, "F": 575 + 27.5};
var meetups_y = {"M": 50, "Tu": 50, "W": 50, "Th": 325, "F": 325};
var meetups_x_data = d3.keys(meetups_x)
//var meetups_y_data = d3.keys(meetups_y)
var columnlabels = vis.selectAll("body")
    .data(meetups_x_data);

columnlabels.enter().append("text")
    .attr("class", "years")
    .attr("x", function(d) { return meetups_x[d]; })
    .attr("y", function(d) { return meetups_y[d]; })
    .attr("text-anchor", "middle")
    .text(function(d) { return d; });

//start
force.start();

//first button, show all weeks together
buttonAll
    .on("click", function() {
        force//.gravity(-0.01)
        //.charge(charge)
        //.friction(0.9)
        .on('tick', function(e) {
                force.nodes().forEach(function(d) {
                    var target = center_all
                    //var target = meetup_centers[d.meetup]
                    d.x = d.x + (target.x - d.x) * (damper + 0.02) * e.alpha;
                    d.y = d.y + (target.y - d.y) * (damper + 0.02) * e.alpha;
                })
                vis.selectAll('circle')
                    .attr('cx', function(d) {return d.x;})
                    .attr('cy', function(d) {return d.y;});
        });

        //hide years
        vis.selectAll(".years").remove();
        //vis.selectAll(".years").transition().duration(1000).remove();
        //hide rows
        vis.selectAll(".rows").remove();

        //labels
        var meetups_x = {"All Workouts": width / 2 - 60};
        var meetups_y = {"All Workouts": 50};
        var meetups_x_data = d3.keys(meetups_x)
        //var meetups_y_data = d3.keys(meetups_y)
        var columnlabels = vis.selectAll("body")
            .data(meetups_x_data);

        columnlabels.enter().append("text")
            .attr("class", "years")
            .attr("x", function(d) { return meetups_x[d]; })
            .attr("y", function(d) { return meetups_y[d]; })
            .attr("text-anchor", "middle")
            .text(function(d) { return d; });

        //start
        force.start();
    })

//second button, break up by week
buttonWeekly
    .on("click", function() {
        force//.gravity(-0.01)
        //.charge(charge)
        //.friction(0.9)
        .on('tick', function(e) {
            force.nodes().forEach(function(d) {
                //var target = center
                var target = month_centers[d.month]
                d.x = d.x + (target.x - d.x) * (damper + 0.02) * e.alpha;
                d.y = d.y + (target.y - d.y) * (damper + 0.02) * e.alpha;
            })
            vis.selectAll('circle')
                .attr('cx', function(d) {return d.x;})
                .attr('cy', function(d) {return d.y;});
    });

        //hide years
        vis.selectAll(".years").remove();
        //vis.selectAll(".years").transition().duration(1000).remove();
        //hide rows
        vis.selectAll(".rows").remove();

        //column labeling
        var meetups_x = {"M": 200 - 50, "Tu": 450, "W": 700 + 50, "Th": 325 - 27.5, "F": 575 + 27.5};
        var meetups_y = {"M": 50, "Tu": 50, "W": 50, "Th": 325, "F": 325};
        var meetups_x_data = d3.keys(meetups_x)
        //var meetups_y_data = d3.keys(meetups_y)
        var columnlabels = vis.selectAll("body")
            .data(meetups_x_data);

        columnlabels.enter().append("text")
            .attr("class", "years")
            .attr("x", function(d) { return meetups_x[d]; })
            .attr("y", function(d) { return meetups_y[d]; })
            .attr("text-anchor", "middle")
            .text(function(d) { return d; });
        //start
        force.start();
    }) //end of buttonWeekly

//third button, break up by category
buttonCategory
    .on("click", function() {
        force//.gravity(-0.01)
        //.charge(charge)
        //.friction(0.9)
        .on('tick', function(e) {
            force.nodes().forEach(function(d) {
                //var target = center
                var target = category_centers[d.category]
                d.x = d.x + (target.x - d.x) * (damper + 0.02) * e.alpha;
                d.y = d.y + (target.y - d.y) * (damper + 0.02) * e.alpha;
            })
            vis.selectAll('circle')
                .attr('cx', function(d) {return d.x;})
                .attr('cy', function(d) {return d.y;});
    });

        //hide years
        vis.selectAll(".years").remove();
        //vis.selectAll(".years").transition().duration(1000).remove();
        //hide rows
        vis.selectAll(".rows").remove();

        //column labeling
        var meetups_x = {"core & abs": 180 - 55, 
                        "stretch & yoga": 360 - 30, 
                        "chest, shoulder & triceps": 540 + 10, 
                        "back and biceps": 720 + 55, 
                        "legs": 180 - 55};

        var meetups_y = {"core & abs": 50, 
                        "stretch & yoga": 50, 
                        "chest, shoulder & triceps": 50, 
                        "back and biceps": 50, 
                        "legs": 325};


        var meetups_x_data = d3.keys(meetups_x)
        //var meetups_y_data = d3.keys(meetups_y)
        var columnlabels = vis.selectAll("body")
            .data(meetups_x_data);

        columnlabels.enter().append("text")
            .attr("class", "years")
            .attr("x", function(d) { return meetups_x[d]; })
            .attr("y", function(d) { return meetups_y[d]; })
            .attr("text-anchor", "middle")
            .text(function(d) { return d; });
        //start
        force.start();
    }) //end of buttonWeekly

//initialize tooltips
circles.on('mouseover', tip.show);
circles.on('mouseout', tip.hide);