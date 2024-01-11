export interface CreateCategoryData {
  name: string;
}

export interface CategoryData extends CreateCategoryData {
  id: string;
  is_active: boolean;
}

export interface PokemonListData {
  name: string;
  sprites: {
    front_default: string;
  };
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
};