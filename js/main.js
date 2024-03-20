// Add all scripts to the JS folder

//begin script when window loads
window.onload = setMap();

//set up choropleth map
function setMap(){
    //use Promise.all to parallelize asynchronous data loading
    var promises = [d3.csv("data/violent_crime_rate3.csv"),                    
                    d3.json("data/EuropeCountries.geojson"),                    
                    d3.json("data/FranceRegions.geojson")                   
                    ];    
        Promise.all(promises).then(callback);    

        function callback(data){    
            csvData = data[0];    
            europe = data[1];    
            france = data[2];
            console.log(csvData);
            console.log(europe);
            console.log(france);    
        };
};