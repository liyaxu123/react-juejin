import React, {PureComponent} from 'react';

import style from "./style.module.css"
import qrCode from "../../assets/img/1.png";

class Juejin extends PureComponent {
    render() {
        return (
            <div className={style.card2}>
                <div className={style.qrcode}>
                    <img src={qrCode} alt="二维码"/>
                </div>
                <div>
                    <p className={style.headline}>下载掘金客户端</p>
                    <p className={style.desc}>一个帮助开发者成长的社区</p>
                </div>
            </div>
        );
    }
}

export default Juejin;