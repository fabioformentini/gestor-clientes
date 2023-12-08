package com.br.sgc.service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
public class ConcessionariaListDTO implements Serializable {

    private Integer id;
    private String nome;
    private String endereco;

}
