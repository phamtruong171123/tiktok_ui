import classNames from "classnames/bind";
import styles from "./Popper.module.scss";

console.log(styles);
const cx = classNames.bind(styles);

function Wrapper({children, className}) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

export default Wrapper;