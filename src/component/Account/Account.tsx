import s from './Account.module.scss';
import {ReactComponent as AccountIcon} from '../../icons/profile_circle.svg';

export const Account = () => {
    return (
        <div className={s.account} >
            <AccountIcon className={s.account__icon} />
            <p className={s.account__text} >Имя Фамилия</p>
        </div>
    )
}