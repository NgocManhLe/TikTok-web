import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
import styles from './SuggestedAccounts.module.scss';

const css = classNames.bind(styles);

function AccountItem({ name, email, avatar }) {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={css('account-item')}>
                    <img className={css('avatar')} src={avatar} alt="avatar" />
                    <div className={css('item-info')}>
                        <p className={css('nickname')}>
                            <strong>{name}</strong>
                            <FontAwesomeIcon className={css('check')} icon={faCheckCircle} />
                        </p>
                        <p className={css('name')}>{email}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
