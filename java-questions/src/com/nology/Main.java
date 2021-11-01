package com.nology;

import java.sql.Array;
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

        ArrayList<Person> icelandStudents = new ArrayList<>();

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
        // void is a return type
        // void is the same as undefined
        // unlike javascript, you can't really do anything with void

        // Functions, methods and their place inside of classes (as well as statics)
        // You can't write functions in Java
        // In Java, everything exists inside a class, no exceptions
        // functions are outside of a class, they are free floating
        // methods exist inside of a class

        // Vectors vs ArrayList, what's the difference?
        // A vector is an older implementation of a list
        // In Java they are more or less interchangable

        // array vs arraylist vs list
        // array is a grouping of a type, such as int[], String[]
        // list is an interface that defines a bunch of useful methods for operating groups of things
        // arrayList is an array that implements list

        // void logTheColourOfAPen(Pen pen)
        // The first word is the type of the variable
        // The second word is the label/name of the variable

        // Advantages of Java over JavaScript
        // Java
        // Very strict
        // Java makes it a little harder to do easy things
        // Java makes it a lot easier to do hard things
        // A lot more control over memory and low-level operations
        // Java is used for a lot of stuff, games, mobile apps, a lot of native applications

        // JavaScript
        // JavaScript will run anywhere
        // JS is super quick to get up and running
        // Javascript makes it really easy to do easy things
        // Javascript makes it hard to do hard things
        // JS is good for writing apps that will always run the same

        // default constructors and custom constructors
        // A class always need a constructor
        // Java will give you a constructor, even if you don't define one
        // If you do define a custom constructor, you can no longer utilise the default
        // Unless you also define that constructor

        // relationship between the structure of JS and a Java application
        // JavaScript often runs within a framework such as react on the web browser
        // But we don't always run our code in an application (for example, we run it in the console)
        //
        // So far, we have been running Java code outside of an application
        // When we use a framework such as Spring Boot it will become more obvious what that looks like
        // Android Studio, Minecraft

        // The 'new' keyword
        // The new keyword is always used before a constructor
        // It indicates that a new object is being created, from a class constructor
        // It tells the JVM to allocate some new memory for this object

        // What methods are and how to write them
        // Methods are written inside of a class
        // They require
        // A return type (if this is not void, then the return keyword is required for all branches)
        // A name
        // Parameters
        // A definition
        // Accessibility modifier (optional)
        System.out.println(fifthRoot(2));


        // If you took a method outside of its class, is it the same thing as a function
        // You can't do this in java
        // but yes, a method outside of a class is a function
        // but Java will yell at you if you try to do this
    }

    public static double fifthRoot(double n)
    {
            return Math.pow(n, 5);
    }
}