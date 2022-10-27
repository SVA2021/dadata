import {NavItemProps} from "../NavItem/NavItem.types";
import {ReactComponent as HomeIcon} from '../../icons/home.svg';
import {ReactComponent as SearchIcon} from '../../icons/search.svg';
import {ReactComponent as TablesIcon} from '../../icons/tables.svg';
import {ReactComponent as CalendarIcon} from '../../icons/calendar.svg';
import {ReactComponent as MapMarkerIcon} from '../../icons/map.svg';
import {ReactComponent as WidgetIcon} from '../../icons/widget.svg';

export const menuItems: NavItemProps[] = [
    {
        path: '/',
        name: 'Главная',
        icon: HomeIcon  ,
    },
    {
        path: '/address',
        name: 'Поиск адресов',
        icon: SearchIcon  ,
    },
    {
        path: '/',
        name: 'Таблицы',
        icon: TablesIcon  ,
    },
    {
        path: '/',
        name: 'Календарь',
        icon: CalendarIcon  ,
    },
    {
        path: '/',
        name: 'Карты',
        icon: MapMarkerIcon  ,
    },
    {
        path: '/',
        name: 'Виджеты',
        icon: WidgetIcon  ,
    },
]