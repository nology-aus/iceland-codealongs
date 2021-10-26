package com.nology;


public class Pet {
    private String name;
    private int age = 0;
    private Person owner;

    public Pet(String name, int age)
    {
        this.name = name;
        this.age = age;
    }

    public Pet(String name)
    {
        this.name = name;
    }

    public String toString()
    {
        return name;
    }

    public Person getOwner()
    {
        return owner;
    }

    public void setOwner(Person owner)
    {
        this.owner = owner;
    }

    public String getOwnerName()
    {
        if (owner == null)
            return "You can't own an animal, man";
        return owner.getName();
    }

    public String getName()
    {
        return name;
    }

    public int getAge()
    {
        return age;
    }
}
