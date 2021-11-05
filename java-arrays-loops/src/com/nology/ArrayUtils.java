package com.nology;

import org.jetbrains.annotations.NotNull;

public class ArrayUtils {

    // Increment
    //Create a class called ArrayUtils
    //Create a static method that takes in an int[]
    //... and returns a new int[] where all numbers have been incremented
    //Input => Output Examples:
    //{ 1, 2, 3 } => { 2, 3, 4 }
    //{ 45, 23 } => { 46, 24 }
    //{ } => { }
    public static int[] increment (int[] arr)
    {
        int[] newArr = new int[arr.length];

        for (int i = 0; i < arr.length; i++){
            newArr[i] = arr[i] + 1;
        }

        return newArr;
    }

    // Reverse
    //Create a static method that takes in int[] on your ArrayUtils class
    //... and returns a new int[] where all the items are in the reverse order
    //Input => Output Examples:
    //{ 1, 2, 3 } => { 3, 2, 1 }
    //{ 45, 23 } => { 23, 45 }
    //{ } => { }

    public static void fillMyArrayWithJunk (int[]  arr)
    {
        for (int i = 0; i < arr.length; i++){
            arr[i] = (int)Math.floor(Math.random() * 100);
        }
    }
}
