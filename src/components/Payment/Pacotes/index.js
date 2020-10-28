import {
  BasicPrice,
  StandardPrice,
  CinquecentoPrice
} from '../../PricingOptions';
import PricingRadio from '../../PricingRadio';

import * as S from './styled';

export default function Pacotes() {
  return (
    <S.PrincingOptionsWrapper>
      <S.OptionItem>
        <BasicPrice>
          <PricingRadio id="basic" value="79.90" />
        </BasicPrice>
      </S.OptionItem>
      <S.OptionItem>
        <StandardPrice>
          <PricingRadio id="standard" value="89.90" checked />
        </StandardPrice>
      </S.OptionItem>
      <S.OptionItem>
        <CinquecentoPrice>
          <PricingRadio id="cinquecento" value="119.90" />
        </CinquecentoPrice>
      </S.OptionItem>
    </S.PrincingOptionsWrapper>
  );
}
