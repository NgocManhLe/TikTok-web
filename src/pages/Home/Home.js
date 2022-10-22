import axios from 'axios';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { faCommentDots, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    return (
        <div style={{ margin: 60 }}>
            {video.map((item) => {
                return (
                    <>
                        <div className={css('userName')}>
                            <img
                                className={css('avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9c1763d086163fc41c05a6d731057f7f~c5_300x300.webp?x-expires=1665756000&x-signature=4mMKhiY5iC1vvo%2F5PiAbuY%2BpVkM%3D"
                                alt=""
                            />
                            <h2>Ng.Huyen</h2>
                            <button className={css('more-btn')}>Follow</button>
                        </div>
                        <div className={css('line')}>
                            <video autoPlay controls className={css('video')}>
                                <source src={item} />
                            </video>
                            <div className={css('iconVideo')}>
                                <div className={css('iconCheck')}>
                                    <FontAwesomeIcon className={css('check')} icon={faHeart} />
                                    <h3>{Math.floor(Math.random() * 5000)}</h3>
                                </div>
                                <div className={css('iconCheck')}>
                                    <FontAwesomeIcon className={css('check')} icon={faCommentDots} />
                                    <h3>{Math.floor(Math.random() * 500)}</h3>
                                </div>
                                <div className={css('iconCheck')}>
                                    <FontAwesomeIcon className={css('check')} icon={faShare} />
                                    <h3>{Math.floor(Math.random() * 100)}</h3>
                                </div>
                            </div>
                        </div>
                    </>
                );
            })}
        </div>
    );
}

export default Home;
