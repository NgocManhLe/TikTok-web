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
                <img className={css('avatar')} src="https://picsum.photos/200/300" alt="" />
                <Button className={css('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={css('body')}>
                <p className={css('nickname')}>
                    <strong>Nguyễn Văn A</strong>
                    <FontAwesomeIcon className={css('check')} icon={faCheckCircle} />
                </p>
                <p className={css('name')}>nva@gmail.com</p>
                <p className={css('analytics')}>
                    <strong className={css('value')}> 10M </strong>
                    <span className={css('label')}>Followers</span>
                    <strong className={css('value')}>9.5M </strong>
                    <span className={css('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
