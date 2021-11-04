package com.nology;

import java.util.List;

// We are forcing T to always be a type that implements List
public class FamiliarUtility<T extends List>
{
    // Even though we don't know what T is, we know it has to be a List
    T list;

    public FamiliarUtility(T list)
    {
        this.list = list;
    }

    public String join()
    {
        return join(",");
    }

    public String join(String separator)
    {
        String output = "";
        for (int i = 0; i < list.size(); i ++) {
            output += list.get(i).toString();
            if (i < list.size()-1)
                output += separator;
        }

        return output;
    }
}
