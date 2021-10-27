package com.nology;

import java.util.Random;

public class Student {
    private String name;
    private int browniePoints;
    static Random random = new Random();

    public Student (String name)
    {
        this.name = name;
        this.browniePoints = random.nextInt();
    }

    public String getName()
    {
        return name;
    }

    public int getBrowniePoints()
    {
        return browniePoints;
    }
}
