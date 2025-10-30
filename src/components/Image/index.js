// @ts-nocheck

import { forwardRef, useState } from "react";
import images from '~/assets/images'



const Image = forwardRef(({alt='', src='', ...props}, ref) => {
    const [fallback, setFallback] = useState();
    const handleError = () => {
    setFallback(images.noImage)}
    return ( 
        <img alt={alt} src={fallback || src} ref= {ref} {...props} onError={handleError}
        style={{ overflow: 'hidden' }}/>
        
     );
});

export default Image;