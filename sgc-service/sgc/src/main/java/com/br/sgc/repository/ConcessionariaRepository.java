package com.br.sgc.repository;

import com.br.sgc.domain.Concessionaria;
import com.br.sgc.service.dto.ConcessionariaListDTO;
import com.br.sgc.service.dto.DropdownDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ConcessionariaRepository extends JpaRepository<Concessionaria, Integer> {

    @Query("select new com.br.sgc.service.dto.ConcessionariaListDTO(c.id, c.nome, c.endereco) From Concessionaria c")
    List<ConcessionariaListDTO> buscarTodos();


    @Query("select new com.br.sgc.service.dto.DropdownDTO(c.id, c.nome) From Concessionaria c ")
    List<DropdownDTO> buscarDropdown();


}
