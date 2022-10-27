import React, {useRef} from 'react';
import s from './Searching.module.scss'
import {ReactComponent as SearchIcon} from '../../icons/search.svg';
import {fakeResult} from './Searching.services';

export const Searching = (props: any) => {

    const searchRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(searchRef.current?.value);
    }

    return (
        <section className={s.searching}>
            <h2 className={s.searching__title}>Поиск адресов</h2>
            <h3 className={s.searching__subtitle}>Введите интересующий вас адрес</h3>
            <form className={s.searching__form} onSubmit={handleSubmit}  >
                <input type="search" name="search" minLength={3} className={s.searching__form_input} ref={searchRef} />
                <button type="submit" className={s.searching__form_btn} >
                    <SearchIcon />
                    <span>Поиск</span>
                </button>
            </form>
            <div className={s.result}>
                <h2 className={s.result__title}>Адреса</h2>
                {
                    fakeResult.map((item, index) =>
                        <p className={s.result__item} key={index} >{item}</p>
                    )
                }
            </div>
        </section>
    )
}