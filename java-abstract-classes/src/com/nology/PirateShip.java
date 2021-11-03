package com.nology;

public class PirateShip extends Vessel {

    public PirateShip()
    {
        vesselType = "Pirate Ship";
        setBouyancy(5000);
    }

    @Override
    public void fireWeapons() {
        System.out.println("Boom!");
    }
}
