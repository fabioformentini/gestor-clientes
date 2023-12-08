package com.br.sgc.controller;

import com.br.sgc.service.ConcessionariaService;
import com.br.sgc.service.dto.ConcessionariaDTO;
import com.br.sgc.service.dto.ConcessionariaListDTO;
import com.br.sgc.service.dto.DropdownDTO;
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
@RequestMapping("/api/concessionaria")
public class ConcessionariaController {

    private final ConcessionariaService service;

    @GetMapping
    public ResponseEntity<List<ConcessionariaListDTO>> buscarTodas(){
        List<ConcessionariaListDTO> dto = service.buscarTodos();
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ConcessionariaDTO> buscarPorID(@PathVariable("id") Integer id){
        ConcessionariaDTO dto = service.buscar(id);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/dropdown")
    public ResponseEntity<List<DropdownDTO>> preencherDropdwon(){
        List<DropdownDTO> dto = service.buscarDropdown();
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ConcessionariaDTO> salvar(@RequestBody ConcessionariaDTO classeDto){
        ConcessionariaDTO dto = service.salvar(classeDto);
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<ConcessionariaDTO> editar(@RequestBody ConcessionariaDTO classeDto){
        ConcessionariaDTO dto = service.salvar(classeDto);
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable("id") Integer id){
        service.deletar(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
