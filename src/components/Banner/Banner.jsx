import '../../styles/components/Banner.scss';

export const Banner = (props) => {
  const opacityValue = '0.6';
  const css = {
    backgroundImage: `
    linear-gradient(0deg, rgba(08, 08, 08, ${opacityValue}), rgba(08, 08, 08, ${opacityValue})),
    url('${process.env.PUBLIC_URL}/img/background.jpg')
    `,
  };
  return (
    <section className="Banner" style={css}>
      {props?.children}
    </section>
  );
};
