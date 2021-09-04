import React, {PureComponent} from 'react';
import style from './style.module.css';

class Pin extends PureComponent {
    render() {
        return (
            <div className={style.pin}>
                <div className={style.pinHeader}></div>
                <div className={style.pinBody}></div>
                <div className={style.pinFooter}></div>
            </div>
        );
    }
}

export default Pin;