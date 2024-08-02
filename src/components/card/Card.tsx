import { ReactNode } from 'react';
import MuiCard from '@mui/material/Card';
import MuiCardContent from '@mui/material/CardContent';
import MuiCardHeader from '@mui/material/CardHeader';

// import Title from '../title/Title';

import './card.css';

interface Props {
  title: string;
  children: ReactNode;
}

const Card = ({ title, children }: Props) => {
  return (
    <article>
        <MuiCard
            className='card'
            sx={{
                border: 4,
            }}
        >
            <MuiCardHeader title={title} />
            <MuiCardContent>{children}</MuiCardContent>
        </MuiCard>
    </article>
    // <article className="card">
    //   <Title text={title} />
    //   {children}
    // </article>
  );
};

export default Card;
