import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import Button from '~/components/Button';

const css = classNames.bind(styles);
const currentUser = false;

function SuggestedAccounts({ label }) {
    return (
        <div className={css('wrapper')}>
            {currentUser ? (
                <>
                    <p className={css('label')}>{label}</p>

                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />

                    <p className={css('more-btn')}>See all</p>
                </>
            ) : (
                <>
                    <h3 className={css('textDes')}>Sign in to follow authors, like videos, and view comments..</h3>
                    <Button outline large btnNone>
                        Log in
                    </Button>
                </>
            )}
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
