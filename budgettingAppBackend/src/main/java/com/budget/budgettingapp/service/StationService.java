package com.budget.budgettingapp.service;

import com.budget.budgettingapp.model.Fuel;
import com.budget.budgettingapp.model.Station;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

@Service
public class StationService {
    String url = "https://uk1.ukvehicledata.co.uk/api/datapackage/FuelPriceData?v=2&api_nullitems=1&auth_apikey=38e9ef0c-bf7c-4bac-91df-fce03204897a&key_POSTCODE=";

    public JSONObject getResults(String PostCode) throws IOException, ParseException {
        JSONParser parser = new JSONParser();
        String apiCallUrl = url + PostCode;
        URL object = new URL(apiCallUrl);
        HttpURLConnection connection = (HttpURLConnection) object.openConnection();
        connection.setRequestMethod("GET");
        int responseCode = connection.getResponseCode();
        if(responseCode == HttpURLConnection.HTTP_OK){
            BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String inputLine;
            StringBuffer response = new StringBuffer();

            while((inputLine = in.readLine()) != null){
                response.append(inputLine);
            }
            in.close();
            String resultString = response.toString();

            JSONObject json = (JSONObject) parser.parse(resultString);

            return json;
        } else {
            String errorResult = "{\"Error\" : \"Result is empty\"}";
            return (JSONObject) parser.parse(errorResult);
        }
    }

    public List<Station> getFuelStations(String postCode) throws IOException, ParseException {
        JSONObject json = getResults(postCode);

        JSONObject response = (JSONObject) json.get("Response");
        JSONObject dataItems = (JSONObject) response.get("DataItems");
        JSONObject fuelStationDetails = (JSONObject) dataItems.get("FuelStationDetails");
        List<JSONObject> fuelStationList = (List<JSONObject>) fuelStationDetails.get("FuelStationList");

        List<Station> stations = new ArrayList<>();

        for(JSONObject fuelStation : fuelStationList){
            String name = (String) fuelStation.get("Name");
            String brand = (String) fuelStation.get("Brand");
            String street = (String) fuelStation.get("Street");
            String town = (String) fuelStation.get("Town");
            String thePostCode = (String) fuelStation.get("Postcode");
            Double distanceFromSearchPC = (Double) fuelStation.get("DistanceFromSearchPostcode");
            double latitude = (Double) fuelStation.get("Latitude");
            double longitude = (Double) fuelStation.get("Longitude");
            List<Fuel> fuelList = new ArrayList<>();

            List<JSONObject> fuelPriceList = (List<JSONObject>) fuelStation.get("FuelPriceList");
            for(JSONObject fuel : fuelPriceList ){
                String type = (String) fuel.get("FuelType");

                JSONObject latestRecordedPrice = (JSONObject) fuel.get("LatestRecordedPrice");
                double currentPrice = (Double) latestRecordedPrice.get("InPence");

                Fuel theFuel = new Fuel(type,currentPrice);
                fuelList.add(theFuel);
            }

            Station station = new Station(brand, name, street, town, thePostCode, distanceFromSearchPC, latitude, longitude, fuelList );
            stations.add(station);
        }

        return stations;

    }
}
