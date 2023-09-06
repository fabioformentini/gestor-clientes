package com.br.sgc.service.mapper;


import com.br.sgc.domain.Cliente;
import com.br.sgc.service.dto.ClienteDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ClienteMapper extends EntityMapper<ClienteDTO, Cliente>{
}