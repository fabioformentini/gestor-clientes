package com.br.sgc.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@Entity
@Table(name = "carro")
@NoArgsConstructor
@AllArgsConstructor
public class Carro implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "placa", nullable = false)
    private String placa;

    @Column(name = "modelo", nullable = false)
    private String modelo;

    @Column(name = "ano", nullable = false)
    private Integer ano;

    @ManyToOne
    @JoinColumn(name = "id_concessionaria")
    private Concessionaria concessionaria;

    @Column(name = "ativo")
    private Boolean ativo;
}
