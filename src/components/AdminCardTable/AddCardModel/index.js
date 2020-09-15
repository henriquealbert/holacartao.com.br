import Link from 'next/link';
import * as S from './styled';

export default function AddCardModel() {
  return (
    <S.AddBtnWrapper>
      <Link href="/admin/card-models/add">
        <a>
          <button>+</button>
        </a>
      </Link>
    </S.AddBtnWrapper>
  );
}
