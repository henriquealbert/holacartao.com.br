import { formatDateHour } from '@/utils/format';

import * as S from './styled';

export default function SingleOrderObsHistory({ order }) {
  return (
    <S.OrderObsHistory>
      <h3>Obs. registradas:</h3>
      {order?.observations
        .map((obs) => {
          return (
            <S.ObsItem key={obs.id}>
              <div>
                <p>{obs.description}</p>
                <small>{formatDateHour(obs.created_at)}</small>
              </div>
            </S.ObsItem>
          );
        })
        .reverse()}
    </S.OrderObsHistory>
  );
}
