package com.nology;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Random;

public class Main {

    public static void main(String[] args)
    {
        IcelandCohort students = new IcelandCohort();

        System.out.println(students.students.length);
        System.out.println(Arrays.toString(students.students));

        System.out.println(students.coaches.length);
        System.out.println(Arrays.toString(students.coaches));
        students.AddNewCoach("Sam");
        System.out.println(students.coaches.length);
        System.out.println(Arrays.toString(students.coaches));


        int[] myCoolArray = new int[50];
        ArrayUtils.fillMyArrayWithJunk(myCoolArray);
        //Arrays.stream(myCoolArray).map()
        int[] output = ArrayUtils.increment(myCoolArray);

        int myInt; // This is just an int
        int[] myIntArray = {1,2,3}; // now it is an array of the type that you attached the brackets too
        int[] emptyArray = new int[10];
        emptyArray[6] = 6;

        String[] stringArray;
        Student[] studentArray;
        IcelandCohort[] icelandCohortArray;

        // this is a jagged array
        int[][] myIntArrayArray = {
                {1,2,3,4},
                {},
                {1,2},
                {1,2,4,7}
        }; // a 2 dimensional array

        int[][][] threeDimensionalIntArray;
        int[][][][] fourDimensionalIntArray;

        for (int i = 0; i < myIntArrayArray.length; i++)
        {
            int[] temp = myIntArrayArray[i];
            for (int j = 0; j < temp.length; j++){
                System.out.println(temp[j]);
            }
        }

        Student[] icelandStudents;
        Student[] japanStudents;

        //HashMap<String, Student> studentHashMap = new HashMap<>();

        // KVP
        Student[][] cohorts;

        //myIntArrayArray = {1,2,3}
        threeDimensionalIntArray = new int[3][3][3];

    }
}
