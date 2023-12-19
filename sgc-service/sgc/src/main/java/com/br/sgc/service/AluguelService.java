package com.br.sgc.service;

import com.br.sgc.domain.Aluguel;
import com.br.sgc.repository.AluguelRepository;
import com.br.sgc.service.dto.AluguelDTO;
import com.br.sgc.service.dto.AluguelListDTO;
import com.br.sgc.service.mapper.AluguelMapper;
import com.br.sgc.service.util.MensagemAluguelUtil;
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
public class AluguelService {

    private final AluguelRepository repository;
    private final AluguelMapper mapper;


    public List<AluguelListDTO> buscarTodos() {
        return repository.buscarTodos();
    }

    public AluguelDTO buscar(Integer id) {
        return mapper.toDto(findbyId(id));
    }

    private Aluguel findbyId(Integer id){
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        MensagemAluguelUtil.ALUGUEL_NAO_ENCONTRADA));
    }

    public AluguelDTO salvar(AluguelDTO dto) {
        return mapper.toDto(repository.save(mapper.toEntity(dto)));
    }

    public void deletar(Integer id) {
        repository.deleteById(id);
    }

}
