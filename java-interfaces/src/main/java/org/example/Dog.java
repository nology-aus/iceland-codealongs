package org.example;

public class Dog implements MakesSound {
    int age = 10;
    String type = "collie";

    public Dog(int age, String type) {
        this.age = age;
        this.type = type;
    }

    public void makeSound() {
        if (age < 2) {
            System.out.printf("YAP%n");
        } else if (type.equals("husky")) {
            System.out.printf("ooooooweooo%n");
        } else {
            System.out.printf("Woof%n");
        }
    }
}
