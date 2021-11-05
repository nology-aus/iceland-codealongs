package org.example;

import lombok.Getter;
import lombok.Setter;

class TriangleException extends Exception {
    public TriangleException(String message) {
        super(message);
    }
}

public class RegularTriangle {
    @Getter
    @Setter
    private Double side = null;

    public RegularTriangle() {}
    public RegularTriangle(Double side) {
        this.side = side;
    }

    public Double getPerimeter() throws TriangleException {
        // Check if side is null
        if (this.side == null) {
            // if it nulls I want to throw and error / exception
            throw new TriangleException("RegularTriangle: side is not set");
        }

        if (this.side <= 0) {
            throw new TriangleException("RegularTriangle: Sides must be positive doubles");
        }

        return this.side * 3;
    }
}
