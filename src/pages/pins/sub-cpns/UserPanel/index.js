import React, {PureComponent} from 'react';
import {Avatar, Divider} from 'antd';
import style from "./style.module.css"

class UserPanel extends PureComponent {
    render() {
        return (
            <div className={style.userPanel}>
                <div className={style.header}>
                    <Avatar size={60} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                    <div className={style.nickName}>
                        <p className={style.nickname}>小笑残虹</p>
                        <p className={style.tag}>前端工程师 @ 小笑残虹</p>
                    </div>
                </div>
                <div className={style.footer}>
                    <div className={style.item}>
                        <p className={style.text}>沸点</p>
                        <p className={style.data}>2</p>
                    </div>
                    <Divider style={{height: '33px'}} type="vertical"/>
                    <div className={style.item}>
                        <p className={style.text}>关注</p>
                        <p className={style.data}>43</p>
                    </div>
                    <Divider style={{height: '33px'}} type="vertical"/>
                    <div className={style.item}>
                        <p className={style.text}>关注者</p>
                        <p className={style.data}>5</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserPanel;