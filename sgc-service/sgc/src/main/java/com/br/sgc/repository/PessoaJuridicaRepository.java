package com.br.sgc.repository;

import com.br.sgc.domain.PessoaJuridica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PessoaJuridicaRepository extends JpaRepository<PessoaJuridica, Integer> {

    boolean existsByCnpj(String cnpj);
}
