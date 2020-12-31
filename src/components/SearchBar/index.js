import React from 'react';
import BackButton from "../BackButton";
import { Input, ContainerInput } from "./style";

export function SearchBar({ searchInput, search, handleSearch, placeholder }) {
  return (
    <ContainerInput>
      {placeholder !== "Artistas" && <BackButton />}
      <Input
        type="text"
        ref={searchInput}
        defaultValue={search.values}
        onChange={handleSearch}
        placeholder={`Buscar ${placeholder}`}
      />
    </ContainerInput>
  )
}