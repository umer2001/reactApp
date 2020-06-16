import React, {useContext} from 'react'

import {GlobalContext} from '../context/GlobalState';

export const IncomeExpence = () => {
    const { transections } = useContext(GlobalContext);

    const amounts = transections.map(transection => transection.amount);
    const income = amounts
    .filter(item => item > 0)
    .reduce( (acc, item) => (acc += item), 0 )
    .toFixed(0);

    const expense = amounts
    .filter(item => item < 0)
    .reduce( (acc, item) => (acc += item), 0 )*-1
    .toFixed(0);

    return (
        <div className="row">
            <div className="col-5 d-left shadow p-3 mt-3 mb-3 rounded">
                <h4>Income</h4>
                <p>PKR {income}</p>
            </div>
            <div className="col-5 d-right shadow p-3 mt-3 mb-3 rounded">
                <h4>Expence</h4>
                <p>PKR {expense}</p>
            </div>
        </div>
    )
}
