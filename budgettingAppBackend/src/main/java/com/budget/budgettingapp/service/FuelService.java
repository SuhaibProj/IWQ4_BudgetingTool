package com.budget.budgettingapp.service;

import com.budget.budgettingapp.enums.FuelType;

public class FuelService {
    public String getFuelType(String fuelType){
        if (fuelType.equals(FuelType.DIESEL)){
            return "diesel";
        } else if (fuelType.equals(FuelType.UNLEADED)) {
            return "unleaded";
        }else {
            return "ev";
        }
    }
}
