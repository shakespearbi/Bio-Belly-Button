function buildBar(sampleID){
    d3.json("samples.json").then(function(data){
        console.log(data);
        var sample = data.samples;

        var resultArr = sample.filter(sampleObj => sampleObj.id == sampleID);
        var result = resultArr[0];
        //top 10 otu

        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;

        var top10Sample = sample_values.slice(0,10).reverse();
        var top10outIDs = otu_ids.slice(0,10);
        var top10otuLabels = otu_labels.slice(0,10).reverse();

        var yticks = top10outIDs.map(otuID => `OTU ${otuID}`).reverse();

        var trace = {
            type: "bar",
            x: top10Sample,
            y: yticks,
            text: top10otuLabels,
            orientation: 'h'    
        };

        var dt = [trace];
        var layout = {
            title: "Top 10 Bacteria Cultures Found",
            margin: {t:30, l:150},
        };

        Plotly.newPlot("bar", dt, layout);
    })
}

function buildBubble(sampleID){
    d3.json("samples.json").then(function(data){
        var sample = data.samples;

        var resultArr = sample.filter(sampleObj => sampleObj.id == sampleID);
        var result = resultArr[0];
        //top 10 otu

        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;
 
        var trace1 = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: 'markers',
            marker: {
              color: otu_ids,
              size: sample_values
            }
          };
          
          var dt = [trace1];
          
          var layout = {
            title: 'Bubble Chart of Sample Values',
            showlegend: false,
            xaxis: { title: "OTU ID"}
          };
          
          Plotly.newPlot('bubble', dt, layout);
    })
}

function buildMeta(sampleID){
    d3.json("samples.json").then(function(data){
        var meta = data.metadata;

        var resultArr = meta.filter(MetaObj => MetaObj.id == sampleID);
        var result = resultArr[0];

        var selector = d3.select("#sample-metadata");

        // remove any children from the list to
        selector.html("");

        //cleaner solution
        Object.entries(result).forEach(([key,value]) => {
            selector.append("h6").text(`${key}: ${value}`);
        });

        //alternative         
        // var id = result.id;
        // var ethnicity = result.ethnicity;
        // var gender = result.gender;
        // var age = result.age;
        // var location = result.location;
        // var bbtype = result.bbtype;
        // var wfreq = result.wfreq;

        // append stats to the list
        // selector.append("li").text(`id: ${id}`);
        // selector.append("li").text(`ethnicity: ${ethnicity}`);
        // selector.append("li").text(`gender: ${gender}`);
        // selector.append("li").text(`age: ${age}`);
        // selector.append("li").text(`location : ${location}`);
        // selector.append("li").text(`bbtype : ${bbtype}`);
        // selector.append("li").text(`wfreq : ${wfreq}`);
    });
}

buildBar(940);
buildBubble(940);
buildMeta(940);
// buildMeta(sampleID);

function optionChanged(sampleID){
    console.log("Dropdown changed to: ", sampleID);

    buildMeta(sampleID);
    buildBar(sampleID);
    buildBubble(sampleID);

}

function Init(){
    console.log("Initializing Screen");
    var selector = d3.select("#selDataset");
    
    d3.json("samples.json").then(function(data){
        var sampleNames = data.names;

        sampleNames.forEach((sampleID)=> {
            selector
                .append("option")
                .text(sampleID)
                .property("value",sampleID);
        });
    });

    buildBar(sampleID);
    buildBubble(sampleID);
    buildMeta(sampleID);

}
Init();


