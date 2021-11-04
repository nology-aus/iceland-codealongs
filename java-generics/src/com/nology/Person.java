package com.nology;

public class Person<T> {
    T favouriteThing;

    public Person(T favouriteThing)
    {
        this.favouriteThing = favouriteThing;
    }

    public void setFavouriteThing(T favouriteThing)
    {
        this.favouriteThing = favouriteThing;
    }

    public void tellUsYourFavouriteThing()
    {
        System.out.println(favouriteThing.toString());
    }
}
