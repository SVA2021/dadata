import {NavItem} from '../NavItem';
import {menuItems} from './Menu.data';
import s from './Menu.module.scss';
import {ReactComponent as ExitIcon} from '../../icons/exit.svg';
import {Settings} from '../Settings';

export const Menu = () => {

    const exitHandler = () => console.log('exit click')

    return (
        <nav className={s.menu} >
            <h2 className={s.menu__title}>Меню</h2>
            <div className={s.menu__body}>
                {
                    menuItems.map((item) =>
                        <NavItem key={item.name} name={item.name} icon={item.icon} path={item.path} />)
                }
            </div>
            <Settings isSettingsOpen={true} />
            <button className={s.menu__btn} onClick={exitHandler} >
                <ExitIcon />
                <span>Выход</span>
            </button>
        </nav>
    )
}