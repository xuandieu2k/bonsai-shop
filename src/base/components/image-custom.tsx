import { FC, useEffect, useState } from "react"

import avatarDefault from '../../static/img/product-img/pro-big-1.jpg'
import { getSrcImage } from "../utils/photo-ultils";

interface ImageProps {
    url?: string,
    className?: string,
    onClick?: () => void;
    fallBackUrl?: string,
    style?: React.CSSProperties
}

const ImageDefault: FC<ImageProps> = (props) => {
    const [src, setSrc] = useState("");

    useEffect(() => {
        try {
            const result = getSrcImage(props.url??'');
            setSrc(result);
        } catch (error) {
            setSrc('');
            console.error('Error setting image:', error);
        }
    }, [props.url]);

    const handleError = (
        event: React.SyntheticEvent<HTMLImageElement, Event>
    ) => {
        event.currentTarget.src = props.fallBackUrl ?? avatarDefault;
        event.currentTarget.onerror = null; // prevents looping if image onError also fails
    };


    return (
        <img className={props.className} src={src} onError={handleError} style={props.style} onClick={props.onClick} />
    )
}

export default ImageDefault