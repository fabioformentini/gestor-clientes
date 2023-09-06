package com.br.sgc.repository;

import com.br.sgc.domain.Cliente;
import com.br.sgc.service.dto.ClienteListDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

    @Query("select new com.br.sgc.service.dto.ClienteListDTO(" +
            "c.id, " +
            "c.tipo, " +
            "c.nome, " +
            "CASE WHEN" +
            "       c.tipo = true then pf.cpf else pj.cnpj end, " +
            "CASE WHEN " +
            "       c.tipo = true then pf.rg else pj.ie end, " +
            "c.status) " +
            "from " +
            "   Cliente c " +
            "       left join " +
            "               PessoaFisica pf on pf.id = c.id " +
            "       left join " +
            "               PessoaJuridica pj on pj.id = c.id ")
    Page<ClienteListDTO> buscarClientes(Pageable pageable);
}
