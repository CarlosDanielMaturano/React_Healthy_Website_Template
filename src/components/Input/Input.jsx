import '../../styles/components/Input.scss';

export const Input = (props) => {
  return (
    <>
      <input
        className="Input"
        value={props?.value || null}
        placeholder={props?.placeholder || ''}
        required={props?.required || true}
        id={props?.id}
        name={props?.name}
        type={props?.type || null}
      />
    </>
  );
};
