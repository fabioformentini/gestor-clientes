package com.br.sgc.service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
public class CarroListDTO implements Serializable {

    private Integer id;
    private String placa;
    private String modelo;
    private String nomeConcessionaria;
    private Integer ano;
    private Boolean ativo;

}
