import React, {useContext} from 'react'
import {Transection} from './Transection';

import {GlobalContext} from '../context/GlobalState';

export const TransectionList = () => {
    const { transections } = useContext(GlobalContext);
    return (
        <>
            <h3>History</h3>
            <div className="ex-tbl table-responsive shadow p-3 rounded">
                <table className="table table-hover table-custom spacing5">
                    <thead>
                        <tr>
                            <th>Income/Expense</th>
                            <th className="w60 text-right">Amount</th>
                            <th className="w100">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transections.map( transection => (<Transection key={transection.id} transection = {transection}/>) )}
                    </tbody>
                </table>
            </div>
        </>
    )
}
