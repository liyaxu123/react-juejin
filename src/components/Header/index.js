import React, {PureComponent} from 'react';
import {NavLink, Link, withRouter} from 'react-router-dom'

import style from "./Header.module.css"
import logo from "../../assets/img/logo.svg"
import notifyIcon from '../../assets/img/notify.svg'
import Search from "../Search";
import DropDownBtn from "../DropDownBtn";
import AvatarDropDownList from "../AvatarDropDownList";
import SubNav from "../SubNav";

// 开发者大会图标
function DevelopersSvg() {
    return (
        <svg data-v-8c1a0f22="" width="127" height="21" viewBox="0 0 127 21" fill="none"
             xmlns="http://www.w3.org/2000/svg" className="conference-svg">
            <g data-v-8c1a0f22="" clipPath="url(#clip0)">
                <path data-v-8c1a0f22="" d="M97.2408 10.3547H84.0062V12.189H97.2408V10.3547Z"
                      fill="#86909C"></path>
                <path data-v-8c1a0f22="" fillRule="evenodd" clipRule="evenodd"
                      d="M83.0251 15.4666H86.4611L83.8356 20.4767H85.3231H86.1831H95.064H96.3354H97.4115L95.5236 16.1339H93.1761L94.2673 18.6424H87.145L88.8086 15.4666H98.2219V13.6323H83.0251V15.4666Z"
                      fill="#86909C"></path>
                <path data-v-8c1a0f22="" fillRule="evenodd" clipRule="evenodd"
                      d="M86.7734 7.52802H94.4736L95.9996 9.72827H98.3457L95.5469 5.69653H95.0735H93.2008H88.0462H86.4665H85.7001L82.9012 9.72827H85.2474L86.7734 7.52802Z"
                      fill="#86909C"></path>
                <path data-v-8c1a0f22="" fillRule="evenodd" clipRule="evenodd"
                      d="M28.3668 8.10736H30.6661V6.21533H17.3751V8.10736H19.7061V11.9602H16.5V13.8522H19.7061V14.8278L18.0866 20.453H20.2221L21.8417 14.8278V13.8522H26.2312V20.4971H28.3668V13.8536H31.5784V11.9616H28.3668V8.10736ZM21.8417 11.9616V8.10874H26.2312V11.9616H21.8417Z"
                      fill="#86909C"></path>
                <path data-v-8c1a0f22="" fillRule="evenodd" clipRule="evenodd"
                      d="M75.6812 5.80957H72.9581L71.8669 8.33319H65.9376V10.3546H70.9931L66.638 20.4298H69.3598L73.7163 10.3546H81.4949V8.33319H74.59L75.6812 5.80957Z"
                      fill="#86909C"></path>
                <path data-v-8c1a0f22="" fillRule="evenodd" clipRule="evenodd"
                      d="M73.4232 11.1926L78.6893 20.3198H81.4124L76.1464 11.1926H73.4232Z"
                      fill="#86909C"></path>
                <path data-v-8c1a0f22="" fillRule="evenodd" clipRule="evenodd"
                      d="M64.6125 6.22362H62.5375L62.3875 6.49882H57.9829V5.75439H55.8776V6.49882H51.0587V8.33306H55.8776V9.63202H49.9469V11.4663H52.5765L50.3267 15.5916H52.077V20.4297H52.7664H54.1823H61.4669H63.1994H63.5723V14.2087H63.5998V12.3744H54.1561L54.6515 11.4663H64.8616V9.63202H62.7549L64.6125 6.22362ZM54.1809 18.5954V17.3006H61.4656V18.5954H54.1809ZM61.4656 15.5916H54.1809V14.2087H61.4656V15.5916ZM57.9815 8.33306H61.3858L60.6785 9.63202H57.9815V8.33306Z"
                      fill="#86909C"></path>
                <path data-v-8c1a0f22="" fillRule="evenodd" clipRule="evenodd"
                      d="M47.5926 13.0434V11.2091H38.5865L38.9608 10.1688H48.2572V8.33323H39.6199L40.5831 5.65137H38.4517L37.4884 8.33323H35.8056L36.4729 6.08757H34.658L33.4457 10.1675H34.358H35.2593H36.828L33.1774 20.3349H35.3088L37.6935 13.6956L40.8872 16.5247L36.8789 20.4298H40.4799L42.6967 18.1277L45.296 20.4298H48.2558L44.0603 16.7132L47.5912 13.0461L47.5926 13.0434ZM44.4607 13.0434L42.2976 15.1514L40.5817 13.6323H37.7155L37.9274 13.0434H44.4607Z"
                      fill="#86909C"></path>
                <path data-v-8c1a0f22="" fillRule="evenodd" clipRule="evenodd"
                      d="M47.0394 7.7264L46.2069 5.5H44.0768L44.9079 7.7264H47.0394Z"
                      fill="#86909C"></path>
            </g>
            <g data-v-8c1a0f22="" clipPath="url(#clip1)">
                <path data-v-8c1a0f22=""
                      d="M102.634 9.41109V8.40738L105.813 5.06039C106.08 4.7818 106.361 4.45777 106.382 4.02309C106.416 3.3533 105.914 2.806 105.199 2.806C104.452 2.806 103.972 3.37503 103.948 4.04483H102.5C102.522 2.36935 103.816 1.5 105.201 1.5C106.541 1.5 107.835 2.32588 107.835 3.98753C107.835 4.71265 107.489 5.30341 106.874 5.93961L104.887 8.00432H107.843L107.831 9.41109H102.634Z"
                      fill="#1E80FF"></path>
                <path data-v-8c1a0f22=""
                      d="M109.228 5.51679C109.228 3.06285 110.443 1.5 112.407 1.5C114.392 1.5 115.598 3.07273 115.598 5.50494C115.598 7.93714 114.38 9.5 112.407 9.5C110.399 9.5 109.228 7.96085 109.228 5.51679ZM114.147 5.50494C114.147 3.96579 113.477 2.90479 112.407 2.90479C111.314 2.90479 110.678 3.98753 110.678 5.51482C110.678 7.11126 111.369 8.09323 112.407 8.09323C113.511 8.09323 114.147 7.02235 114.147 5.50494Z"
                      fill="#1E80FF"></path>
                <path data-v-8c1a0f22=""
                      d="M117.115 9.41109V8.40738L120.294 5.06039C120.561 4.7818 120.841 4.45777 120.863 4.02309C120.897 3.3533 120.395 2.806 119.68 2.806C118.933 2.806 118.453 3.37503 118.429 4.04483H116.979C117.002 2.36935 118.296 1.5 119.682 1.5C121.021 1.5 122.315 2.32588 122.315 3.98753C122.315 4.71265 121.969 5.30341 121.355 5.93961L119.369 8.00432H122.325L122.313 9.41109H117.115Z"
                      fill="#1E80FF"></path>
                <path data-v-8c1a0f22=""
                      d="M125.461 9.41115V2.98389H123.631V1.60083H126.911V9.41115H125.461Z"
                      fill="#1E80FF"></path>
            </g>
            <path data-v-8c1a0f22="" d="M10 1L12.5 5L8.5 5.5L7 4L10 1Z" stroke="#6AA1FF"></path>
            <path data-v-8c1a0f22=""
                  d="M8.5 20L1 10L3 8L7.5 11.5M8.5 20L12.5 18.5M8.5 20L7.5 11.5M7.5 11.5L12 11"
                  stroke="#6AA1FF"></path>
            <path data-v-8c1a0f22="" d="M4.5 5.5L8 8.5L13 8" stroke="#6AA1FF"></path>
            <defs data-v-8c1a0f22="">
                <clipPath data-v-8c1a0f22="" id="clip0">
                    <rect data-v-8c1a0f22="" width="81.8457" height="15" fill="white"
                          transform="translate(16.5 5.5)"></rect>
                </clipPath>
                <clipPath data-v-8c1a0f22="" id="clip1">
                    <rect data-v-8c1a0f22="" width="24.411" height="8" fill="white"
                          transform="translate(102.5 1.5)"></rect>
                </clipPath>
            </defs>
        </svg>
    )
}

