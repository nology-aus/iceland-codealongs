package com.nology;

public abstract class Container {
    // 1. 1 Teaspoon of coffee granules is needed for 150mL of water
    // 2. Create an abstract `Container` with 2 functions
    //    - An abstract method `getVolume()`
    //    - A `teaspoonCount()` method that uses `getVolume()` to calculate the teaspoons of coffee granules needed for the volume
    // 3. Create three classes `LatteGlass`, `ShotGlass` and `Mug` that extend
    //   container, all should implement the `getVolume()` method

    final double coffeeToWaterRatio = 150;

    protected abstract double getVolume();

    public double teaspoonCount() {
        return getVolume() / coffeeToWaterRatio;
    }
}
