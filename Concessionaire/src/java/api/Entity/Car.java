package api.Entity;

import java.util.UUID;

public class Car {
    private final UUID id; // final é uma constante e precisa ser criada com um valor
    private final String model;
    private final String renavan;
    private final String color;
    private final int year;
    private final double value;
    private final String photograph;
    private final boolean sold;

    public Car(String model, String renavan, String color, int year, double value, String photograph, boolean sold) {
        this.id = UUID.randomUUID();
        this.model = model;
        this.renavan = renavan;
        this.color = color;
        this.year = year;
        this.value = value;
        this.photograph = photograph;
        this.sold = sold;
    }
    
    public UUID getId() {
        return id;
    }

    public String getModel() {
        return model;
    }

    public String getRenavan() {
        return renavan;
    }

    public String getColor() {
        return color;
    }

    public int getYear() {
        return year;
    }

    public double getValue() {
        return value;
    }

    public String getPhotograph() {
        return photograph;
    }

    public boolean isSold() {
        return sold;
    }
    
    
}
