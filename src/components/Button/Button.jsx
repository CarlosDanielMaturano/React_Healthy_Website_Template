import '../../styles/components/Button.scss';

export const Button = (props) => {
  const value = props?.children || 'submit';
  return (
    <>
      <button className="Button" value={value}>
        {value}
      </button>
    </>
  );
};
