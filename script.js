function init(){
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
    // Use the list of data features
    (d3.json("table_2.json")).then((data) => {
        console.log(data);
        var listfeatures = data.features;
        console.log(listfeatures);

        var listfeatures = listfeatures.forEach((num) =>
        {
            return num.BedroomAbvGr !== undefined;
        });
        console.log(listfeatures);
/*
        features.forEach((num) => {
            console.log(num.properties.BedroomAbvGr);

        selector
            .append("option")
            .text(num)
            .property("value", num.properties.BedroomAbvGr);
        })*/

        // Use the first sample from the list to build the initial plots
    /*var firstFeature = features[0];
    //buildCharts(firstFeature);
    console.log((firstFeature.BedroomAbvGr));
    buildMetadata(firstFeature);
    })
}

init();


// Demographics Panel 
function buildMetadata(sample) {
    d3.json("table_2.json").then((data) => {
    var features = data.features;
    console.log(features);
    // Filter the data for the object with the desired sample number
    var resultArray = features.filter(featuresObj => featuresObj == sample);
    var result = resultArray[0];

    console.log(result);
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#info");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    console.log(result);
    //PANEL.append("h6").text(result.properties);
      
  
    });
  }

