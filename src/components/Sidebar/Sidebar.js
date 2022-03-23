import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.css';

const Sidebar = () => {
    const setActiveClass = ({ isActive }) =>
        isActive ? `${s.item} ${s.activeNavLink}` : `${s.item}`;

    return (
        <>
            <div className={s.container}>
                <div className={s.userInfo}>
                    <div className={s.picture}>
                        <span>BM</span>
                    </div>
                    <span className={s.name}>Борис веркс</span>
                    <span className={s.rating}>Рейтинг 4.4</span>
                </div>
                <ul className={s.list}>
                    <li>
                        <NavLink
                            to="/reports"
                            className={setActiveClass}
                        >
                            <span>Отчеты</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/orders"
                            className={setActiveClass}
                        >
                            <span>Туры</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/messages"
                            className={setActiveClass}
                        >
                            <span>Отзывы</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/calls"
                            className={setActiveClass}
                        >
                            <span>Справочный центр</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contacts"
                            className={setActiveClass}
                        >
                            <span>Профиль и реквизиты</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
