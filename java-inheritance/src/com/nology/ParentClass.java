package com.nology;

public class ParentClass
{
    float data;

    public ParentClass(float data)
    {
        this.data = data;
    }

    public void parentMethod()
    {
        System.out.println("Parent method says: " + data);
    }
}