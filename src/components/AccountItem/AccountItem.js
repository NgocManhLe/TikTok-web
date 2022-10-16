import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';

const css = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={css('wrapper')}>
            <Image className={css('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={css('info')}>
                <h4 className={css('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={css('check')} icon={faCheckCircle} />}
                </h4>
                <span className={css('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

// AccountItem.propTypes = {
//     data: PropTypes.object.isRequired,
// };

export default AccountItem;
