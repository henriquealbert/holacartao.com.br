import FormCardModelAdd from './AddEditor';
import FormCardModelEdit from './EditEditor';

export default function FormCardModel({ infoCard }) {
  return (
    <>
      {infoCard === undefined ? (
        <FormCardModelAdd />
      ) : (
        <FormCardModelEdit infoCard={infoCard} />
      )}
    </>
  );
}
