import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCircleXmark , faCloudUpload, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faMagnifyingGlass, faMessage, faSignIn, faSignOut, faSpinner, faUpload, faUser} from '@fortawesome/free-solid-svg-icons';

import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import React, { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper/';

import Button from '~/components/Button';
import styles from './Header.module.scss'
import images from '~/assets/images'
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';


const cx = classNames.bind(styles);
const currentUser = true;


const MENU_ICONS=[
    {
        icon: <FontAwesomeIcon icon = {faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon = {faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon = {faKeyboard} />,
        title: 'Keyboard shortcuts',
        
    }
];

const UserMenu=[
      {
            icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> ,
            title:'View Profile',
            to: '/@hoaa'
      },
      {
            icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon> ,
            title:'Get Coins',
            to: '/coin'
      },
      {
            icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon> ,
            title:'Settings',
            to: '/setting'
      }, ...MENU_ICONS,
      {
            icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon> ,
            title:'Log out',
            to: '/logout',
            separate :  true
      },
];
function Header() {

    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1,2,3]);
        }, 0);

    }, []);
    return ( 
         <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <HeadlessTippy 
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => ( 
                        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                            <PopperWrapper className={undefined}>
                                    <h4 className={cx('search-title')}>
                                        Accounts
                                    </h4>
                                    <AccountItem/>
                                        <AccountItem/>
                                        <AccountItem/>
                                        <AccountItem/>
                            </PopperWrapper>
                        </div>
                     )}
                     >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
    
                        
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                       
                    </div>
                </HeadlessTippy>
                <div className={cx('actions')}>
                {currentUser ? (
                    <>
                       <Tippy  delay={[0,200]} content="Upload video" placement='bottom'>
                           <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faCloudUpload} />
                            </button> 
                       </Tippy>
                        <Tippy  delay={[200,0]}  content= "Mesage box" placement='bottom'>
                            <button   className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button>
                        </Tippy>


                    </>
                ) : (
                    <>
                        <Button text onClick={() => alert('123')}>Upload</Button>
                        <Button
                        rightIcon={<FontAwesomeIcon icon={faEllipsisVertical} />} 
                        primary
                        onClick={() => alert('123')}
                        >
                        Log in
                        </Button>
                    
                    </>
)}
                        <Menu items = {currentUser ? UserMenu: MENU_ICONS}>
                            {currentUser ? (
                                <img className={cx('user-avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/1b5af8d9db68483b9db061a959b635fd~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=35c8ee11&x-expires=1761897600&x-signature=GAC4zJEkWx7RzaJhUEUSOiDBjaU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my" alt="Nguyen Van A" />
                            ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )}
                        </Menu>
</div>
            </div>

               
        </header>   
         
     );
}

export default Header;