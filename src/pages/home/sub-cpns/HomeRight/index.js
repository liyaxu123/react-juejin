import React, {PureComponent} from 'react';
import {Button, Avatar} from 'antd';
import {CalendarOutlined, RightOutlined} from '@ant-design/icons';

import style from './style.module.css'
import qrCode from '../../../../assets/img/1.png'

class HomeRight extends PureComponent {
    render() {
        return (
            <div>
                <div className={style.card1}>
                    <div className={style.qiandao}>
                        <div className={style.date}>
                            <CalendarOutlined style={{color: '#fcc06c', fontSize: 20}}/>
                            <p className={style.title}>下午好！</p>
                        </div>
                        <Button type="primary" shape="round" ghost>去签到</Button>
                    </div>
                    <p className={style.secondLine}>连续签到赢掘金惊喜好礼</p>
                </div>
                <div className={style.card2}>
                    <div className={style.qrcode}>
                        <img src={qrCode} alt="二维码"/>
                    </div>
                    <div>
                        <p className={style.headline}>下载掘金客户端</p>
                        <p className={style.desc}>一个帮助开发者成长的社区</p>
                    </div>
                </div>
                <div className={style.card3}>
                    <header className={style.userBlockHeader}>🎖️作者榜</header>
                    <div className={style.list}>
                        <div className={style.item}>
                            <div className={style.avatar}>
                                <Avatar style={{marginRight: '6px'}} size={46}
                                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                            </div>
                            <div>
                                <p className={style.userName}>小笑残虹</p>
                                <p className={style.position}>
                                    前端工程师 @ 小笑残虹
                                </p>
                            </div>
                        </div>
                        <div className={style.item}>
                            <div className={style.avatar}>
                                <Avatar style={{marginRight: '6px'}} size={46}
                                        src="https://sf6-ttcdn-tos.pstatp.com/img/user-avatar/854492b2fa147955b52683f84d064ab8~300x300.image"/>
                            </div>
                            <div>
                                <p className={style.userName}>小笑残虹</p>
                                <p className={style.position}>
                                    前端工程师 @ 小笑残虹
                                </p>
                            </div>
                        </div>
                        <div className={style.item}>
                            <div className={style.avatar}>
                                <Avatar style={{marginRight: '6px'}} size={46}
                                        src="https://sf3-ttcdn-tos.pstatp.com/img/user-avatar/075d8e781ba84bf64035ac251988fb93~300x300.image"/>
                            </div>
                            <div>
                                <p className={style.userName}>小笑残虹</p>
                                <p className={style.position}>
                                    前端工程师 @ 小笑残虹
                                </p>
                            </div>
                        </div>
                        <div className={style.more}>
                            <span>完整榜单</span>
                            <RightOutlined style={{marginLeft: '5px'}}/>
                        </div>
                    </div>
                </div>
                <div className={style.card4}>
                    <div className={style.item} style={{height: '60px'}}>
                        <div className={style.avatar}>
                            <Avatar style={{marginRight: '6px'}} size={36} shape="square"
                                    src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-tutu.d58819c.png"/>
                        </div>
                        <span className={style.title2}>掘金社区漫游指南</span>
                    </div>
                    <div className={style.item} style={{height: '60px'}}>
                        <div className={style.avatar}>
                            <Avatar style={{marginRight: '6px'}} size={36} shape="square"
                                    src="	https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-extension-icon.4b79fb4.png"/>
                        </div>
                        <span className={style.title2}>下载掘金浏览器插件</span>
                    </div>
                    <div className={style.item} style={{height: '60px'}}>
                        <div className={style.avatar}>
                            <Avatar style={{marginRight: '6px'}} size={36} shape="square"
                                    src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/juejin-miner.b78347c.png"/>
                        </div>
                        <span className={style.title2}>前往掘金翻译计划</span>
                    </div>
                </div>
                <div className={style.siteInfo}></div>
            </div>
        );
    }
}

export default HomeRight;