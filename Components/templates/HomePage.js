import React from 'react';
import Card from '../module/Card';

const HomePage = ({coustomers}) => {
    return (
        <div>
            {coustomers.map(customer=>(
                <Card key={coustomers._id} customer={customer} />
            ))}
        </div>
    );
};

export default HomePage;