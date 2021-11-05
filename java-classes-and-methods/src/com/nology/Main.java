package com.nology;

public class Main {

    public static void main(String[] args) {
	// write your code here

//        Person Aidan = new Person("Aidan", 27);
//        Person Calum = new Person("Calum", 24);
//        Person Harry = new Person("Harry");
//        Pet Bailey = new Pet("Bailey", 3);
//        AdoptionCenter.Instantialise();
//
//        AdoptionCenter.isAdoptionLegal = false;
//
//        AdoptionCenter.singleton.adoptPet(Aidan, Bailey);
//
//        System.out.println(Bailey);
//        System.out.println(Bailey.getOwnerName());
//
//        AdoptionCenter.singleton.adoptPet(Calum, Bailey);
//
//        System.out.println(Aidan.getPetsName());
//        System.out.println(Calum.getPetsName());
//        System.out.println(Bailey.getOwnerName());
//
//        Aidan.describeYourself();
//
//        System.out.println(Person.species);
//
//        Person.species = "Cyborg";
//        System.out.println(Person.species);
//        System.out.println(AdoptionCenter.isAdoptionLegal);
//
//        System.out.println(Person.species);
//        System.out.println(Calum.species);
//
//
//        int AidansAge = Aidan.getAge();
//        System.out.println(Aidan.getName() + AidansAge);
//
//        Calum.describeYourself();

        System.out.println(Calculator.menu(1,5, '+'));
        System.out.println(Calculator.menu(1,5, '-'));
        System.out.println(Calculator.menu(2,5, '*'));
        System.out.println(Calculator.menu(6,3, '/'));
        System.out.println(Calculator.menu(3,2, '^'));
        System.out.println(Calculator.menu(16,0.5, '_' ));
    }
}


// let, const are accessible in whatever scope that declared them
// an if statement, an object, a file, some other place { let }