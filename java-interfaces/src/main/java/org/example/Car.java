package org.example;

public class Car implements Vehicle {
    public final double rateMsToMiles = 2.24;

    // m/s
    double speed = 10;

    public Car(double speed) {
        this.speed = speed;
    }

    public double getSpeed() {
        return this.speed * this.rateMsToMiles;
    }

    public void decreaseSpeed(double s) {
        this.speed -= s / rateMsToMiles;
    }

}
