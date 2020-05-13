var results = [{
    projecttype: "Organic",
    a: 2.4,
    b: 1.05,
    c: 2.5,
    d: 0.38,
    effort: 0,
    duration: 0,
    staffing: 0
}, {
    projecttype: "Semi Detached",
    a: 3.0,
    b: 1.12,
    c: 2.5,
    d: 0.35,
    effort: 0,
    duration: 0,
    staffing: 0
}, {
    projecttype: "Embedded",
    a: 3.6,
    b: 1.2,
    c: 2.5,
    d: 0.32,
    effort: 0,
    duration: 0,
    staffing: 0
}];

function validateInput(input) {
    if (input.length == 0) {
        console.log("No input")
        return false;
    } else {
        console.log("OK")
        return true;
    }
}

function generate_table() {
    var klocref = document.getElementById("kloc")
    var kloc = klocref.value
    if (validateInput(kloc)) {
        $('p').remove()
        /**
         * Organic calculation -> index 0
         * Semi -> index 1
         * Embedded -> index 2
         */
        for (let i = 0; i < results.length; i++) {
            var org_effort = results[i].a * (kloc ** results[i].b)
            var org_duration = results[i].c * (org_effort ** results[i].d)
            var staffing = org_effort / org_duration

            results[i].effort = org_effort.toFixed(2)
            results[i].duration = org_duration.toFixed(2)
            results[i].staffing = staffing.toFixed(0)
        }

        // get the reference for the body
        var body = document.getElementById("results");
        // clear element to be empty
        body.innerHTML = ""

        // creates a <table> element and a <tbody> element
        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");
        var row = document.createElement("tr");
        var cell = document.createElement("th");
        var cellText = document.createTextNode("Software Projects")
        cell.appendChild(cellText)
        row.appendChild(cell)

        var cell = document.createElement("th");
        var cellText = document.createTextNode("A")
        cell.appendChild(cellText)
        row.appendChild(cell)


        var cell = document.createElement("th");
        var cellText = document.createTextNode("B")
        cell.appendChild(cellText)
        row.appendChild(cell)

        var cell = document.createElement("th");
        var cellText = document.createTextNode("C")
        cell.appendChild(cellText)
        row.appendChild(cell)

        var cell = document.createElement("th");
        var cellText = document.createTextNode("D")
        cell.appendChild(cellText)
        row.appendChild(cell)


        var cell = document.createElement("th");
        var cellText = document.createTextNode("Effort(person-month)")
        cell.appendChild(cellText)
        row.appendChild(cell)

        var cell = document.createElement("th");
        var cellText = document.createTextNode("Duration(months)")
        cell.appendChild(cellText)
        row.appendChild(cell)

        var cell = document.createElement("th");
        var cellText = document.createTextNode("Staffing")
        cell.appendChild(cellText)
        row.appendChild(cell)
        tblBody.appendChild(row);


        // creating all table cells
        for (var i = 0; i < 3; i++) {
            // creates a table row
            var row = document.createElement("tr");
            for (var prop in results[i]) {
                // Create a <td> element and a text node, make the text
                // node the contents of the <td>, and put the <td> at
                // the end of the table row
                var cell = document.createElement("td");
                var cellText = document.createTextNode(results[i][prop]);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }

            // add the row to the end of the table body
            tblBody.appendChild(row);
        }

        // put the <tbody> in the <table>
        tbl.appendChild(tblBody);
        // appends <table> into <body>
        body.appendChild(tbl);
        // sets the border attribute of tbl to 2;
        tbl.classList = "table table-bordered table-striped"
    }
    else {        
        $('p').remove()
        $('#errormessage').append('<p>Error -> Please type number</p>')
        $('#errormessage').css('color', 'red')
        $('#results').find('table').remove();
    }

}