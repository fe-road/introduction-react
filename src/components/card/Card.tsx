import { ReactNode } from 'react';

import Title from '../title/Title';

interface Props {
    title: string;
    children: ReactNode;
}

const Card = ({ title, children }: Props) => {
    return (
        <>
            <Title text={title} />
            {children}
        </>
    );
}

export default Card;