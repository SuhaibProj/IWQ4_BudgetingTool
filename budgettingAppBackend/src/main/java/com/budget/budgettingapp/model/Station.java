package com.budget.budgettingapp.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class Station {

    private String brand;
    private String name;
    private String street;
    private String town;
    private String postCode;
    private long count;
    private long distanceFromSearchPC;
    private double latitude;
    private double longitude;
    private List<Fuel> fuelSold;

}
