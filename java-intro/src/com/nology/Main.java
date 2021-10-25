package com.nology;

import java.util.Arrays;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {

        // primitives
        // byte - 1 byte
        // short - 2 byte between -32,768 to 32,767
        // int - 4 bytes
        // long - 8 bytes -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807

        // Can go left to right!
        // But is harder to go right to left
        // byte -> short -> int -> long
        // float -> double

        // float   - 4 byte decimal, 6-7 decimal places
        // double - 8 byte decimal, roughly 14-15 decimal places

        // char    - a character such as 'a', 'b', ' ', '%', 2 bytes

        // boolean - true or false about the size of a byte
        // 00000001
        // 00000000


        // objects

        byte myByte = 127; // 127
        short myShort = (short)myByte;
        int myInt = myShort;
        long myLong = myInt;

        int newInt = (int) myLong;
        byte newByte = (byte) myLong;

        float myFloat = 12.9f;
        newInt = Math.round(myFloat);

        System.out.println(newInt);

        // 00000000
        // 10000000
        // 127
        //    0
        //    1
        //   10
        //   11
        //  100
        //  101
        //  110
        //  111
        // 1000
        // (128)(64)(32)(16)8421
        // 10110010
        // 178

        // 00000000 00000000 00000000 000000000

        // The string zone

        char[] notAString = {'a', 'v'};
        String myString  = new String(notAString);
        //char[] myCharArray =

        // type[] = new type[size]
        // type[] = {value, value, value}

        char[] myCharArray = new char[3];

        myCharArray = Arrays.copyOf(myCharArray, 4);;
        myCharArray[0] = 'c';
        myCharArray[1] = 'h';
        myCharArray[2] = 'a';
        myCharArray[3] = 'r';

        myString = "Aidan";
        myString += " is cool";

        myString.equals("whatever");
        char[] newCharArray = myString.toCharArray();

        System.out.println(new String(myCharArray));
        System.out.println(Arrays.toString(newCharArray));

        Scanner myScanner = new Scanner(System.in);

        // "these" are the same as 'these'
        // "strings" and {'c','h','a','r'}

        final byte DRINKING_AGE = 18;
        int dogYears = 7;

        // Objects start with a capital letter
        // everything else starts with a lower case
//
//        System.out.println("What is your name?");
//
//        String myName = myScanner.nextLine();
//
//        System.out.println("Hello " + myName);
//
//        System.out.println("How old are you?");
//
//        byte myAge = myScanner.nextByte();
//
//        System.out.println("You said you are " + myAge + " years old");
//
//        if (myAge <= DRINKING_AGE) {
//            System.out.println("You are too young to go to the pub");
//        } else {
//            System.out.println("Go and enjoy a pint");
//        }

        for (int i = 0; i < newCharArray.length; i++) {
            switch (newCharArray[i]) {
                case 'c':
                    System.out.println("Cool");
                    break;
                case 'a':
                    System.out.println("Awesome");
                    break;
                default:
                    System.out.println("Okay");
            }
        }

//        while (myCharArray.length < 100)
//        {
//            System.out.println("Yahoo");
//            myCharArray = Arrays.copyOf(myCharArray, myCharArray.length+1);
//        }

        //System.out.println(myCharArray);


    }
}