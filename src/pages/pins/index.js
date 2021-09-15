import React, {PureComponent} from 'react';
import style from "./pins.module.css";
import {Affix} from 'antd';
import LeftMenu from "./sub-cpns/LeftMenu";
import PinEditor from "./sub-cpns/PinEditor";
import Pin from "./sub-cpns/Pin";
import UserPanel from "./sub-cpns/UserPanel";
import myCode from "@/assets/img/my.png";
import Juejin from "@/components/Juejin";
import RelatedArticles from "@/components/RelatedArticles";

class Pins extends PureComponent {
    render() {
        return (
            <div className={style.pins}>
                {/*左侧布局*/}
                <div className={style.pinsLeftWrapper}>
                    <LeftMenu/>
                </div>
                {/*中间*/}
                <div className={style.pinsMiddleWrapper}>
                    <PinEditor/>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                            return (
                                <div key={index} style={{marginBottom: '8px'}}>
                                    <Pin/>
                                </div>
                            )
                        })
                    }
                </div>
                {/*右侧布局*/}
                <div className={style.pinsRightWrapper}>
                    <UserPanel/>
                    <Affix offsetTop={100}>
                        <img className={style.myCode} src={myCode} alt="小笑残虹"/>
                    </Affix>
                    <Juejin/>
                    <RelatedArticles/>
                </div>
            </div>
        );
    }
}

export default Pins;