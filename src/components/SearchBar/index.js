import React from 'react';
import { Input, ContainerInput } from "./style"

export function SearchBar({ searchInput, search, handleSearch, placeholder }) {
  return (
    <ContainerInput>
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