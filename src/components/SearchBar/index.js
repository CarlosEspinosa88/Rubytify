import React from 'react';
import { Input } from "./style"

export function SearchBar({ searchInput, search, handleSearch }) {

  return (
    <div>
      <Input
        type="text"
        ref={searchInput}
        defaultValue={search}
        onChange={handleSearch}
        placeholder="Buscar Artistas"
      />
    </div>
  )
}