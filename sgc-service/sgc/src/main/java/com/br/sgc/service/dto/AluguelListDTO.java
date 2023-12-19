package com.br.sgc.service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
public class AluguelListDTO implements Serializable {

    private Integer id;
    private String nomeCliente;
    private String placaCarro;
    private LocalDate dataLocacao;
    private LocalDate dataDevolucao;

}
