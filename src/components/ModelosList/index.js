import * as S from './styled';
import { useState } from 'react';
import Link from 'next/link';

export default function ModelosList({ data }) {
  const { cardModels } = data;
  const { cardCategories } = data;

  const [categoria, setCategoria] = useState('All');
  const categoriesList = cardModels.filter(
    (model) => model.card_category.title === categoria
  );

  return (
    <S.ModelosWrapper>
      <h1>Escolha um modelo para customizar</h1>
      <S.TextWrapper>
        <p>
          Crie seu próprio cartão de visita à partir de modelo em branco{' '}
          <Link
            href={{
              pathname: '/editor/',
              query: { url: 'editor/' }
            }}
          >
            <a>clicando aqui</a>
          </Link>
        </p>
        <p>Ou clique em um modelo abaixo para personalizar. </p>
      </S.TextWrapper>

      <S.SelectModelo>
        <p>Filtrar por Categoria:</p>
        <select
          name="category"
          id="category"
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="All">Todos os Modelos</option>
          {cardCategories.map((category) => {
            return (
              <option key={category.id} value={category.title}>
                {category.title}
              </option>
            );
          })}
        </select>
      </S.SelectModelo>

      <S.ModeloGrid>
        {categoria === 'All'
          ? cardModels.map((model) => {
              return (
                <S.Modelo key={model.id}>
                  <Link
                    href={{
                      pathname: `/editor/${model.slug}`,
                      query: { url: `/editor/${model.slug}`, card: model.id }
                    }}
                  >
                    <a>
                      <S.ModeloContent>{model.title}</S.ModeloContent>
                    </a>
                  </Link>
                </S.Modelo>
              );
            })
          : categoriesList.map((model) => {
              return (
                <S.Modelo key={model.id}>
                  <Link
                    href={{
                      pathname: `/editor/${model.slug}`,
                      query: { url: `/editor/${model.slug}`, card: model.id }
                    }}
                  >
                    <a>
                      <S.ModeloContent>{model.title}</S.ModeloContent>
                    </a>
                  </Link>
                </S.Modelo>
              );
            })}
      </S.ModeloGrid>
    </S.ModelosWrapper>
  );
}
