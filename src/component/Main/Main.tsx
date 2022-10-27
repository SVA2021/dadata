import {Route, Routes} from 'react-router-dom';
import {News} from '../News';
import {Searching} from '../Searching';
import s from './Main.module.scss';

export const Main = (props: any) => {
    return (
        <main className={s.main}>
            <Routes>
                <Route path="/" element={<News />} />
                <Route path="/address" element={<Searching />} />
            </Routes>
        </main>
    )
}