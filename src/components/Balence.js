import React, {useContext} from 'react'

import {GlobalContext} from '../context/GlobalState';

export const Balence = () => {
    const { transections } = useContext(GlobalContext);

    const amounts = transections.map(transection => transection.amount);
    const total = amounts.reduce( (acc, item) => (acc += item), 0 ).toFixed(0);
    const borderColor = total > 0 ? "blnc-p" : "blnc-n";

    return (
        <>
            <h4>Your Balence</h4>
            <h1 className={`${borderColor} blnc shadow p-3 rounded`}>PKR {total}</h1>
        </>
    )
}
