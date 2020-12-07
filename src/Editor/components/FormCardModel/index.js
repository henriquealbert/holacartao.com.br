import FormCardModelAdd from './AddEditor';
import FormCardModelEdit from './EditEditor';

export default function FormCardModel({ infoCard, onClose }) {
  return (
    <>
      {infoCard === undefined ? (
        <FormCardModelAdd onClose={onClose} />
      ) : (
        <FormCardModelEdit infoCard={infoCard} onClose={onClose} />
      )}
    </>
  );
}
