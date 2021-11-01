package com.nology;

public class Main {
    // Objectives
    // What is inheritance?
    // Why do we need inheritance?

    // Topics
    // What do parents and children refer to in the context of inheritance?
    // How can we extend functionality of a class? Using the extends keyword
    // What does the super keyword mean? Allows us to call the constructor of the inherited class
    // When can we get away without using the super keyword? When the parent has a default constructor
    // Can a child class access properties of it's parent? How? You can just use them like normal properties
    // Can we inherit from multiple classes? why/why not? In Java is no. But you can do it in other languages
    // The way to get around this in Java is using interfaces. You can implement multiple interfaces
    // How can we override a method? why would we? You can write a method with the same name

    // What is an interface?
    // An interface is a set of functionality that can be inherited
    // interfaces don't exist until they are implemented
    // interfaces define which functions the implementing class must have
    // classes and interfaces are different things!

    public static void main(String[] args) {
	    //InheritanceBasics();
        AnimalInheritance();
    }

    public static void InheritanceBasics()
    {
        ParentClass parent = new ParentClass(17);
        parent.parentMethod(); // Parent uses own method
        //parent.childMethod(); // This will not work!
        ChildClass child = new ChildClass(21);
        child.childMethod(); // Child uses own method
        child.parentMethod(); // Child uses parent method
    }

    public static void AnimalInheritance()
    {
        Cat cat = new Cat();
        //cat.log();
        Animal ant = new Animal("Ant", 6);
        //ant.log();
        Dog dog = new Dog();

        Animal[] animals = new Animal[3];
        animals[0] = cat;
        animals[1] = ant;
        animals[2] = dog;

        for (int i = 0; i < animals.length; i++) {
            animals[i].makeSound();
        }

        //    Cool inheritance challenge
        //-   Create a parent class called person, they have a property called name that is set in their constructor
        //-   person has a method called say your name
        //-   Create a child class called student that inherits from person
        //-   Create a child class called teacher that inherits from person
        //-   students have a property called cohort, which is a string
        //-   When a student says their name, they should also mention which cohort they are in
        //-   Teachers have a method called call meeting, which takes a person and prints both the teacher and the persons name to the console

        //-   create a teacher called Aidan and a teacher called Calum
        //-   create 3 students
        //-   Put all 5 in an array and make them say their name
        //-   Make Calum and Aidan have a meeting
        //-   Make both teachers have a meeting with a student each
    }
}
