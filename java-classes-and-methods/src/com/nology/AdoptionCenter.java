package com.nology;

public class AdoptionCenter {
    // static members
    public static AdoptionCenter singleton;
    public static boolean isAdoptionLegal = true;
    public static void Instantialise()
    {
        if (singleton != null)
            return;

        singleton = new AdoptionCenter();
    }

    // non-static members
    public boolean isOpen = false;
    private int numberOfAdoptedAnimals = 0;

    private AdoptionCenter()
    {
        isOpen = true;
    }

    public void adoptPet(Person person, Pet pet)
    {
        if (pet.getOwner() != null || person.getPet() != null)
        {
            System.out.printf("The person %s can not adopt the pet %s%n", person.getName(), pet.getName());
            return;
        }

        numberOfAdoptedAnimals++;

        person.setPet(pet);
        pet.setOwner(person);
    }
}
