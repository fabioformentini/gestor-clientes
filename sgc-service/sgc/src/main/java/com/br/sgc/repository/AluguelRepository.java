package com.br.sgc.repository;

import com.br.sgc.domain.Aluguel;
import com.br.sgc.service.dto.AluguelListDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AluguelRepository extends JpaRepository<Aluguel, Integer> {

    @Query("select new com.br.sgc.service.dto.AluguelListDTO(" +
            "a.id, " +
            "a.cliente.nome, " +
            "a.carro.placa, " +
            "a.dataLocacao, " +
            "a.dataDevolucao) From Aluguel a")
    List<AluguelListDTO> buscarTodos();
}
