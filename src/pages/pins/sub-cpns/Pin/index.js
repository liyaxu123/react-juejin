import React, {PureComponent} from 'react';
import {Avatar, Popover, Button, Divider} from 'antd';
import {LikeOutlined, MessageOutlined, ShareAltOutlined} from "@ant-design/icons"

import style from './style.module.css';

const content = (
    <div className={style.userInfo}>
        <div className={style.userInfoHeader}>
            <Avatar size={48} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
            <div className={style.nickName}>
                <p className={style.nickname}>小笑残虹</p>
                <p className={style.tag}>前端工程师 @ 小笑残虹</p>
            </div>
        </div>
        <div className={style.userData}>
            <div className={style.watcher}>
                <p className={style.watcherData}>40</p>
                <p className={style.wText}>关注</p>
            </div>
            <div className={style.watcher}>
                <p className={style.watcherData}>0</p>
                <p className={style.wText}>关注者</p>
            </div>
            <Button style={{marginLeft: '12px'}}>关注</Button>
        </div>
    </div>
);

class Pin extends PureComponent {
    render() {
        return (
            <div className={style.pin}>
                {/* 头部 */}
                <div className={style.pinHeader}>
                    <div className={style.pinHeaderLeft}>
                        {/*头像*/}
                        <Popover content={content}>
                            <Avatar size={45} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                        </Popover>
                        <div className={style.user}>
                            <p className={style.userNickname}>小笑残虹</p>
                            <p className={style.pinTime}>前端工程师 @ 小笑残虹 · 3分钟前</p>
                        </div>
                    </div>
                    <Button>关注</Button>
                </div>
                {/* 内容 */}
                <div className={style.pinBody}>
                    <p className={style.contentBox}>
                        工作就是拿自己的灵魂做典当，然后去换取银两，下班以后又渴望用这些银两，把自己的灵魂赎回来😏😅
                    </p>
                </div>
                {/* 脚部 */}
                <div className={style.pinFooter}>
                    <div className={style.actionBox}>
                        <LikeOutlined style={{marginRight: '4px'}}/> 赞
                    </div>
                    <Divider style={{height: '70%'}} type="vertical"/>
                    <div className={style.actionBox}>
                        <MessageOutlined style={{marginRight: '4px'}}/> 评论
                    </div>
                    <Divider style={{height: '70%'}} type="vertical"/>
                    <div className={style.actionBox}>
                        <ShareAltOutlined style={{marginRight: '4px'}}/> 分享
                    </div>
                </div>
            </div>
        );
    }
}

export default Pin;