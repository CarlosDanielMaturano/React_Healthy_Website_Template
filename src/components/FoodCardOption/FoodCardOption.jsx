import '../../styles/components/FoodCardOption.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';

export const FoodCardOption = (props) => {
  return (
    <div className="FoodCardOption">
      <FontAwesomeIcon className="icon" icon={props?.icon || faAppleAlt} />
      <h2 className="label">{props?.label || 'label'}</h2>
    </div>
  );
};
