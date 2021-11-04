package com.nology;

public abstract class Product {
    final double taxRate = 1.1;
    protected double price;

    public double calculateTax()
    {
        return price * 1.1;
    }
}
