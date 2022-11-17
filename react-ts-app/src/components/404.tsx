import React, {FC} from 'react';

interface NotFoundPageProps {
    title: string;
}

const NotFound: FC<NotFoundPageProps> = ({ title }) => {
    return (
        <div className='home-page'>
            <h1>{title}</h1>
        </div>
    );
};

export default NotFound;