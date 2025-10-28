import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';



const cx = classNames.bind(styles);


function Button( {className,to, href,primary=false,outline=false,text=false,small=false,medium=false,large=false,disabled=false,round=false,rightIcon,leftIcon,children, onClick, ...passProps }) {
    /** @type {import('react').ElementType} */
    let Comp = 'button';

    /** @type {Record<string, any>} */
const props = {
    onClick, 
    ...passProps};

if(disabled) {
    Object.keys(props).forEach((key) => {
        if(key.startsWith('on') && typeof props[key] === 'function') {
            delete props[key];
        }});
}

if (to) {
  
    props.to = to;
    Comp = Link;
}else if (href) {
   
    props.href = href;
    Comp = 'a';
}

    const classes= cx('wrapper', {
        primary,
        outline,text,
        small,medium,large,
        disabled,
        round,
        [className]: className,
    });
    return (
        <Comp className={classes} {...props}> 
            { leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            { rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
     );
}

export default Button;