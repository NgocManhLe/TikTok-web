import axios from 'axios';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import { faCirclePlay, faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactPlayer from 'react-player';
import './custom.css';

const css = classNames.bind(styles);

const options = {
    method: 'GET',
    url: 'https://tiktok-downloader-download-videos-without-watermark1.p.rapidapi.com/media-info/',
    params: { link: 'https://vm.tiktok.com/ZSdxJMN8V/' },
    headers: {
        'X-RapidAPI-Key': 'dba08b09c8mshf5a73c37d72699fp13447fjsn279d7746b8d8',
        'X-RapidAPI-Host': 'tiktok-downloader-download-videos-without-watermark1.p.rapidapi.com',
    },
};

const randomNum = (num) => Math.floor(Math.random() * num);

function Follwing() {
    const [video, setvideo] = useState([]);

    useEffect(() => {
        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                setvideo(response.data.result.video.url_list);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    const [likeBtn, setLikeBtn] = useState(false);

    return (
        <div style={{ margin: 60 }}>
            {video.map((item, index) => {
                return <HomeVideo key={index} item={item} />;
            })}
        </div>
    );
}

export default Follwing;

const HomeVideo = ({ item }) => {
    const [react, setReact] = useState({
        like: 3478,
        comment: randomNum(2000),
        share: randomNum(500),
    });

    const [play, setPlay] = useState(false);
    // const [position, setPosition] = useState({ start: null, end: null });

    const handleClickVideo = () => {
        setPlay(!play);
    };

    const [like, setLike] = useState(false);
    const clickLike = () => {
        setLike(!like);
        {
            !like ? setReact({ ...react, like: 3478 + 1 }) : setReact({ ...react, like: 3478 });
        }
    };

    const [follow, setFollow] = useState(false);
    const followBtn = () => {
        setFollow(!follow);
    };

    return (
        <>
            <div className={css('userName')}>
                <img className={css('avatar')} src="https://picsum.photos/200 " alt="" />
                <h2>Ng.Huyen</h2>
            </div>
            <div className={css('line')}>
                <div onClick={handleClickVideo} className={css('videoUrl')}>
                    <div className={css('playVideo')}>{!play ? <FontAwesomeIcon icon={faCirclePlay} /> : null}</div>
                    <ReactPlayer url={item} className="video-parent" loop playing={play} />
                </div>
                <div className={css('iconVideo')}>
                    <div className={`iconCheck ${like ? 'likeTrue' : ''}`} onClick={clickLike}>
                        {/* <FontAwesomeIcon
                onClick={() => {
                    setLikeBtn(true);
                }}
                className={css(`'check' ${likeBtn ? '' : 'hidden'}`)}
                icon={faHeart}
            /> */}
                        <FontAwesomeIcon className={css('check')} icon={faHeart} />

                        <h3>{react.like}</h3>
                    </div>
                    <div className={css('iconCheck')}>
                        <FontAwesomeIcon className={css('check')} icon={faCommentDots} />

                        <h3>{react.comment}</h3>
                    </div>
                    <div className={css('iconCheck')}>
                        <FontAwesomeIcon className={css('check')} icon={faShare} />
                        <h3>{react.share}</h3>
                    </div>
                </div>
            </div>
        </>
    );
};
