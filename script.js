function init(){
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");

    // Use the list of data features
    (d3.json(("table_2.json"))).then((data) => {
        //console.log(data);
        var features = data.features;
        features.forEach((num) => {
            console.log(num.properties.BedroomAbvGr);

        selector
            .append("option")
            .text(num)
            .property("value", num.properties.BedroomAbvGr);
        })
    })
}

init();
