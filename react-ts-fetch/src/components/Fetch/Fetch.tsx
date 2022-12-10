import React, { FC, useState, useEffect } from 'react';
import { IFetchProps } from './types';
import './Fetch.scss';

const Fetch: FC<IFetchProps> = ({ username }) => {
    
    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!username) return;
        setLoading(true);
        (async function fetchProfile() {
            return await fetch(`https://api.github.com/users/${username}`, {
                method: "GET",
                headers: {
                    Authorization: "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"
                }
            })
                .then(res => res.json())
                .then(data => setData(data))
                .then(() => setLoading(false))
        })()
    },[username]);

    if (loading) return <div className='fetch'>Loading...</div>;
    if (data?.message) return <div className='fetch'>Something went wrong...</div>;

    return (
        <div className="fetch">
          <div className="container">
            <img
              src={data?.avatar_url}
              alt={data?.login}
            />
            <div className='info'>
              <h1>{data?.login}</h1>
              {data?.name && <p>{data?.name}</p>}
              {data?.location && <p>{data?.location}</p>}
            </div>
          </div>
      </div>
    );
};

export default Fetch;