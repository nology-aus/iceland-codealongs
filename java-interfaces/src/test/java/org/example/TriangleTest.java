package org.example;

import org.junit.Assert;
import org.junit.Test;

public class TriangleTest {

    @Test
    public void testTriangleRegularInit() {
        Triangle triangle = new Triangle(123);
        Assert.assertEquals(123, triangle.getA(), 0);
        Assert.assertEquals(123, triangle.getB(), 0);
        Assert.assertEquals(123, triangle.getB(), 0);
    }

    @Test
    public void testTriangleIsocelesInit() {
        Triangle triangle = new Triangle(100, 150);
        Assert.assertEquals(150, triangle.getA(), 0);
        Assert.assertEquals(100, triangle.getB(), 0);
        Assert.assertEquals(100, triangle.getC(), 0);
    }

    @Test
    public void testTriangleIrregularInit() {
        Triangle triangle = new Triangle(100, 150, 200);
        Assert.assertEquals(100, triangle.getA(), 0);
        Assert.assertEquals(150, triangle.getB(), 0);
        Assert.assertEquals(200, triangle.getC(), 0);
    }

}
