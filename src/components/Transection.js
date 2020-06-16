import React, {useContext} from 'react'

import {GlobalContext} from '../context/GlobalState';

export const Transection = ({transection}) => {
    const { deleteTransection } = useContext(GlobalContext);

    const sign = transection.amount < 0 ? '-' : '+';
    const borderColor = transection.amount < 0 ? 'danger' : 'success';

    return (
        <tr>
            <td>
                <label className="fancy-checkbox">
                    <span>{transection.text}</span>
                </label>
            </td>
            <td className="text-right">{sign}{Math.abs(transection.amount)}</td>
            <td className={borderColor}>
                <button onClick={() => deleteTransection(transection.id)} className="btn btn-danger">X</button>
            </td>
        </tr>
    )
}
