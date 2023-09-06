package com.br.sgc.service.mapper;

import com.br.sgc.domain.PessoaFisica;
import com.br.sgc.service.dto.PessoaFisicaDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PessoaFisicaMapper extends EntityMapper<PessoaFisicaDTO, PessoaFisica> {
}
