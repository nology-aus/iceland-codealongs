package com.nology;

public class Rowboat extends Vessel{

    public Rowboat()
    {
        vesselType = "Rowboat";
        setBouyancy(100);
    }

    @Override
    public void fireWeapons() {
        System.out.println("Rowboat has no weapons");
    }
}
