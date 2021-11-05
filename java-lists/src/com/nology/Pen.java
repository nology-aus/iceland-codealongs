package com.nology;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;

public class Pen {
    public String colour;

    public Pen(String colour)
    {
        this.colour = colour;
    }

//    public String toString()
//    {
//        return "I am a " + colour + " pen";
//    }

    public static void OnlyAddOnceList(Pen anything, ArrayList<Pen> pens)
    {
        if (pens.contains(anything)) // This will iterate through the list
        // and return true of it finds the object
            return;

        pens.add(anything);
    }

    public static void OnlyAddOnceArray(Pen pen, Pen[] pens)
    {
        // if our array has the desired pen already
        for (int i = 0; i < pens.length; i++) {
            if (pens[i] == pen)
                return; // return
        }

        // add that pen to our array
        Pen[] newArr = new Pen[pens.length+1];
        for (int i = 0; i < pens.length; i++) {
            newArr[i] = pens[i];
        }
        newArr[pens.length] = pen;
        pens = newArr;
    }

    public static void OutputAllPens(ArrayList<Pen> pens)
    {
        Iterator<Pen> iterator =  pens.iterator();
        while (iterator.hasNext())
        {
            Pen currentPen = iterator.next();
            System.out.println(currentPen);
        }
    }
}
