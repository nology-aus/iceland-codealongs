package com.nology;

public class IcelandCohort {
    public String[] students =  {
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

    public String[] coaches = new String[3];

    public IcelandCohort()
    {
//        String[] temp = {"Calum", "Aidan", "Remi"};
//        coaches = temp;
        coaches[0] = "Calum";
        coaches[1] = "Remi";
        coaches[2] = "Aidan";
    }

    public void AddNewCoach(String coachName)
    {
        // make new array with a length of one higher than previous array
        String[] temp = new String[coaches.length+1];

        // copy existing stuff to new array
        for (int i = 0; i < coaches.length; i++)
        {
            temp[i] = coaches[i];
        }

        // add new stuff to new array
        //temp[temp.length-1] = coachName;

        // make old array become new array
        coaches = temp;

        coaches[coaches.length-1] = coachName;
    }
}
