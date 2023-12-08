package com.br.sgc.service.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class ConcessionariaDTO implements Serializable {

    private String id;
    private String nome;
    private String endereco;

}
