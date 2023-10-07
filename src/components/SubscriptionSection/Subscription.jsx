import '../../styles/components/SubscriptionSection.scss';
import Input from '../Input';
import Title from '../Title';
import Button from '../Button';

export const SubscriptionSection = () => {
  const preventDefault = (e) => e.preventDefault();

  return (
    <form className="Subscription" onSubmit={preventDefault}>
      <Title>Subscribe</Title>
      <p>{' Subscribe to recive new daily healthy recipes'}</p>
      <Input placeholder="E-email" id="email" name="email" type="email" />
      <Button>subscribe</Button>
    </form>
  );
};
