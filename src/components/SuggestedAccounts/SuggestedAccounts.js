import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const css = classNames.bind(styles);

const fakeData = [
    {
        id: 1,
        name: 'Sybil Symcox',
        email: 'ssymcox0@plala.or.jp',
        avatar: 'https://robohash.org/accusantiumrepudiandaequo.jpg?size=50x50&set=set1',
    },
    {
        id: 2,
        name: 'Claudianus Berrisford',
        email: 'cberrisford1@yandex.ru',
        avatar: 'https://robohash.org/etnatusomnis.jpg?size=50x50&set=set1',
    },
    {
        id: 3,
        name: 'Simonette Creeboe',
        email: 'screeboe2@cbslocal.com',
        avatar: 'https://robohash.org/enimeiusvelit.jpg?size=50x50&set=set1',
    },
    {
        id: 4,
        name: 'Fanni Forrestall',
        email: 'fforrestall3@cbc.ca',
        avatar: 'https://robohash.org/occaecatiatminima.jpg?size=50x50&set=set1',
    },
    {
        id: 5,
        name: 'Jed Winship',
        email: 'jwinship4@xrea.com',
        avatar: 'https://robohash.org/eumpraesentiumvoluptatibus.jpg?size=50x50&set=set1',
    },
    {
        id: 6,
        name: "Wyatan D'Errico",
        email: 'wderrico5@meetup.com',
        avatar: 'https://robohash.org/doloribusinexcepturi.jpg?size=50x50&set=set1',
    },
    {
        id: 7,
        name: 'Yorgo Lartice',
        email: 'ylartice6@rakuten.co.jp',
        avatar: 'https://robohash.org/rerumundequasi.jpg?size=50x50&set=set1',
    },
    {
        id: 8,
        name: 'Clare Fritche',
        email: 'cfritche7@ocn.ne.jp',
        avatar: 'https://robohash.org/nihilconsequaturut.jpg?size=50x50&set=set1',
    },
    {
        id: 9,
        name: 'Lorilyn Besset',
        email: 'lbesset8@accuweather.com',
        avatar: 'https://robohash.org/enimcorporisdelectus.jpg?size=50x50&set=set1',
    },
    {
        id: 10,
        name: 'Doro Pauletti',
        email: 'dpauletti9@ca.gov',
        avatar: 'https://robohash.org/molestiasquivoluptatem.jpg?size=50x50&set=set1',
    },
];

function SuggestedAccounts({ label }) {
    return (
        <div className={css('wrapper')}>
            {
                <>
                    <p className={css('label')}>{label}</p>

                    {fakeData.map((item) => (
                        <AccountItem key={item.id} {...item} />
                    ))}

                    <p className={css('more-btn')}>See all</p>
                </>
            }
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
