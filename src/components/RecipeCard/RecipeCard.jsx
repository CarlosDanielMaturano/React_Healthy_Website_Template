import '../../styles/components/RecipeCard.scss';

export const RecipeCard = (props) => {
  const imagePath = `${process.env.PUBLIC_URL}/img/salad.jpg`;
  return (
    <div className="RecipeCard">
      <div className="image-container">
        <img src={imagePath} alt="salad" />
      </div>
      <div className="information">
        <h3>{props?.title || 'Fruit Salad'}</h3>
        <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
        </p>
      </div>
    </div>
  );
};
