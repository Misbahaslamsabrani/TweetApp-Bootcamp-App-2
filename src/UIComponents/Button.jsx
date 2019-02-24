import React from 'react';

const Button = (props) => {
    
    const check = () => {
        const {t , cn , oc, d} = props;
        if(oc === undefined){
            return <button className={cn}>{t}</button>
        }
        else if(oc){
            return <button className={cn} onClick={() => {oc()}} ddisabled={d}>{t}</button>
        }
    }
    return(<div>
        {check()}
        </div>
    )
}
export default Button;