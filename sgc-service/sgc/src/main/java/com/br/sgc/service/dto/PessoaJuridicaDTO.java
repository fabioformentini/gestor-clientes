package com.br.sgc.service.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PessoaJuridicaDTO extends ClienteDTO{

    private String cnpj;

    private String ie;
}
