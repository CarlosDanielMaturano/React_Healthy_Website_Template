import '../../styles/components/RecipesSection.scss';
import RecipeCard from '../RecipeCard';
import Title from '../Title';

export const RecipesSection = () => {
  return (
    <section className="RecipesSection">
      <Title>{"And we'll found the best combination for you"}</Title>
      <div className="cards">
        <RecipeCard></RecipeCard>
        <RecipeCard></RecipeCard>
        <RecipeCard></RecipeCard>
        <RecipeCard></RecipeCard>
        <RecipeCard></RecipeCard>
        <RecipeCard></RecipeCard>
      </div>
    </section>
  );
};
