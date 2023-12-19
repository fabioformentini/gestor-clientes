package com.br.sgc.controller;

import com.br.sgc.service.AluguelService;
import com.br.sgc.service.dto.AluguelDTO;
import com.br.sgc.service.dto.AluguelListDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/aluguel")
public class AluguelController {

    private final AluguelService service;

    @GetMapping
    public ResponseEntity<List<AluguelListDTO>> buscarTodas(){
        List<AluguelListDTO> dto = service.buscarTodos();
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AluguelDTO> buscarPorID(@PathVariable("id") Integer id){
        AluguelDTO dto = service.buscar(id);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }


    @PostMapping
    public ResponseEntity<AluguelDTO> salvar(@RequestBody AluguelDTO carroDTO){
        AluguelDTO dto = service.salvar(carroDTO);
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<AluguelDTO> editar(@RequestBody AluguelDTO carroDTO){
        AluguelDTO dto = service.salvar(carroDTO);
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable("id") Integer id){
        service.deletar(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
