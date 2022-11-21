import { FC } from 'react';

type AddressType = {
  city: string | null,
  zipcode: string | null
}

const initialState = {
  name: null as string | null,
  surname: null as string | null,
  isSamurai: null as boolean | null,
  address: {
    city: null,
    zipcode: null
  } as AddressType,
  addresses: [] as Array<AddressType>
}

export type InitialStateType = typeof initialState;

let state: InitialStateType = {
  name: null,
  surname: null,
  isSamurai: null,
  address: {
    city: null,
    zipcode: null
  },
  addresses: [
    {
      city: null,
      zipcode: null
    },
    {
      city: null,
      zipcode: null
    }
  ]
}

const App: FC = () => {
  return (
    <div>

    </div>
  );
};

export default App;
