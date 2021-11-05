package com.nology;

public class Animal {
    String species;
    int numberOfLegs;

    public Animal(String species, int legs)
    {
        this.species = species;
        this.numberOfLegs = legs;
    }

    public void log()
    {
        System.out.println("I am a " + species + " and I have " + numberOfLegs + " legs");
    }

    public void makeSound()
    {
        System.out.println(species);
    }
}
