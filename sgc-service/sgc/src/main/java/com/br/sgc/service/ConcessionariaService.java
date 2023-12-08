package com.br.sgc.service;

import com.br.sgc.domain.Concessionaria;
import com.br.sgc.repository.ConcessionariaRepository;
import com.br.sgc.service.dto.ConcessionariaDTO;
import com.br.sgc.service.dto.ConcessionariaListDTO;
import com.br.sgc.service.dto.DropdownDTO;
import com.br.sgc.service.mapper.ConcessionariaMapper;
import com.br.sgc.service.util.MensagemClienteUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class ConcessionariaService {

    private final ConcessionariaRepository repository;
    private final ConcessionariaMapper mapper;


    public List<ConcessionariaListDTO> buscarTodos() {
        return repository.buscarTodos();
    }

    public ConcessionariaDTO buscar(Integer id) {
        return mapper.toDto(findbyId(id));
    }

    private Concessionaria findbyId(Integer id){
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        MensagemClienteUtil.CONCESSIONARIA_NAO_ENCONTRADA));
    }

    public ConcessionariaDTO salvar(ConcessionariaDTO dto) {
        return mapper.toDto(repository.save(mapper.toEntity(dto)));
    }

    public void deletar(Integer id) {
        repository.deleteById(id);
    }

    public List<DropdownDTO> buscarDropdown(){
        return repository.buscarDropdown();
    }

}
