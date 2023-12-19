package com.br.sgc.repository;

import com.br.sgc.domain.Carro;
import com.br.sgc.service.dto.CarroListDTO;
import com.br.sgc.service.dto.DropdownDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarroRepository extends JpaRepository<Carro, Integer> {

    @Query("select new com.br.sgc.service.dto.CarroListDTO(c.id, c.placa, c.modelo, c.concessionaria.nome, c.ano, c.ativo) From Carro c")
    List<CarroListDTO> buscarTodos();

    @Query("select new com.br.sgc.service.dto.DropdownDTO(c.id, concat(c.modelo,'-',c.placa)) From Carro c " +
            "left Join Aluguel a on a.carro.id = c.id where a.dataDevolucao is not null or a.dataLocacao is null")
    List<DropdownDTO> buscarDropdown();
}
