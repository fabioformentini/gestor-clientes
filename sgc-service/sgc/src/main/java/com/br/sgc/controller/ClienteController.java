package com.br.sgc.controller;

import com.br.sgc.service.ClienteService;
import com.br.sgc.service.dto.ClienteDTO;
import com.br.sgc.service.dto.ClienteListDTO;
import com.br.sgc.service.dto.FiltroDTO;
import com.br.sgc.service.dto.PessoaFisicaDTO;
import com.br.sgc.service.dto.PessoaJuridicaDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/cliente")
public class ClienteController {

    private final ClienteService service;

    @PostMapping("/buscar")
    public Page<ClienteListDTO> buscar(Pageable pageable, @RequestBody FiltroDTO filtroDTO){
        return service.buscar(pageable, filtroDTO);
    }

    @GetMapping("/pj/{id}")
    public ResponseEntity<ClienteDTO> buscarJuridica(@PathVariable Integer id) {
        ClienteDTO dto = service.buscarJuridica(id);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/pf/{id}")
    public ResponseEntity<ClienteDTO> buscarFisica(@PathVariable Integer id) {
        ClienteDTO dto = service.buscarFisica(id);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @PostMapping("/pj")
    public ResponseEntity<PessoaJuridicaDTO> salvar(@RequestBody PessoaJuridicaDTO pessoaJuridicaDTO) {
        return new ResponseEntity<>(service.salvarPJ(pessoaJuridicaDTO), HttpStatus.OK);
    }

    @PostMapping("/pf")
    public ResponseEntity<PessoaFisicaDTO> salvar(@RequestBody PessoaFisicaDTO pessoaFisicaDTO) {
        return new ResponseEntity<>(service.salvarPF(pessoaFisicaDTO), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarCliente(@PathVariable("id") Integer id){
        service.deletarCliente(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
