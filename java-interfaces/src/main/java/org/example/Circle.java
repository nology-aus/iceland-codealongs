package org.example;

public class Circle implements Area, Perimeter {
    private Double radius = null;

    public Circle(Double radius) {
        this.radius = radius;
    }

    public double getArea() {
        return Math.pow(this.radius, 2) * Math.PI;
    }

    public double getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
