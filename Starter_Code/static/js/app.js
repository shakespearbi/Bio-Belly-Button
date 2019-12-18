function buildBar(){
    d3.json("samples.json").then(function(data){
        console.log(data);
        var sampleVal = data.samples.sample_values;
        var otu_ids = data.samples.otu_ids;
        var otu_labels = data.samples.otu_labels;

        //top 10 otu
        var top10Sample = sampleVal.slice(0,10);
        var top10outIDs = otu_ids.slice(0,10);
        var top10otuLabels = otu_labels.slice(0,10);

        
        var trace = {
            type: "bar",
            x: otu_ids,
            y: top10Sample,
            text: otu_labels,
            ortientation: 'h'    
        };

        var dt = [trace];
        var layout = {
            title: "Horizontal Bar Graph",
            xaxis: {title: "Hello"},
            yaxis: {title: "Bye"}
        };

        Plotly.newPlot("bar", dt, layout);
    })
}

function buildBubble(){

}
function Init(){
}
// call this in init() buildBar();

