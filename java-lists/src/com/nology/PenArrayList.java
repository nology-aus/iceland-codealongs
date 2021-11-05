package com.nology;

public class PenArrayList{
    Pen[] internalArray;

    public PenArrayList()
    {
        internalArray = new Pen[0];
    }

    public void add(Pen newPen)
    {
        Pen[] newArr = new Pen[internalArray.length+1];
        for (int i = 0; i < internalArray.length; i++) {
            newArr[i] = internalArray[i];
        }
        newArr[internalArray.length] = newPen;
        internalArray = newArr;
    }

    public Pen get(int index)
    {
        return internalArray[index];
    }

    public boolean contains(Pen input)
    {
        for (int i = 0; i < internalArray.length; i++) {
            if (internalArray[i] == input)
                return true; // return
        }
        return false;
    }

    public void clear()
    {
        internalArray = new Pen[0];
    }

    public int size()
    {
        return internalArray.length;
    }
}
