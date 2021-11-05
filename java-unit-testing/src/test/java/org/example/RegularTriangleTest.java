package org.example;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class RegularTriangleTest {

    @Test
    public void testVoidConstructor() {
        RegularTriangle tri = new RegularTriangle();
        Assert.assertEquals(null, tri.getSide());
    }

    @Test
    public void testSideConstructor() {
        RegularTriangle tri = new RegularTriangle(100D);
        Assert.assertEquals((Double) 100D, tri.getSide());
    }

    @Test
    public void testGetPerimeterWithValidSide() {
        RegularTriangle tri = new RegularTriangle(150D);

        Double perim = null;

        try {
            perim = tri.getPerimeter();
        } catch (TriangleException error) {
            Assert.fail("TriangleException was unexpectedly thrown with valid side double");
        }

        Assert.assertEquals((Double) 450D, perim);
    }

    @Test
    public void testGetPerimeterAfterVoidConstructorAndSetter() {
        RegularTriangle tri = new RegularTriangle();
        tri.setSide(500D);

        Double perim = null;

        try {
            perim = tri.getPerimeter();
        } catch (TriangleException error) {
            Assert.fail("TriangleException was unexpectedly thrown with valid side double");
        }

        Assert.assertEquals((Double) 1500D, perim);
    }

    @Test(expected = TriangleException.class)
    public void testGetPerimeterWithNullSide() throws TriangleException {
        RegularTriangle tri = new RegularTriangle();
        tri.getPerimeter();
    }

    @Test(expected = TriangleException.class)
    public void testGetPerimeter0Side() throws TriangleException {
        RegularTriangle tri = new RegularTriangle(0D);
        tri.getPerimeter();
    }

    @Test(expected = TriangleException.class)
    public void testGetPerimeterNegativeSide() throws TriangleException {
        RegularTriangle tri = new RegularTriangle(-1223D);
        tri.getPerimeter();
    }
}
