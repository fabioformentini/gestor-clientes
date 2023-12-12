package com.br.sgc.controller;

import com.br.sgc.service.CarroService;
import com.br.sgc.service.dto.CarroDTO;
import com.br.sgc.service.dto.CarroListDTO;
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
@RequestMapping("/api/carro")
public class CarroController {

    private final CarroService service;

    @GetMapping
    public ResponseEntity<List<CarroListDTO>> buscarTodas(){
        List<CarroListDTO> dto = service.buscarTodos();
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CarroDTO> buscarPorID(@PathVariable("id") Integer id){
        CarroDTO dto = service.buscar(id);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/dropdown")
    public ResponseEntity<List<DropdownDTO>> preencherDropdwon(){
        List<DropdownDTO> dto = service.buscarDropdown();
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<CarroDTO> salvar(@RequestBody CarroDTO carroDTO){
        CarroDTO dto = service.salvar(carroDTO);
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<CarroDTO> editar(@RequestBody CarroDTO carroDTO){
        CarroDTO dto = service.salvar(carroDTO);
        return new ResponseEntity<>(dto, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable("id") Integer id){
        service.deletar(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
