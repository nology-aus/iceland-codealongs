package com.nology;

import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
	    // Creating vs instantiating variables
        // Creating a variable
        // Type - variableName
        String stringName; // This has been created, or 'declared'
        stringName = "I have been assigned"; // This variable has been assigned
        String otherString = "I am declared and assigned in the same sentence";
        Person personVariable = new Person(); // Instantiating a person, an instance is a single entity of the class it represents
        personVariable.name = "Bob";
        personVariable.sayYourName();
        //Person.species = "werewolf";
        //Person.name = "something";
        personVariable.sayYourSpecies();

        Person anotherPerson = new Person(); // Instantiating another person that has nothing to do with the original
        // Except for the fact they are both Persons
        anotherPerson.name = "Alice";
        anotherPerson.sayYourName();
        anotherPerson.sayYourSpecies();

        ArrayList<String> ourArrayList = new ArrayList<>();
        int[] ourIntArray = new int[3];
        int aNumber = 12312321;

        // What is Polymorphism?
        // IS one of the four pillars of OOP - Object Orientated Programming
        // the other 3 are abstraction, modularity, inheritance
        // Polymorphism is the ability share functionality between different things
        // And treat them the same in certain circumstances
        // A bicycle is different than a car
        // A motorbike is kinda like both
        // All three of them can ride on the road
        // When they are on the road, they all abide to the same rules

        // static void OnlyAddOnce(Pen pen, ArrayList<Pen> pens)
        // What do the <> brackets do? What is that for?
        // This is a type parameter
        int[] intArray = new int[5];
        String[] stringArray = new String[5];
        ArrayList<String> stringArrayList = new ArrayList<String>();

        // How does the static keyword work
        // The static keyword is used within a class

        // A quick review of private vs public
        // There is a design philosophy
        // That you should restrict access as much as you possibly can


        // static and void

    }
}
