import { ReactNode } from 'react';

import Title from '../title/Title';

import './card.css';

interface Props {
  title: string;
  children: ReactNode;
}

const Card = ({ title, children }: Props) => {
  return (
    <article className="card">
      <Title text={title} />
      {children}
    </article>
  );
};

export default Card;
