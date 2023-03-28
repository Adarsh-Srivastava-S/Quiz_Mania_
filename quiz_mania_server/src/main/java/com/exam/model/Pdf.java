package com.exam.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Pdf {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String name;
    @Column(name = "pdf", unique = false, nullable = false, length = 10000)
    private byte[] pdf;
    private Long userid;


    public Pdf() {
    }
}


