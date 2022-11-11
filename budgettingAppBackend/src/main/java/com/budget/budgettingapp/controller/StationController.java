package com.budget.budgettingapp.controller;

import com.budget.budgettingapp.model.Station;
import com.budget.budgettingapp.service.StationService;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin
public class StationController {
    @Autowired
    StationService stationService;

    @GetMapping(path = "/getAllStations", produces = {MediaType.APPLICATION_JSON_VALUE})
    @ResponseBody
    public List<Station> getAllStations(@RequestBody String postCode) throws IOException, ParseException {

        List<Station> returnValue = stationService.getFuelStations(postCode);

        return returnValue;
    }

    @GetMapping(path = "/getAllStationsFuelType/{postCode}/{type}", produces = {MediaType.APPLICATION_JSON_VALUE})
    @ResponseBody
    public List<Station> getAllStationsFuelType(@PathVariable String postCode, @PathVariable String type) throws IOException, ParseException {

        List<Station> returnValue = stationService.getStationByFuelType(type, postCode);

        return returnValue;
    }

    @GetMapping(path = "/getNearestStation/{postCode}", produces = {MediaType.APPLICATION_JSON_VALUE})
    @ResponseBody
    public Station getNearestStation(@PathVariable String postCode) throws IOException, ParseException {

        Station nearestStation = stationService.getNearestStation(postCode);

        return nearestStation;
    }

    @GetMapping(path = "/getCheapestFuelPriceStation/{type}/{postCode}", produces = {MediaType.APPLICATION_JSON_VALUE})
    @ResponseBody
    public Station getCheapestStationByFuel(@PathVariable String type, @PathVariable String postCode) throws IOException, ParseException {

        Station cheapestStation = stationService.getCheapestStationByFuel(type, postCode);

        return cheapestStation;
    }
}
