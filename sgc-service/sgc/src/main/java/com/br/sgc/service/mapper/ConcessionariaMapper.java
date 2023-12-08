package com.br.sgc.service.mapper;

import com.br.sgc.domain.Concessionaria;
import com.br.sgc.service.dto.ConcessionariaDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ConcessionariaMapper extends EntityMapper<ConcessionariaDTO, Concessionaria>{
}
