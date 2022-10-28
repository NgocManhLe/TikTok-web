import axios from 'axios';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
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

function Home() {
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

    const [follow, setFollow] = useState(false);
    const followBtn = () => {
        setFollow(!follow);
    };

    const [likeBtn, setLikeBtn] = useState(false);

    return (
        <div style={{ margin: 60 }}>
            {video.map((item, index) => {
                return <HomeVideo key={index} item={item} follow={follow} followBtn={followBtn} />;
            })}
        </div>
    );
}

export default Home;

const HomeVideo = ({ item, follow, followBtn }) => {
    const [react] = useState({
        like: randomNum(5000),
        comment: randomNum(2000),
        share: randomNum(500),
    });

    const [play, setPlay] = useState(false);
    // const [position, setPosition] = useState({ start: null, end: null });

    const handleClickVideo = () => {
        setPlay(!play);
    };

    return (
        <>
            <div className={css('userName')}>
                <img className={css('avatar')} src="https://picsum.photos/200 " alt="" />
                <h2>Ng.Huyen</h2>
                <button onClick={followBtn} className={css('more-btn')}>
                    {follow ? 'Follwing' : 'Follow'}
                </button>
            </div>
            <div className={css('line')}>
                <div onClick={handleClickVideo}>
                    {!play ? <p>Play</p> : null}
                    <ReactPlayer url={item} className="video-parent" loop playing={play} />
                </div>
                <div className={css('iconVideo')}>
                    <div className={css('iconCheck')}>
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
