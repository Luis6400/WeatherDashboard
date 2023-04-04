var cityinput = document.getElementById("cityinput");
var city;
var stateinput = document.getElementById("stateinput");
var state;

var gobutton = document.getElementById("gobutton");

var recentstable = document.getElementById("recentstable");

var lat;
var lon;
var cityname;
var statename;
var weatherurl;

var apikey = "15ee655e9869842fef1d35bef76c5261";


$(gobutton).click(function () {


    $("#gobutton").addClass("is-loading");

    city = cityinput.value.replace(/ /g, "%20");
    cityinput.value = "";
    weatherurl = "https://api.openweathermap.org/data/2.5/forecast?q="+ city + "&units=imperial&appid=" + apikey +"";

    if (weatherurl != null) {
        fetch(weatherurl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                // get data here
                // $("#citytitle").text(cityname + ", " + statename);
                $("#gobutton").removeClass("is-loading");
                // var weatherlist = data.list;
                // createWeatherCards(weatherlist);
            })
            .catch(function (error) {
                $("#gobutton").removeClass("is-loading");
                alert("City not found");
            })
    }



    // state = stateinput.value;

    // stateinput.value = "AL";

    // var cityurl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "," + state + ",US&limit=2&appid=15ee655e9869842fef1d35bef76c5261";

    // fetch(cityurl)
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (data) {
    //         console.log(data);
    //         lat = encodeURIComponent(data[0].lat);
    //         lon = encodeURIComponent(data[0].lon);
    //         cityname = data[0].name;
    //         statename = data[0].state;
    //         // 40.6967254, lon: -111.986821
    //         weatherurl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=15ee655e9869842fef1d35bef76c5261";
    //         console.log(weatherurl);
    //         getWeather(weatherurl);
    //     })
    //     .catch(function (error) {
    //         $("#gobutton").removeClass("is-loading");
    //         alert("City not found");
    //     })



    // });

    // getWeather(weatherurl);
    // console.log(weatherurl);


});


function getWeather(wurl) {
    console.log(wurl);

}

function createWeatherCards(list) {
    // create cards here
    var currentdate = dayjs().format("YYYY-MM-DD");
    // while (i<list.length) {
    //     if()
    // }



}