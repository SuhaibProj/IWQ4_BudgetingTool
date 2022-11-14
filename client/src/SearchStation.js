import React from "react";

class SearchStations{


async getNearestStation(postCode){
// postCode = postCode.replace(/\s+/g, '').toUpperCase()
var x  = await fetch(`http://localhost:8080/getNearestStation/${postCode}`).then((data) => data.json()).then(
        (res) =>  {   
                        return res} 
    ).catch((e) => e.message())
     return x;
}

getAllStations(postCode){
        postCode = postCode.replace(/\s+/g, '').toUpperCase()
        var allStations  = fetch(`http://localhost:8080/getAllStations/${postCode}`).then((data) => data.json()).then(
        (res) =>  {   
                        return res} 
    ).catch((e) => e.message())
     return allStations;
}

getAllStationsFuelType(postCode, type){
        postCode = postCode.replace(/\s+/g, '').toUpperCase()
        var allStationsFuelType  = fetch(`http://localhost:8080/getAllStationsFuelType/${postCode}/${type}]}`).then((data) => data.json()).then(
        (res) =>  {   
                        return res} 
    ).catch((e) => e.message())
     return allStationsFuelType;
}

getCheapestFuelStaion(type, postCode){
        postCode = postCode.replace(/\s+/g, '').toUpperCase()
        var cheapestStationFuelType  = fetch(`http://localhost:8080/getCheapestFuelPriceStation/{type}/{postCode}`).then((data) => data.json()).then(
        (res) =>  {   
                        return res} 
    ).catch((e) => e.message())
     return cheapestStationFuelType;
}
}

export default SearchStations