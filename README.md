# Belly Button Biodiversity

This is an interactive dashboard that explores microbes colonizing human navels. The [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/) is taken from the Rob Dunn lab.

The app supporting the dashboard is deployed on GitHub Pages, which can be seen by [clicking here](https://shakespearbi.github.io/plotly-challenge/Starter_Code/)!

The dataset reveals that a small handful of operational taxonomic units, or OTUs were present in more than 70% of people, while the rest were relatively rare. The data is stored in a json format. Attributes in the data include demographic information, belly button wash frequency and OTU numbers. Using D3 library, the json file is then converted to JavaScripts objects. All charts are created with Plotly.js.

Whenever a new test subject ID is selected from the dropdown menu, all visualizations will update. Hover cursor over charts to see the OTU labels.
