package com.nology;

public abstract class AbstractClass {
    // You can not instantiate an abstract class

    private float floatProperty;

    public void setFloatProperty(float property)
    {
        floatProperty = property;
    };

    public float getFloatProperty()
    {
        return floatProperty;
    }

    public AbstractClass() {}

    public abstract void undefinedMethod();
}
