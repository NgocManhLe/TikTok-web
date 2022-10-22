import classNames from 'classnames/bind';
import styles from './Live.module.scss';

import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const css = classNames.bind(styles);
function Live() {
    return (
        <>
            <div className={css('videoLive')}>
                <iframe
                    width="700"
                    height="400"
                    src="https://www.youtube.com/embed/E_TeoGezPCg"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            <div className={css('videoTitle')}>
                <img
                    className={css('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9c1763d086163fc41c05a6d731057f7f~c5_300x300.webp?x-expires=1665756000&x-signature=4mMKhiY5iC1vvo%2F5PiAbuY%2BpVkM%3D"
                    alt=""
                />
                <h3>
                    Thái Phạm{' '}
                    <span>
                        Living
                        <FontAwesomeIcon className={css('eye')} icon={faEye} />
                        <span className={css('people')}>455 watching</span>
                    </span>
                </h3>
            </div>
            <p className={css('text')}>Video Suggestions</p>
            <div className={css('videoSuggestions')}>
                <iframe
                    width="200"
                    height="170"
                    src="https://www.youtube.com/embed/CPmsLD3K1oM"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <iframe
                    width="200"
                    height="170"
                    src="https://www.youtube.com/embed/cWreFGPT2LI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <iframe
                    width="200"
                    height="170"
                    src="https://www.youtube.com/embed/RnKUMxtgm4Y"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </>
    );
}

export default Live;
