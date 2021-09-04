import React, {PureComponent} from 'react';
import {Avatar} from "antd";
import {LikeOutlined, EyeOutlined} from "@ant-design/icons"
import style from "./style.module.css";

class AuthorCard extends PureComponent {
    render() {
        return (
            <div className={style.authorCard}>
                <header>关于作者</header>
                <div className={style.authorInfo}>
                    <Avatar style={{marginRight: '12px'}} size={50}
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                    <div className={style.author}>
                        <div className={style.authorName}>小笑残虹</div>
                        <div className={style.metaBox} title='前端工程师 @公众号：小笑残虹'>前端工程师 @公众号：小笑残虹</div>
                    </div>
                </div>
                <div style={{paddingBottom: '10px'}}>
                    <div className={style.data}>
                        <div className={style.bg}>
                            <LikeOutlined style={{color: '#7BB9FF'}}/>
                        </div>
                        获得点赞 1,314
                    </div>
                    <div className={style.data}>
                        <div className={style.bg}>
                            <EyeOutlined style={{color: '#7BB9FF'}}/>
                        </div>
                        文章被阅读 28,277
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthorCard;