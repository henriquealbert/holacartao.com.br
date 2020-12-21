import Link from 'next/link';
import SearchInput, { createFilter } from 'react-search-input';
import { useState } from 'react';
import { useFetchAdmin } from '@/hooks/useFetchAdmin';
import GET_ALL_ORDERS from '@/graphql/admin/GetAllOrders';

import * as S from './styled';

export default function AdminSearch() {
  const { data, error } = useFetchAdmin(GET_ALL_ORDERS);

  const [searchTerm, setSearchTerm] = useState('');

  const KEYS_TO_FILTERS = ['id', 'address.email', 'address.cep'];

  const filtered = data?.orders.filter(
    createFilter(searchTerm, KEYS_TO_FILTERS)
  );

  const searchUpdated = (term) => {
    setSearchTerm(term);
  };

  if (error) {
    return (
      <S.SeachWrapper>
        <div>
          <p style={{ color: 'red' }}>
            Erro ao conectar com o servidor. Por favor, tente novamente.
          </p>
        </div>
      </S.SeachWrapper>
    );
  }

  return (
    <S.SeachWrapper>
      <S.SearchInputWrapper>
        <SearchInput onChange={searchUpdated} />
        <S.SearchIcon />
      </S.SearchInputWrapper>
      {searchTerm === '' ? null : (
        <S.DropdownList>
          {filtered?.map((item) => {
            return (
              <S.UserInfo key={item.id}>
                <Link
                  href="/admin/dashboard/[id]"
                  as={`/admin/dashboard/2020${item.id}`}
                >
                  <a>
                    <ul>
                      <li>
                        Pedido:<span>{item.id}</span>
                      </li>
                      <li>
                        Email:<span>{item.address?.email}</span>
                      </li>
                      <li>
                        {item.docType}:<span>{item.docNumber}</span>
                      </li>
                      <li>
                        CEP:<span>{item.address?.cep}</span>
                      </li>
                    </ul>
                  </a>
                </Link>
              </S.UserInfo>
            );
          })}
        </S.DropdownList>
      )}
    </S.SeachWrapper>
  );
}
