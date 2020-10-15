import * as S from './styled';

export default function CardImgs({ data }) {
  const frente = data?.order.cartao_frente;
  const verso = data?.order.cartao_verso;
  const orderID = data?.order.id;

  function downloadURI(uri, name) {
    const link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <S.Wrapper>
      <img
        src={frente}
        alt={`2020${orderID}_cartao_frente.jpg`}
        title={`2020${orderID}_cartao_frente.jpg`}
        onClick={() => downloadURI(frente, `2020${orderID}_cartao_frente.jpg`)}
      />

      <img
        src={verso}
        alt={`2020${orderID}_cartao_verso.jpg`}
        title={`2020${orderID}_cartao_verso.jpg`}
        onClick={() => downloadURI(verso, `2020${orderID}_cartao_verso.jpg`)}
      />
    </S.Wrapper>
  );
}
