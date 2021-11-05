package com.nology;

public class Calculator {

    // Big Challenge
    // Challenge 1: Create a calculator with the following methods:

    // add: takes two double parameters, and returns a double of them added together
    // subtract: takes two double parameters, and returns a double of the first minus the second
    // multiply: takes two double parameters, and return a double of them multiplied together
    // divide: takes two double parameters, and returns the first divided by the second

    // Challenge 2: Add a method called menu that:
    // takes in two numbers and an operator
    // depending on the operator, runs one of the other methods and returns the result

    // Challenge 3: Add options for "power" and "sqrt"

    // Challenge 4: Add a method that uses a scanner to take a user's input from the terminal, then runs the menu method
    //for the calculation.

    public static double add (double x, double y)
    {
        return x + y;
    }

    public static double subtract (double x, double y)
    {
        return x - y;
    }

    public static double multiply (double x, double y)
    {
        return x * y;
    }

    public static double divide (double x, double y)
    {
        return x / y;
    }

    public static double power ( double x, double y)
    {
        return java.lang.Math.pow(x, y);
    }

    public static double root ( double x, double y)
    {
        return java.lang.Math.pow(x, y);
    }

    public static double menu (double x, double y, char op)
    {
        switch (op)
        {
            case '+': return add(x,y);
            case '-': return subtract(x,y);
            case '*': return multiply(x,y);
            case '/': return divide(x,y);
            case '^': return power(x,y);
            case '_': return root(x,y);
        }
        return 0;
    }
}
