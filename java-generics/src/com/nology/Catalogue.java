package com.nology;

import java.util.ArrayList;

public class Catalogue <P extends Product>
{
    private ArrayList<P> internalCollection;

    public Catalogue()
    {
        internalCollection = new ArrayList<>();
    }

    public void add(P product)
    {
        internalCollection.add(product);
    }

    public void importCatalogue(Catalogue<P> catalogue)
    {
        for (P product : catalogue.internalCollection) {
            add(product);
        }
    }

    public double calculateTotal()
    {
        double total = 0;

        for (P item : internalCollection)
        {
            total += item.calculateTax();
        }

        return total;
    }
}
