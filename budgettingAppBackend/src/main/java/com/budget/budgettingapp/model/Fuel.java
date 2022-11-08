package com.budget.budgettingapp.model;

import com.budget.budgettingapp.enums.FuelType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Fuel {

    private FuelType type;
    private double priceGbp;
    private double pricePence;
}
