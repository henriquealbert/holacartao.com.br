import { FormControl, FormLabel, Select } from '@chakra-ui/react';

export default function SelectCategory({
  setCategoria,
  cardCategories,
  setCurrentPage
}) {
  const handleChange = (value) => {
    setCategoria(value);
    setCurrentPage(10);
  };

  return (
    <FormControl maxW="280px" m="0 auto">
      <FormLabel textAlign="center">Selecione uma Categoria</FormLabel>
      <Select
        onChange={({ target }) => handleChange(target.value)}
        border="3px solid"
        borderColor="brand.200"
        h="50px"
        size="lg"
      >
        <option value="All">Todos os Modelos</option>
        {cardCategories?.map((category) => {
          return (
            <option key={category.id} value={category.title}>
              {category.title}
            </option>
          );
        })}
      </Select>
    </FormControl>
  );
}
