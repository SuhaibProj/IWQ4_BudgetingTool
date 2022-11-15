import React from "react";

class SearchStations extends React.Component{


async getNearestStation(postCode){

var nearestStation  = await fetch(`http://localhost:8080/getNearestStation/${postCode}`).then((data) => data.json()).then(
        (res) =>  {   
                        return res} 
    ).catch((e) => e.message())
     return nearestStation;
}

async getAllStations(postCode){
        
        var allStations  = await fetch(`http://localhost:8080/getAllStations/${postCode}`).then((data) => data.json()).then(
        (res) =>  {   
                        return res} 
    ).catch((e) => e.message())
     return allStations;
}

getAllStationsFuelType(postCode, type){
        
        var allStationsFuelType  = fetch(`http://localhost:8080/getAllStationsFuelType/${postCode}/${type}]}`).then((data) => data.json()).then(
        (res) =>  {   
                        return res} 
    ).catch((e) => e.message())
     return allStationsFuelType;
}

getCheapestFuelStaion(type, postCode){
        
        var cheapestStationFuelType  = fetch(`http://localhost:8080/getCheapestFuelPriceStation/${type}/${postCode}`).then((data) => data.json()).then(
        (res) =>  {   
                        return res} 
    ).catch((e) => e.message())
     return cheapestStationFuelType;
}
}

export default SearchStations