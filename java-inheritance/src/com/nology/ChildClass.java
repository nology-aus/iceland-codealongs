package com.nology;

public class ChildClass extends ParentClass
{
    public ChildClass(float data)
    {
        super(data);
    }

    public void childMethod()
    {
        System.out.println("Child method says: " + data);
    }
}