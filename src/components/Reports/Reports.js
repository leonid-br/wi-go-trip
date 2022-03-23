import { Route, Routes, NavLink } from 'react-router-dom';

import Summary from 'components/Summary';
import s from './Reports.module.css';

const Reports = () => {
    const setActiveClass = ({ isActive }) =>
        isActive ? `${s.item} ${s.activeNavLink}` : `${s.item}`;

    return (
        <div className={s.container}>
            <h2 className={s.title}>Отчеты</h2>

            <ul className={s.list}>
                <li>
                    <NavLink
                        to="/reports/summary"
                        className={setActiveClass}
                    >
                        сводка
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className={setActiveClass}>
                        продажи
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className={setActiveClass}>
                        установки
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className={setActiveClass}>
                        просмотры
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" className={setActiveClass}>
                        выплаты
                    </NavLink>
                </li>
            </ul>

            <Routes>
                <Route
                    exact
                    path="summary"
                    element={<Summary />}
                />
            </Routes>
        </div>
    );
};

export default Reports;
