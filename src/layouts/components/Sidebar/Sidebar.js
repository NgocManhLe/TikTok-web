import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { Link } from 'react-router-dom';

import Menu, { MenuItem } from './Menu';
import Button from '~/components/Button';
import { Login } from '~/pages/Trangdn/Login';

import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import config from '~/config';

const css = classNames.bind(styles);

function Sidebar() {
    const currentUser = false;

    return (
        <aside className={css('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            {currentUser ? (
                <>
                    <SuggestedAccounts label="Suggested accounts" />
                    <SuggestedAccounts label="Following accounts" />
                </>
            ) : (
                <>
                    <h3 className={css('textDes')}>Sign in to follow authors, like videos, and view comments..</h3>
                    <Link to="/login">
                        <Button outline large btnNone>
                            Log in
                        </Button>
                    </Link>
                </>
            )}
        </aside>
    );
}

export default Sidebar;
