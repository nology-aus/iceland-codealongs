package org.example;

public class Pig implements MakesSound {
    String sound = "oink";
    public String name = "sally";
    boolean rollingInDirt = false;

    public Pig() {}
    public Pig(String name) {
        this.name = name;
    }

    public void makeSound() {
        // Implement makeSound for pig
        System.out.printf("The pig goes %s%n", this.sound);
    }

    public void rollInDirt() {
        this.rollingInDirt = true;
    }
}
