import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const css = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={css('wrapper')}>
            <div className={css('header')}>
                <img
                    className={css('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9c1763d086163fc41c05a6d731057f7f~c5_300x300.webp?x-expires=1665756000&x-signature=4mMKhiY5iC1vvo%2F5PiAbuY%2BpVkM%3D"
                    alt=""
                />
                <Button className={css('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={css('body')}>
                <p className={css('nickname')}>
                    <strong>NGUYỄN VĂN A</strong>
                    <FontAwesomeIcon className={css('check')} icon={faCheckCircle} />
                </p>
                <p className={css('name')}>nva@gmail.com</p>
                <p className={css('analytics')}>
                    <strong className={css('value')}>10M </strong>
                    <span className={css('label')}>Followers</span>
                    <strong className={css('value')}>10M </strong>
                    <span className={css('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
