package com.br.sgc.service.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
public class CarroDTO implements Serializable {

    private Integer id;
    private String placa;
    private String modelo;
    private Integer ano;
    private Integer idConcessionaria;
    private Boolean ativo;

}
