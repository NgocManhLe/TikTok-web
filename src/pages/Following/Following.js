import axios from 'axios';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Following.module.scss';
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

function Following() {
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
                            <img className={css('avatar')} src="https://picsum.photos/200/300" alt="" />
                            <h2>Ng.Huyen</h2>
                        </div>
                        <div className={css('line')}>
                            <video controls className={css('video')}>
                                <source src={item} />
                            </video>
                            <div className={css('iconVideo')}>
                                <div className={css('iconCheck')}>
                                    <FontAwesomeIcon className={css('check')} icon={faHeart} />
                                    <h3>{Math.floor(Math.random() * 5000)}</h3>
                                </div>
                                <div className={css('iconCheck')}>
                                    <FontAwesomeIcon className={css('check')} icon={faCommentDots} />
                                    <h3>{Math.floor(Math.random() * 5000)}</h3>
                                </div>
                                <div className={css('iconCheck')}>
                                    <FontAwesomeIcon className={css('check')} icon={faShare} />
                                    <h3>{Math.floor(Math.random() * 5000)}</h3>
                                </div>
                            </div>
                        </div>
                    </>
                );
            })}
        </div>
    );
}

export default Following;
