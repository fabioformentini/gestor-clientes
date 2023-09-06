package com.br.sgc.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Entity
@Getter
@Setter
@Table(name = "pessoa_juridica")
public class PessoaJuridica extends Cliente implements Serializable {
    @Column(name = "cnpj")
    private String cnpj;

    @Column(name = "ie")
    private String ie;
}
