package com.br.sgc.service;

import com.br.sgc.domain.Cliente;
import com.br.sgc.domain.PessoaFisica;
import com.br.sgc.domain.PessoaJuridica;
import com.br.sgc.repository.ClienteRepository;
import com.br.sgc.repository.PessoaFisicaRepository;
import com.br.sgc.repository.PessoaJuridicaRepository;
import com.br.sgc.service.dto.ClienteListDTO;
import com.br.sgc.service.dto.FiltroDTO;
import com.br.sgc.service.dto.PessoaFisicaDTO;
import com.br.sgc.service.dto.PessoaJuridicaDTO;
import com.br.sgc.service.mapper.PessoaFisicaMapper;
import com.br.sgc.service.mapper.PessoaJuridicaMapper;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Transactional
@RequiredArgsConstructor
@Service
public class ClienteService {

    private final ClienteRepository clienteRepository;
    private final PessoaJuridicaMapper pessoaJuridicaMapper;
    private final PessoaFisicaMapper pessoaFisicaMapper;
    private final PessoaFisicaRepository pessoaFisicaRepository;
    private final PessoaJuridicaRepository pessoaJuridicaRepository;


    public Page<ClienteListDTO> buscar(Pageable pageable, FiltroDTO filtroDTO){
        return clienteRepository.buscarClientes(pageable, filtroDTO);
    }

    private Cliente buscarCliente(Integer id) {
        return clienteRepository.findById(id).orElseThrow( () -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Nao achou"));
    }

    public PessoaJuridicaDTO buscarJuridica(Integer id) {
        return pessoaJuridicaMapper.toDto(buscarPJ(id));
    }

    public PessoaFisicaDTO buscarFisica(Integer id) {
        return pessoaFisicaMapper.toDto(buscarPF(id));
    }

    private PessoaJuridica buscarPJ(Integer id) {
        return pessoaJuridicaRepository.findById(id).orElseThrow( ()-> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Nao encontrado"));
    }

    private PessoaFisica buscarPF(Integer id) {
        return pessoaFisicaRepository.findById(id).orElseThrow( ()-> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Nao encontrado"));
    }

    public PessoaFisicaDTO salvarPF(PessoaFisicaDTO pessoaFisicaDTO) {
        return pessoaFisicaMapper.toDto(pessoaFisicaRepository.save(pessoaFisicaMapper.toEntity(pessoaFisicaDTO)));
    }

    public PessoaJuridicaDTO salvarPJ(PessoaJuridicaDTO pessoaJuridicaDTO) {
        return pessoaJuridicaMapper.toDto(pessoaJuridicaRepository.save(pessoaJuridicaMapper.toEntity(pessoaJuridicaDTO)));
    }

    public void deletarCliente(Integer id) {
        Cliente cliente = buscarCliente(id);
        cliente.setStatus(false);
        clienteRepository.save(cliente);
    }

}
