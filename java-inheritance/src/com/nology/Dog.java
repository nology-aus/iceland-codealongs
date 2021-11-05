package com.nology;

public class Dog extends Animal {
    public Dog()
    {
        super("Dog", 4);
    }

    public void makeSound(){
        System.out.println("Woof woof");
    }
}
