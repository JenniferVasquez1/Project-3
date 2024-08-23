var map = L.map('map').setView([33,-95], 4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let markers = L.layerGroup();
markers.addTo(map);

const renderPoints = async () => {

    let month = d3.select('#month').node().value;

    console.log(month);

    const url = '/api/Air_Quality_And_Natural_Gas';
    data = await d3.json(url);

    filterData = data.filter(obj=>obj.month == month);

    markers.clearLayers();

    filterData.forEach(marker => {
        let lat = marker.lat;
        let lng = marker.lng;
        let state = marker.state_name;
        let cat = marker.Category;
        let aqi = marker.AQI;
        let total = marker.total;
        let month = marker.month;
        let population = marker.population;


        let mark = L.circleMarker([marker.lat,marker.lng],{
            radius: total/20000,
            fillColor: cat == 'Good' ? 'green' : 'yellow',
            fillOpacity: .65,
            color: 'transparent'
        })
        .addTo(markers)
        .bindPopup(`
            <h4>
                AQI: ${aqi}<br>
                Month: ${month}<br>
                State: ${state}<br>
                Category: ${cat}<br>
                Population: ${population}<br>
                Total Consumption: ${total}
            </h4>
        `);

        if(state == 'Texas') {
            mark.openPopup();
        }
    });
};

renderPoints();