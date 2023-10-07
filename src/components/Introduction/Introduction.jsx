import '../../styles/components/Introduction.scss';
import Banner from '../Banner';
import Button from '../Button';
import Title from '../Title';

export const Introduction = () => {
  return (
    <Banner>
      <div className="Introduction">
        <Title>We help you to eat better.</Title>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit mollitia
          enim aperiam odio cumque modi nesciunt, expedita, esse qui tempore eum
        </p>
        <Button>click me</Button>
      </div>
    </Banner>
  );
};
