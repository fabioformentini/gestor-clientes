package com.br.sgc.service.dto;

import com.br.sgc.domain.Telefone;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class ClienteDTO implements Serializable {
    private Integer id;
    private String nome;
    private Boolean tipo;
    private LocalDate dataCadastro;
    private Boolean status;
    private List<Telefone> telefones = new ArrayList<>();
}
