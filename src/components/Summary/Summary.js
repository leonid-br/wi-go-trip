import { useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {
    LocalizationProvider,
    DesktopDateRangePicker,
} from '@mui/lab';

// import fetchData from 'service/getData-api';
import SalesCard from 'components/InformationCards/SalesCard';
import ViewsCard from 'components/InformationCards/ViewsCard';
import helper from 'helpers';
import data from 'data/data.json';
import s from './Summary.module.css';

const Summary = () => {
    const [isForcePickerOpen, setIsOpen] = useState(false);
    const [selectedDate, handleDateChange] = useState([
        null,
        null,
    ]);

    return (
        <>
            <div className={s.data}>
                <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                >
                    <DesktopDateRangePicker
                        open={isForcePickerOpen}
                        onClose={() => setIsOpen(false)}
                        value={selectedDate}
                        onChange={handleDateChange}
                        minDate={new Date(2021, 0, 1)}
                        maxDate={new Date(2021, 11, 31)}
                        defaultValue={new Date(2020, 0, 1)}
                        initialFocusedDate={new Date(2020, 0, 1)}
                        renderInput={({
                            ref,
                            startProps,
                            endProps,
                            onChange,
                            ...other
                        }) => <div ref={ref} {...other}></div>}
                    />
                    <button
                        type="button"
                        className={s.btn}
                        onClick={() =>
                            setIsOpen(isOpen => !isOpen)
                        }
                    >
                        <svg
                            width="20"
                            height="23"
                            viewBox="0 0 20 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18 2.77399H17V0.773987H15V2.77399H5V0.773987H3V2.77399H2C0.9 2.77399 0 3.67399 0 4.77399V20.774C0 21.874 0.9 22.774 2 22.774H18C19.1 22.774 20 21.874 20 20.774V4.77399C20 3.67399 19.1 2.77399 18 2.77399ZM18 20.774H2V7.77399H18V20.774Z"
                                fill="black"
                                fillOpacity="0.54"
                            />
                        </svg>
                    </button>
                </LocalizationProvider>

                <span className={s.dataText}>
                    {selectedDate[1] === null
                        ? 'Выберите период сравнения '
                        : helper.getTextDate(selectedDate)[0]}
                </span>
                <span className={s.vs}>vs</span>
                <button
                    type="button"
                    style={{ cursor: 'auto' }}
                    className={s.btn}
                >
                    <svg
                        width="20"
                        height="23"
                        viewBox="0 0 20 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M18 2.77399H17V0.773987H15V2.77399H5V0.773987H3V2.77399H2C0.9 2.77399 0 3.67399 0 4.77399V20.774C0 21.874 0.9 22.774 2 22.774H18C19.1 22.774 20 21.874 20 20.774V4.77399C20 3.67399 19.1 2.77399 18 2.77399ZM18 20.774H2V7.77399H18V20.774Z"
                            fill="black"
                            fillOpacity="0.54"
                        />
                    </svg>
                </button>
                <span className={s.dataText}>
                    {selectedDate[1] === null
                        ? ''
                        : helper.getTextDate(selectedDate)[1]}
                </span>
            </div>

            <div className={s.graficsBox}>
                <ul className={s.graficsList}>
                    <li className={s.graficItem}>
                        <SalesCard
                            data={helper.getSaleData(
                                data,
                                selectedDate,
                            )}
                            title={'Продажи'}
                            selectedDate={selectedDate}
                        />
                    </li>
                    <li className={s.graficItem}>
                        <SalesCard
                            data={helper.getSaleData(
                                data,
                                selectedDate,
                            )}
                            title={'Баланс'}
                            selectedDate={selectedDate}
                        />
                    </li>
                    <li className={s.graficItem}>
                        <ViewsCard
                            data={helper.getViewsData(
                                data,
                                selectedDate,
                            )}
                            title={'Просмотры → Клики'}
                            selectedDate={selectedDate}
                        />
                    </li>
                    <li className={s.graficItem}>
                        <ViewsCard
                            data={helper.getViewsData(
                                data,
                                selectedDate,
                            )}
                            title={'Просмотры → Клики'}
                            selectedDate={selectedDate}
                        />
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Summary;
