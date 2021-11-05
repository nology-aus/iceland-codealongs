package com.nology;

public class Mug extends Container
{
    // This is in ml
    double mugSize = 340;

    public Mug()
    {

    }

    public Mug(double size)
    {
        if (size > 150) {
            this.mugSize = size;
        }
    }


    public double getVolume() {
        return mugSize;
    }
}
