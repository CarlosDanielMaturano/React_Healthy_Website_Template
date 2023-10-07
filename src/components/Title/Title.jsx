import '../../styles/components/Title.scss';

export const Title = (props) => {
  return (
    <>
      <h2 className="Title">{props?.children || 'Title'}</h2>
    </>
  );
};
