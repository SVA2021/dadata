import {Account} from '../Account';
import {Logo} from '../Logo';
import s from './Header.module.scss';

export const Header = () => {

    const clickHandler = () => console.log('click click')

    return (
        <header className={s.header} >
            <Logo onClick={clickHandler} />
            <Account />
        </header>
    )
}