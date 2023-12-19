package com.br.sgc.service;

import com.br.sgc.domain.Carro;
import com.br.sgc.repository.CarroRepository;
import com.br.sgc.service.dto.CarroDTO;
import com.br.sgc.service.dto.CarroListDTO;
import com.br.sgc.service.dto.DropdownDTO;
import com.br.sgc.service.mapper.CarroMapper;
import com.br.sgc.service.util.MensagemCarroUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class CarroService {

    private final CarroRepository repository;
    private final CarroMapper mapper;


    public List<CarroListDTO> buscarTodos() {
        return repository.buscarTodos();
    }

    public CarroDTO buscar(Integer id) {
        return mapper.toDto(findbyId(id));
    }

    private Carro findbyId(Integer id){
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        MensagemCarroUtil.CARRO_NAO_ENCONTRADA));
    }

    public CarroDTO salvar(CarroDTO dto) {
        return mapper.toDto(repository.save(mapper.toEntity(dto)));
    }

    public void deletar(Integer id) {
        repository.deleteById(id);
    }

    public List<DropdownDTO> buscarDropdown(Integer id){
        return repository.buscarDropdown(id);
    }

}
