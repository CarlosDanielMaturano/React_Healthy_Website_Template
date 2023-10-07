import FoodOptions from './components/FoodOptions';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import RecipesSection from './components/RecipesSection';
import { SubscriptionSection } from './components/SubscriptionSection/Subscription';
import './styles/components/App.scss';

const App = () => {
  return (
    <div className="App">
      <Introduction />
      <FoodOptions />
      <RecipesSection />
      <SubscriptionSection />
      <Footer></Footer>
    </div>
  );
};

export default App;
