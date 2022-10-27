import {NavItem} from '../NavItem';
import s from './Settings.module.scss';
import {ReactComponent as SettingsIcon} from '../../icons/settings.svg';
import {ReactComponent as ProfileIcon} from '../../icons/profile.svg';
import {ReactComponent as FinanceIcon} from '../../icons/finance.svg';

export const Settings = (props: any) => {

    return (
        <div className={s.settings} >
            <p className={s.settings__title}>
                <SettingsIcon />
                <span>Настройки</span>
                <span className={props.isSettingsOpen ? s.settings__title_open : s.settings__title_closed}></span>
            </p>
            <div className={props.isSettingsOpen ? s.settings__body_open : s.settings__body_closed}>
                <NavItem path='/' name='Настройки профиля' icon={ProfileIcon} />
                <NavItem path='/' name='Управление финансами' icon={FinanceIcon} />
            </div>
        </div>
    )
}