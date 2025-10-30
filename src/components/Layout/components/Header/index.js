// @ts-nocheck
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion , faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faSignOut,  faUser} from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images'


import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 


import Image from '~/components/Image'
import Button from '~/components/Button';
import styles from './Header.module.scss'
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icon';
import Search from '../Search';

import classNames from 'classnames/bind'

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

    

    
    return ( 
         <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <Search/>
                <div className={cx('actions')}>
                {currentUser ? (
                    <>
                       <Tippy  delay={[0,200]} content="Upload video" placement='bottom'>
                           <button className={cx('action-btn')}>
                                <UploadIcon className={undefined}/>
                            </button> 
                       </Tippy>
                        <Tippy  delay={[200,0]}  content= "Mesage box" placement='bottom'>
                            <button   className={cx('action-btn')}>
                                <MessageIcon className={undefined}/>
                            </button>
                        </Tippy>
                        <Tippy  delay={[200,0]}  content= "Inbox" placement='bottom'>
                            <button   className={cx('action-btn')}>
                                <InboxIcon className={undefined}/>
                            </button>
                        </Tippy>


                    </>
                ) : (
                    <>text onClick={() => alert('123')} className={undefined} to={undefined} href={undefined} rightIcon={undefined} leftIcon={undefined} 
                        <Button className={undefined} to={undefined} href={undefined} rightIcon={undefined} leftIcon={undefined}  onClick={undefined} >Upload</Button>
                        <Button
                                    rightIcon={<FontAwesomeIcon icon={faEllipsisVertical} />}
                                    primary
                                    onClick={() => alert('123')} className={undefined} to={undefined} href={undefined} leftIcon={undefined}                       >
                        Log in
                        </Button>
                    
                    </>
)}
                        <Menu items = {currentUser ? UserMenu: MENU_ICONS}>
                            {currentUser ? (
                                <Image className={cx('user-avatar')} 
                                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/1b5af8d9db68483b9db061a959b635fd~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=35c8ee11&x-expires=1761897600&x-signature=GAC4zJEkWx7RzaJhUEUSOiDBjaU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my" 
                                    alt="Nguyen Van A" />
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