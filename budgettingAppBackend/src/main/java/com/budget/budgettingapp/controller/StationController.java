package com.budget.budgettingapp.controller;

import com.budget.budgettingapp.model.Station;
import com.budget.budgettingapp.service.StationService;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
public class StationController {
    @Autowired
    StationService stationService;

    @GetMapping("/getAllStations")
    public String getAllStations(@RequestBody String postCode) throws IOException, ParseException {

        List<Station> returnValue = stationService.getFuelStations(postCode);

        return returnValue.toString();
    }

    @GetMapping("/getAllStationsFuelType/{postCode}/{type}")
    @ResponseBody
    public String getAllStationsFuelType(@PathVariable String postCode, @PathVariable String type) throws IOException, ParseException {

        List<Station> returnValue = stationService.getStationByFuelType(type, postCode);

        return returnValue.toString();
    }

    @GetMapping("/getNearestStation/{postCode}")
    @ResponseBody
    public String getNearestStation(@PathVariable String postCode) throws IOException, ParseException {

        Station nearestStation = stationService.getNearestStation(postCode);

        return nearestStation.toString();
    }

    @GetMapping("/getCheapestFuelPriceStation/{type}/{postCode}")
    @ResponseBody
    public String getCheapestStationByFuel(@PathVariable String type, @PathVariable String postCode) throws IOException, ParseException {

        Station cheapestStation = stationService.getCheapestStationByFuel(type, postCode);

        return cheapestStation.toString();
    }
}
