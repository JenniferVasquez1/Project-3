var map = L.map('map').setView([30,-95], 4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const init = async () => {

    const url = '/api/Air_Quality_And_Natural_Gas';
    data = await d3.json(url);

    console.log(data);

    data.forEach(marker => {
        let lat = marker.lat;
        let lng = marker.lng;
        let state = marker.state_name;
        let cat = marker.Category;
        let aqi = marker.AQI;
        // let com = marker['Commercial Consumption'];
        let total = marker.total;
        let month = marker.month;
        let population = marker.population;


        L.circleMarker([marker.lat,marker.lng])
        .addTo(map)
        .bindPopup(`
            <h4>
                AQI: ${aqi}<br>
                Month: ${month}<br>
                State: ${state}<br>
                Category: ${cat}<br>
                Population: ${population}<br>
                Total Conssumption: ${total}
            </h4>
        `);
    });
};

init();