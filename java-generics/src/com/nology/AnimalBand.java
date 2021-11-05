package com.nology;

public class AnimalBand<T extends Animal> {
    public Animal bandMember;
    public AnimalBand(T animal)
    {
        this.bandMember = animal;
    }

    public void play()
    {
        bandMember.makeYourNoise();
    }
}
