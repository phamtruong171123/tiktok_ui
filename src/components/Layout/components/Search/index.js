import {  faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper/';
import AccountItem from '~/components/AccountItem';
import {  SearchIcon } from '~/components/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './Search.module.scss'
const cx=classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue]= useState('');
    const [searchResult, setSearchResult] = useState([]);

    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

            if(!searchValue.trim()){
                setSearchResult([]);
                return;
            }
            setLoading(true);

            fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then(res => res.json())
            .then(res => {
                // @ts-ignore
                setSearchResult(res.data);
            })
            .catch(
              ()  => {
                    setLoading(false);
                }
            )
           
               
    }, [searchValue]);
    const inputRef = useRef();
    const handleHideResult = () => {
        setShowResult(false);
    }
    return (
      
            <HeadlessTippy 
                    onClickOutside={handleHideResult}
                    interactive
                    visible={searchResult.length > 0 && showResult}
                    render={(attrs) => ( 
                        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                            <
                            // @ts-ignore
                            PopperWrapper>
                                        <h4 className={cx('search-title')}>
                                            Accounts
                                        </h4>
                                    {searchResult.map((result) => (
                                        <AccountItem key={result.id} data={result}/>
                                    ))}
                            </PopperWrapper>
                        </div>
                     )}
                     >
                    <div className={cx('search')}>
                        <input 
                            ref={inputRef}
                            placeholder="Search accounts and videos" 
                            spellCheck={false}
                            value={searchValue}
                            onChange={ (e) => setSearchValue(e.target.value)} 
                            onFocus={ () => setShowResult(true)}
                        />
                        {!!searchValue && !loading && (
                            
                            <button className={cx('clear')} 
                            onClick={ () => {
                                setSearchValue('');
                                // @ts-ignore
                                inputRef.current.focus();
                                setShowResult(false);
                                }}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        )}
                        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
    
                        
                        <button className={cx('search-btn')}>
                            < // @ts-ignore 
                            SearchIcon />
                        </button>
                       
                    </div>
            </HeadlessTippy>
    );
}

export default Search;