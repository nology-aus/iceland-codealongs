package com.nology;

import java.lang.reflect.Array;
import java.util.*;

public class Main {

    public static void main(String[] args) {
        // What are lists? What is an arraylist?
        // What are the pitfalls of using arrays?
        // How are lists different from arrays?
        // What are the benefits of using lists

        // A listArray is an array that is also a list

        // Lists are an interface
        // What is an interface?
        // An interface is a prescribed set of features that a class implements
        // Allows us to share functionality between classes
        // Strings can be sliced
        // Arrays can be sliced
        // They are both 'sliceable'
        // Sliceable would be a good name for that interface

        // An arraylist is an array, that also implements list
        // So it is an array that can also do everything a list can


        //Pen[] myPens = new Pen[] // boring way
        ArrayList<Pen> pens = new ArrayList<Pen>(); // cool way
        PenArrayList pens2 = new PenArrayList();

        Pen invisiblePen = new Pen("Invisible");
        Pen invisibleV2 = new Pen("Invisible");

        pens.add(new Pen("Blue"));
        pens2.add(invisiblePen);
        pens2.size();

        Pen.OnlyAddOnceList(invisiblePen, pens);
        Pen.OnlyAddOnceList(invisibleV2, pens);
        Pen.OnlyAddOnceList(invisibleV2, pens);
        Pen.OnlyAddOnceList(new Pen("Purple"), pens);
        Pen.OnlyAddOnceList(new Pen("Purple"), pens);
        Pen.OnlyAddOnceList(new Pen("Purple"), pens);
        Pen.OnlyAddOnceList(new Pen("Purple"), pens);
        Pen.OnlyAddOnceList(new Pen("Purple"), pens);
        Pen.OnlyAddOnceList(new Pen("Purple"), pens);
        pens.clear();

        System.out.println("Is list empty? " + pens.isEmpty());

        System.out.println("First size " + pens.size()); // How many things are actually in the array, not necessarily the length

        Pen redPen = new Pen("Red");
        pens.add(redPen);
        pens.add(new Pen("Black"));
        pens.add(new Pen("Green"));

        System.out.println("Which pen is at index 2 " + pens.get(2).toString());
        System.out.println("Where is our invisible pen " + pens.indexOf(invisiblePen));
        System.out.println("Where is our red pen " + pens.indexOf(redPen));
        System.out.println("How many pens have we got " + pens.size());

        Pen.OutputAllPens(pens);


        Pen myPen = new Pen("Blue");

        // List<Pen> myList = new PenList();
        // List<Pen> myArrayList = new ArrayList<>();

        // Create an arrayList called some students
        //ArrayList<String> someStudentsList = new ArrayList();
        // Create an array of strings, one of each student's names
        String[] students =  {
                "Cheyne",
                "Tim",
                "Harrison",
                "Stephen",
                "Jeremy",
                "Martyna",
                "Natalie",
                "Andrew",
                "Emily",
                "Prakash",
                "Yujin",
                "Sandra",
                "Blake",
                "Sebastian",
                "Jinn"
        };

        String[] selectedStudentsArray = new String[0];
        ArrayList<String> selectedStudentsList = new ArrayList<>();

        String student = getRandomString(students);
        selectedStudentsArray = addStringToArray(student, selectedStudentsArray);
        selectedStudentsList = addStringToList(student, selectedStudentsList);
        student = getRandomString(students);
        selectedStudentsArray = addStringToArray(student, selectedStudentsArray);
        selectedStudentsList = addStringToList(student, selectedStudentsList);
        student = getRandomString(students);
        selectedStudentsArray = addStringToArray(student, selectedStudentsArray);
        selectedStudentsList = addStringToList(student, selectedStudentsList);
        student = getRandomString(students);
        selectedStudentsArray = addStringToArray(student, selectedStudentsArray);
        selectedStudentsList = addStringToList(student, selectedStudentsList);
        student = getRandomString(students);
        selectedStudentsArray = addStringToArray(student, selectedStudentsArray);
        selectedStudentsList = addStringToList(student, selectedStudentsList);
        student = getRandomString(students);
        selectedStudentsArray = addStringToArray(student, selectedStudentsArray);
        selectedStudentsList = addStringToList(student, selectedStudentsList);
        student = getRandomString(students);
        selectedStudentsArray = addStringToArray(student, selectedStudentsArray);
        selectedStudentsList = addStringToList(student, selectedStudentsList);
        student = getRandomString(students);
        selectedStudentsArray = addStringToArray(student, selectedStudentsArray);
        selectedStudentsList = addStringToList(student, selectedStudentsList);
        student = getRandomString(students);
        selectedStudentsArray = addStringToArray(student, selectedStudentsArray);
        selectedStudentsList = addStringToList(student, selectedStudentsList);
        student = getRandomString(students);
        selectedStudentsArray = addStringToArray(student, selectedStudentsArray);
        selectedStudentsList = addStringToList(student, selectedStudentsList);


        // Select from that array randomly 10 times

        // Add the student to an array
        // but only if they are not already in there


        // Add the selected student to the arrayList
        // But only if they are not already in there
    }

    public static String getRandomString(String[] stringArray)
    {
        Random r = new Random();
        int randomIndex = r.nextInt(stringArray.length);
        return stringArray[randomIndex];
    }

    public static String[] addStringToArray(String stringToAdd, String[] arrayToAddTo)
    {
        for (int i = 0; i < arrayToAddTo.length; i++)
        {
            if (arrayToAddTo[i].equals(stringToAdd))
            {
                return arrayToAddTo;
            }
        }

        String[] temp = new String[arrayToAddTo.length+1];

        //Arrays.copyOf(arrayToAddTo, arrayToAddTo.length+1);
        for (int i = 0; i < arrayToAddTo.length; i++){
            temp[i] = arrayToAddTo[i];
        }

        temp[arrayToAddTo.length] = stringToAdd;
        return temp;
    }

    public static ArrayList<String> addStringToList(String stringToAdd, ArrayList<String> listToAddTo)
    {
        if (listToAddTo.contains(stringToAdd))
            return listToAddTo;

        listToAddTo.add(stringToAdd);
        return listToAddTo;
    }
}
