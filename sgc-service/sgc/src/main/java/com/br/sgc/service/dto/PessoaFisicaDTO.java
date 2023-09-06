package com.br.sgc.service.dto;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PessoaFisicaDTO extends ClienteDTO{

    private String cpf;

    private String rg;
}
