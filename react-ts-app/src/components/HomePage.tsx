import React, {FC} from 'react';

interface HomePageProps {
    title: string;
}

const HomePage: FC<HomePageProps> = ({ title }) => {
    return (
        <div className='home-page'>
            <h1>{title}</h1>
        </div>
    );
};

export default HomePage;