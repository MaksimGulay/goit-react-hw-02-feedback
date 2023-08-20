import { Heading1 } from './section-style';

export const Section = ({ title, children }) => {
  return (
    <section>
      <Heading1>{title}</Heading1>
      {children}
    </section>
  );
};
