package com.br.sgc.service.dto;

import com.br.sgc.domain.Telefone;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;


@Getter
@Setter
@AllArgsConstructor
public class ClienteListDTO implements Serializable {
    private Integer id;
    private Boolean tipo;
    private String nome;
    private String cpfOrCnpj;
    private String rgOrIe;
    private Boolean status;
}
