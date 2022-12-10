import React, { FC, useState } from 'react';
import { IFormProps }  from './types'
import './Form.scss';

const Form: FC<IFormProps> = ({ setUser }) => {

    const [username, setUsername] = useState<string>("");

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {currentTarget: { value }} = e;
        setUsername(value);
    };

    const submitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUser(username);
    }

    return (
        <form onSubmit={submitHandler} className='form'>
            <div className="container">
                <h3>Find Repository</h3>
                <input onChange={(e) => onChangeHandler(e)} type="text" placeholder='Write username' />
                <button type='submit'>Find</button>
            </div>
        </form>
    );
};

export default Form;