package com.br.sgc.service.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class AluguelDTO implements Serializable {

    private Integer id;
    private Integer idCarro;
    private Integer idCliente;
    private LocalDate dataLocacao;
    private LocalDate dataDevolucao;

}
