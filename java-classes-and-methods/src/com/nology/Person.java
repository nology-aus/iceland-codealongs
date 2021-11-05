package com.nology;

public class Person {
    private String name = "John";
    private int age = 0;
    private Pet pet;

    public static String species = "Human";

    public Person(String name, int age)
    {
        this.name = name;
        this.age = age;
    }

    public Person(String name)
    {
        this.name = name;
    }

    public String toString()
    {
        return name;
    }

    public String getName()
    {
        return name;
    }

    public int getAge()
    {
        return age;
    }

    public Pet getPet()
    {
        return pet;
    }

    public void setPet(Pet pet)
    {
        this.pet = pet;
    }

    public String getPetsName()
    {
        if (pet != null)
            return pet.getName();

        return "This person has no pets!";
    }

    public void describeYourself()
    {
        System.out.println("My name is " + name + ", and my age is " + age);
    }
}