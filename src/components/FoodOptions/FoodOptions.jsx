import '../../styles/components/FoodOptions.scss';
import FoodCardOption from '../FoodCardOption';
import Title from '../Title';
import {
  faAppleAlt,
  faCarrot,
  faBowlRice,
  faDrumstickBite,
} from '@fortawesome/free-solid-svg-icons';

export const FoodOptions = () => {
  const cardsInfo = [
    { label: 'fruits', icon: faAppleAlt },
    { label: 'vegetables', icon: faCarrot },
    { label: 'grains', icon: faBowlRice },
    { label: 'meat', icon: faDrumstickBite },
  ];
  return (
    <section className="FoodOptions">
      <Title>Choose your favorite type of food</Title>
      <div className="options">
        {cardsInfo.map(({ label, icon }, _) => (
          <FoodCardOption label={label} icon={icon} />
        ))}
      </div>
    </section>
  );
};