class Header extends PureComponent {
    state = {
        navList: [
            {
                id: 1, name: '首页', path: '/home', subMenuList: [
                    {id: 1, name: '推荐', path: '/home/recommended', tags: []},
                    {id: 2, name: '关注', path: '/home/following', tags: []},
                    {
                        id: 3, name: '前端', path: '/home/backend', tags: [
                            {
                                id: 3.1, name: '前端'
                            },
                            {
                                id: 3.2, name: 'JavaScript'
                            },
                            {
                                id: 3.3, name: 'Vue.js'
                            },
                            {
                                id: 3.4, name: 'React.js'
                            },
                            {
                                id: 3.5, name: 'CSS'
                            },
                            {
                                id: 3.6, name: 'TypeScript'
                            },
                            {
                                id: 3.7, name: 'Node.js'
                            },
                            {
                                id: 3.8, name: '微信小程序'
                            },
                            {
                                id: 3.9, name: 'Flutter'
                            },
                            {
                                id: 3.11, name: 'Webpack'
                            }
                        ]
                    },
                    {id: 4, name: '后端', path: '/home/frontend', tags: []},
                    {id: 5, name: 'Android', path: '/home/android', tags: []},
                    {id: 6, name: 'iOS', path: '/home/ios', tags: []},
                    {id: 7, name: '人工智能', path: '/home/ai', tags: []},
                    {id: 8, name: '开发工具', path: '/home/freebie', tags: []},
                    {id: 9, name: '代码人生', path: '/home/career', tags: []},
                    {id: 10, name: '阅读', path: '/home/article', tags: []},
                ]
            },
            {
                id: 2, name: '沸点', path: '/pins', subMenuList: [
                    {id: 1, name: '推荐', path: '/home/recommended', tags: []},
                    {id: 2, name: '关注', path: '/home/following', tags: []},
                    {
                        id: 3, name: '前端', path: '/home/backend', tags: [
                            {
                                id: 3.1, name: '前端'
                            },
                            {
                                id: 3.2, name: 'JavaScript'
                            },
                            {
                                id: 3.3, name: 'Vue.js'
                            },
                            {
                                id: 3.4, name: 'React.js'
                            },
                            {
                                id: 3.5, name: 'CSS'
                            },
                            {
                                id: 3.6, name: 'TypeScript'
                            },
                            {
                                id: 3.7, name: 'Node.js'
                            },
                            {
                                id: 3.8, name: '微信小程序'
                            },
                            {
                                id: 3.9, name: 'Flutter'
                            },
                            {
                                id: 3.11, name: 'Webpack'
                            }
                        ]
                    },
                    {id: 4, name: '后端', path: '/home/frontend', tags: []},
                    {id: 5, name: 'Android', path: '/home/android', tags: []},
                    {id: 6, name: 'iOS', path: '/home/ios', tags: []},
                    {id: 7, name: '人工智能', path: '/home/ai', tags: []},
                    {id: 8, name: '开发工具', path: '/home/freebie', tags: []},
                    {id: 9, name: '代码人生', path: '/home/career', tags: []},
                    {id: 10, name: '阅读', path: '/home/article', tags: []},
                ]
            },
            {
                id: 3, name: '资讯', path: '/news', subMenuList: [
                    {id: 1, name: '全部', path: '/news/all', tags: []},
                    {id: 2, name: '行业动态', path: '/news/category', tags: []},
                    {id: 4, name: '软件更新', path: '/news/softwareUpdates', tags: []},
                    {id: 5, name: '编程语言', path: '/news/language', tags: []},
                ]
            },
            {
                id: 4, name: '小册', path: '/books', subMenuList: [
                    {id: 1, name: '全部', path: '/books/all', tags: []},
                    {id: 3, name: '前端', path: '/books/backend', tags: []},
                    {id: 4, name: '后端', path: '/books/frontend', tags: []},
                    {id: 5, name: 'Android', path: '/books/android', tags: []},
                    {id: 6, name: 'iOS', path: '/books/ios', tags: []},
                    {id: 7, name: '人工智能', path: '/books/ai', tags: []},
                    {id: 8, name: '开发工具', path: '/books/freebie', tags: []},
                    {id: 9, name: '代码人生', path: '/books/career', tags: []},
                    {id: 10, name: '阅读', path: '/books/article', tags: []},
                ]
            },
            {
                id: 5, name: '活动', path: '/events', subMenuList: [
                    {id: 1, name: '全部活动', path: '/events/all', tags: []},
                    {id: 2, name: '北京', path: '/events/beijing', tags: []},
                    {id: 3, name: '上海', path: '/events/shanghai', tags: []},
                    {id: 4, name: '广州', path: '/events/guangzhou', tags: []},
                    {id: 5, name: '深圳', path: '/events/shenzhen', tags: []},
                    {id: 6, name: '杭州', path: '/events/hangzhou', tags: []},
                    {id: 7, name: '其他', path: '/events/other', tags: []},
                ]
            }
        ],
        isShowBtnGroup: true,
        currentPathIndex: 0
    }

