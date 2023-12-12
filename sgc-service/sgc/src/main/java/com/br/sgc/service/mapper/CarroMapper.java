package com.br.sgc.service.mapper;

import com.br.sgc.domain.Carro;
import com.br.sgc.service.dto.CarroDTO;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CarroMapper extends EntityMapper<CarroDTO, Carro>{

    @Override
    @Mapping(source = "concessionaria.id", target = "idConcessionaria")
    CarroDTO toDto(Carro carro);

    @Override
    @InheritInverseConfiguration
    Carro toEntity(CarroDTO carroListDTO);
}
