import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators } from '../state/index'

export default function Shop() {
    const dispatch = useDispatch();
    return (
        <div>
            <div className="ontainer">
                <h3 className="my-3">Withdraw / Deposit Money</h3>
            <button className="btn-primary mx-2" onClick={()=>dispatch(actionCreators.withdrawMoney(100))}>-</button>
            Update Your Balance 
            <button className="btn-primary mx-2" onClick={()=>dispatch(actionCreators.depositMoney(100))}>+</button>

            </div>
        </div>
    )
}
