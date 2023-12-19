package com.br.sgc.service.mapper;

import com.br.sgc.domain.Aluguel;
import com.br.sgc.service.dto.AluguelDTO;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AluguelMapper extends EntityMapper<AluguelDTO, Aluguel> {

    @Override
    @Mapping(source = "cliente.id", target = "idCliente")
    @Mapping(source = "carro.id", target = "idCarro")
    AluguelDTO toDto(Aluguel aluguel);

    @Override
    @InheritInverseConfiguration
    Aluguel toEntity(AluguelDTO aluguelDTO);
}