    showBtnGroup = () => {
        this.setState({
            isShowBtnGroup: true
        })
    }

    hideBtnGroup = () => {
        this.setState({
            isShowBtnGroup: false
        })
    }

    componentDidUpdate() {
        const index = this.state.navList.findIndex(item => {
            if (this.props.location.pathname === '/home' || this.props.location.pathname === '/home/recommended') {
                return item.path === '/home'
            } else {
                return item.path === this.props.location.pathname
            }
        });
        if (index > -1) {
            this.setState({
                currentPathIndex: index
            })
        }
    }

    render() {
        const {navList, currentPathIndex} = this.state;
        return (
            <div className={style.header}>
                <div className={style.container}>
                    {/*logo*/}
                    <a href="/">
                        <img src={logo} alt="掘金"/>
                    </a>
                    {/*nav*/}
                    <div className={style.nav}>
                        <ul className={style.mainNavList}>
                            {this.state.navList.map(item => {
                                return <NavLink to={item.path}
                                                exact
                                                activeClassName={style.linkActive}
                                                key={item.id}>
                                    {item.name}
                                </NavLink>
                            })}
                            {/*开发者大会*/}
                            <a style={{width: '168px'}}>
                                <DevelopersSvg/>
                            </a>
                        </ul>
                        {/*搜索部分*/}
                        <div className={style.searchWrapper}>
                            <div className={style.searchBox}
                                 style={{overflow: this.state.isShowBtnGroup ? '' : 'hidden'}}>
                                <div className={style.searchInput}>
                                    <Search showBtnGroup={this.showBtnGroup} hideBtnGroup={this.hideBtnGroup}/>
                                </div>
                                <div className={this.state.isShowBtnGroup ? style.searchBtnBox : style.hide}>
                                    <div className={style.creatorsCenter}>创作者中心</div>
                                    <DropDownBtn list={['发布沸点', '发布小册', '回答问题', '发布资讯']}/>
                                </div>
                            </div>
                            <div className={style.notify}>
                                <Link to='/notification'>
                                    <img src={notifyIcon} alt="通知"/>
                                </Link>
                            </div>
                            <div className={style.avatar}>
                                <AvatarDropDownList/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.subNav} style={{display: this.props.showSubNav ? 'block' : 'none'}}>
                    <SubNav subMenuList={navList[currentPathIndex].subMenuList}/>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);