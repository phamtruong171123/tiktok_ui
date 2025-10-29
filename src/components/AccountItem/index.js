import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img alt='avatar' src='https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/61851943d9f6d0b61bc2e60af5eea3c0~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=d3c1f935&x-expires=1761897600&x-signature=TsL0VjxofoeHzBQXJ9FmOv1hsWg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my' className={cx('avatar')}></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>bé Thảo</span>
                    <FontAwesomeIcon className={cx('check')}icon={faCheckCircle} />
                </h4>   
                <span className={cx('username')}>thaoiudau05</span>     
            </div>
        </div>
     );
}

export default AccountItem;