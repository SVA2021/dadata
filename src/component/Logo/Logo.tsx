import s from './Logo.module.scss';
import {ReactComponent as LogoIcon} from '../../icons/logo.svg';

export const Logo = (props: any) => {
    return (
        <div className={s.logo} {...props}>
            <LogoIcon className={s.logo__icon} />
            <p className={s.logo__text} >Wrench CRM</p>
        </div>
    )
}