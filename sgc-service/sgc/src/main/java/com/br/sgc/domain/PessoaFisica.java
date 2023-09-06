package com.br.sgc.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Entity
@Table(name = "pessoa_fisica")
@Getter
@Setter
public class PessoaFisica extends Cliente implements Serializable {
    @Column(name = "cpf")
    private String cpf;

    @Column(name = "rg")
    private String rg;

}
