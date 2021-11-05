package org.example;

// What is polymorphism?
// What are interfaces?
// Interfaces are a way of forcing the implementation of methods
// How can we use interfaces?
// Inheritance vs Polymorphism.



/**
 * Hello world!
 *
 */
public class App 
{
    public static void sound(MakesSound animal) {
        animal.makeSound();
    }

    public static void main( String[] args ) {
        Bike bike = new Bike(120);
        System.out.printf("Speed: %f%n", bike.getSpeed());
        bike.decreaseSpeed(10.15212);
        System.out.printf("Speed After: %f%n", bike.getSpeed());

        Car car =  new Car(20);
        System.out.printf("Speed: %f%n", car.getSpeed());
        car.decreaseSpeed(12.4124);
        System.out.printf("Speed After: %f%n", car.getSpeed());

        Circle circle = new Circle(100.);
        System.out.printf("Area: %f%n", circle.getArea());
        System.out.printf("Perimeter: %f%n", circle.getPerimeter());

        Triangle triangle = new Triangle(100);
        System.out.printf("Triangle ARea: %f%n", triangle.getArea());
    }
}
