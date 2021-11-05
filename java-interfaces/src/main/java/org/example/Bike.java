package org.example;

public class Bike implements Vehicle {
    public final double rateKmM = 0.62;
    public final double rateMKm = 1.6;

    // km/h
    double speed = 100;

    public Bike(double speed) {
        this.speed = speed;
    }

    public double getSpeed() {
        return this.speed * this.rateKmM;
    }

    public void decreaseSpeed(double s) {
        this.speed -= s * this.rateMKm;
    }
}
