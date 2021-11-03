package com.nology;

public class Main {
    // What are abstract classes? Abstract classes are classes that contain undefined functionality that their child
    // classes are expected to have and be polymorphic with

    // Why can't we instantiate abstract classes? You will typically have undefined behaviour in your class and the computer
    // won't know what to do

    // How do they differ from regular classes?
    // A regular class can not implement abstract methods

    // How do they differ from interfaces?
    // Abstract classes differ from interfaces because they can hold method definitions

    // What is a method signature?
    // The name of the method that can be used across different levels of inheritance/interface implementation

    // What does the abstract keyword do?
    // Indicates that something is abstract

    // Questions continued:
    // Inheritance vs Abstract classes
    // Any class can be inherited from
    // Inheritance is the mechanism in which a class can use features of another class, as though they were it's own
    // An abstract class is a subset of class that can not be instantiated
    // If no class inherits from an abstract class, we can't use it
    // If an abstract class doesn't have any abstract methods, it doesn't need to be abstract

    // What's the practical difference between an abstract class and an interface?
    // I would always prefer to use an interface because they are typically more ergonomic from a writing and design perspective
    // If you find that you do want to store some inbuilt functionality in your interface
    // This may be a good candidate for an abstract class

    //

    public static void main(String[] args) {
//	    AbstractChild childClass = new AbstractChild();
//        childClass.undefinedMethod();
//        childClass.setFloatProperty(30);
//        System.out.println(childClass.getFloatProperty());

        Rowboat rowboat = new Rowboat();

        rowboat.fireWeapons();
        rowboat.doesItFloat(50);

        PirateShip pirateShip = new PirateShip();

        pirateShip.fireWeapons();
        pirateShip.doesItFloat(1000);
        pirateShip.doesItFloat(20000);

        // 1. 1 Teaspoon of coffee granules is needed for 150mL of water
        // 2. Create an abstract `Container` with 2 functions
        //    - An abstract method `getVolume()`
        //    - A `teaspoonCount()` method that uses `getVolume()` to calculate the teaspoons of coffee granules needed for the volume
        // 3. Create three classes `LatteGlass`, `ShotGlass` and `Mug` that extend
        //   container, all should implement the `getVolume()` method
    }
}
