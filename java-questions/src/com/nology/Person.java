package com.nology;

import java.util.ArrayList;

public class Person {
    // A class describes everything that it has, and can do
    // Classes have properties
    public String name;
    public int age;
    public String speech = "blah blah blah";
    public ArrayList<Person> friends;
    private static String species = "Human";

    // This our constructor
    public Person()
    {
        // When this is called, it will give us back a person
    }

    // Class can do methods
    public String speak()
    {
        speech += " blah";
        return speech;
    }

    public void sayYourName()
    {
        System.out.println("My name is " + name);
    }

    public void sayYourSpecies()
    {
        System.out.println("I am a " + species);
    }

    // Age is our parameter
    public void setAge(int age)
    {
        this.age = age;
    }

    // const myFunction = (pen, pens) = > { ...do something}
    // public void myMethod(Pen pen, ArrayList<Pen> pens) {}
    public void setFriends(ArrayList<Person> friends )
    {
        this.friends = friends;
    }
}
