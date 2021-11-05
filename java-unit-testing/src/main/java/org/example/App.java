package org.example;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        RegularTriangle tri = new RegularTriangle(123D);
        System.out.printf("Side length %f%n", tri.getSide());
        tri.setSide(522D);
        System.out.printf("Side length %f%n", tri.getSide());

        tri.setSide(-100D);

        try {
            System.out.printf("Perimeter length %f%n", tri.getPerimeter());
        } catch (TriangleException error) {
            System.out.printf("getPerimeter has failed%n");
            System.out.printf("The Error: %s%n", error.toString());
        }
    }
}
