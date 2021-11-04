package com.nology;

public class ShotGlass extends Container
{
    final double ausSize = 30;
    final double usSize = 44;
    final double polSize = 50;

    public enum countryCodes  { Aus, US, Pol};

    countryCodes currentCountry;

    public ShotGlass (countryCodes countryCode)
    {
        currentCountry = countryCode;
    }

    public double getVolume()
    {
        switch (currentCountry)
        {
            case Aus: return ausSize;
            case US: return usSize;
            case Pol: return polSize;
            default: return -1;
        }
    }
}
