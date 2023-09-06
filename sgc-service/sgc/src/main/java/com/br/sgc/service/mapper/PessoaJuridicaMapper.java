package com.br.sgc.service.mapper;

import com.br.sgc.domain.PessoaJuridica;
import com.br.sgc.service.dto.PessoaJuridicaDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PessoaJuridicaMapper extends EntityMapper<PessoaJuridicaDTO, PessoaJuridica> {
}
