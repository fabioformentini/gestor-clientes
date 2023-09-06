package com.br.sgc.controller;

import com.br.sgc.domain.Cliente;
import com.br.sgc.service.ClienteService;
import com.br.sgc.service.dto.ClienteDTO;
import com.br.sgc.service.dto.ClienteListDTO;
import com.br.sgc.service.dto.PessoaJuridicaDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/cliente")
public class ClienteController {

    private final ClienteService service;

    @PostMapping("/buscar")
    public Page<ClienteListDTO> buscar(Pageable pageable){
        return service.buscar(pageable);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClienteDTO> buscar(@PathVariable Integer id) {
        ClienteDTO dto = service.buscarJuridico(id);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<PessoaJuridicaDTO> salvar(@RequestBody PessoaJuridicaDTO pessoaJuridicaDTO) {
        return new ResponseEntity<>(service.salvarPJ(pessoaJuridicaDTO), HttpStatus.OK);
    }
}
