package com.budget.budgettingapp.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class User {

    private long userId;
    private String userName;
    private String town;
    private String county;
    private String postCode;
}
