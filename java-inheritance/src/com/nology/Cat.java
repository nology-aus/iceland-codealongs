package com.nology;

public class Cat extends Animal{
    int numberOfWhiskers;

    public Cat()
    {
        super("Cat", 4);
        numberOfWhiskers = 8;
    }

    public void log()
    {
        System.out.println("I am a " + species + " and I have " + numberOfLegs + " legs and " + numberOfWhiskers + " whiskers.");
    }

    public void makeSound()
    {
        System.out.println("Miao");
    }
}
