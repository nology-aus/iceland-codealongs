package org.example;

public class Triangle implements Area, Perimeter {
    private double a = 0;
    private double b = 0;
    private double c = 0;

    public Triangle(double a) {
        this.a = this.b = this.c = a;
    }

    public Triangle(double a, double b) {
        this.b = this.c = a;
        this.a = b;
    }

    public Triangle(double a, double b, double c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public double getPerimeter() {
        return a + b + c;
    }

    public double getArea() {
        double p = this.getPerimeter();
        return Math.pow(p * (p - a + p - b + p - c), 0.5);
    }

    public double getA() { return this.a; }
    public double getB() { return this.b; }
    public double getC() { return this.c; }

}
