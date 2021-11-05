package com.nology;

import java.util.List;

public abstract class Vessel {
    protected double bouyancy;
    protected String vesselType;

    public String getVesselType(){
        return vesselType;
    };

    protected void setBouyancy(float bouyancy)
    {
        this.bouyancy = bouyancy;
    }

    public final boolean doesItFloat(double weight)
    {
        if (weight > bouyancy)
        {
            System.out.printf("The %s has sunk%n", getVesselType());
            return false;
        }
        System.out.printf("The %s is fine%n", getVesselType());
        return true;
    }

    public abstract void fireWeapons();
}
