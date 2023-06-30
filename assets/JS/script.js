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

cityinput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        search();
    }
});

if (localStorage.getItem("city") !== null) {
    renderrecents();
};


var apikey = "15ee655e9869842fef1d35bef76c5261";

gobutton.addEventListener("click", search);


function search() {

    if (localStorage.getItem("city") === null) {
        localStorage.setItem("city", JSON.stringify([]));
    }

    var savecity = cityinput.value;


    $("#gobutton").addClass("is-loading");

    city = cityinput.value.replace(/ /g, "%20");
    cityinput.value = "";





    weatherurl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + apikey + "";

    if (weatherurl != null) {
        fetch(weatherurl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                $("#gobutton").removeClass("is-loading");

                
                    var arr =JSON.parse(localStorage.getItem("city"));
                    arr.push(savecity);
                    localStorage.setItem("city", JSON.stringify(arr));
                    renderrecents();
                

                createWeatherCards(data.list);
            })
            .catch(function (error) {
                $("#gobutton").removeClass("is-loading");
                alert("City not found");
                console.log(error);
            })
    }

};

function renderrecents() {

    var recentstab = document.getElementById("recents");
    recentstab.innerHTML = "";
    var recents = JSON.parse(localStorage.getItem("city"));
    k = recents.length-1;
    for (var i = 0; i < 5; i++) {
        if (recents[k] === undefined) {
            break;
        }
        var recel = document.createElement("p");
        recel.innerHTML = recents[k];
        recel.addEventListener("click", function () {
            cityinput.value = this.innerHTML;
            search();
        });
        recentstab.appendChild(recel);
        k--;
    }


};


function createWeatherCards(list) {
    var k = 0;
    for (var i = 0; i < 5; i++) {

        var hi = list[k].main.temp_max;
        var lo = list[k].main.temp_min;
        var condition = list[k].weather[0].main;
        var date = list[k].dt_txt;

        var datehtmls = document.getElementsByClassName("date");
        var hihtmls = document.getElementsByClassName("hi");
        var lohtmls = document.getElementsByClassName("lo");
        var conditionhtmls = document.getElementsByClassName("condition");
        var imghtmls = document.getElementsByClassName("img");

        datehtmls[i].innerHTML = date;
        hihtmls[i].innerHTML = "high: " + hi;
        lohtmls[i].innerHTML = "low: " + lo;
        conditionhtmls[i].innerHTML = condition;
        imghtmls[i].src = "https://openweathermap.org/img/w/" + list[k].weather[0].icon + ".png";







        k = k + 8;


    }


}