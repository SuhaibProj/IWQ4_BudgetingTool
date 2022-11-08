package com.budget.budgettingapp.controller;

import com.budget.budgettingapp.model.Station;
import com.budget.budgettingapp.service.StationService;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
public class StationController {
    @Autowired
    StationService stationService;

    @GetMapping("/getAllStations")
    public String getAllFuelPrices(@RequestBody String postCode) throws IOException, ParseException {

        List<Station> returnValue = stationService.getFuelStations(postCode);

        return returnValue.toString();
    }
}
