package com.liosha.springangular.model;


import jakarta.persistence.*;

@Entity
@Table(name = "settings")
public class Setting {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "useremaileUniq")
    private Boolean useremaileUniq;

}
