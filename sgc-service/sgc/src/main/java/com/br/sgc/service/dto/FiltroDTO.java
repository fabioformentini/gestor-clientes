package com.br.sgc.service.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class FiltroDTO implements Serializable {

    private String nome;
    private Boolean ativo;
}
