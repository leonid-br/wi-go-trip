import Diagram from 'components/Diagram';
import helper from 'helpers';
import './InformationCard.css';

const SalesCard = ({ data, title, selectedDate }) => {
    if (selectedDate === null) {
        return '';
    }

    //Подсчет суммы выбранного периода
    const getTotalSalesStart = () => {
        if (data === undefined) {
            return;
        }
        return Math.round(
            data[0].reduce((acc, cur) => acc + cur.value, 0),
        );
    };

    //Подсчет суммы предыдущего периода
    const getTotalSalesEnd = () => {
        if (data === undefined) {
            return;
        }
        return Math.round(
            data[1].reduce((acc, cur) => acc + cur.value, 0),
        );
    };

    const getPercentChange = Math.round(
        ((getTotalSalesStart() - getTotalSalesEnd()) /
            getTotalSalesEnd()) *
            100,
    );

    return (
        <>
            <div className="cards__container">
                <h3 className="cards__title">{title}</h3>
                <div className="cards__statistic">
                    <span className="cards__sales-start">
                        {selectedDate[1] === null
                            ? ''
                            : `${getTotalSalesStart()}₽`}
                    </span>

                    {selectedDate[1] === null ? (
                        ''
                    ) : (
                        <span className="cards__percent">
                            {selectedDate[0] === null
                                ? ''
                                : `${getPercentChange}%`}
                        </span>
                    )}
                    <span className="cards__sales-end">
                        {selectedDate[0] === null
                            ? ''
                            : `${getTotalSalesEnd()}₽`}
                    </span>
                </div>
                <div className="diagram">
                    <Diagram
                        data={data}
                        // onChangeData={onChangeData}
                    />
                </div>
                <div className="legend">
                    <span>
                        {data === undefined
                            ? ''
                            : helper
                                  .getLabelArr(data)[0][0]
                                  .split(',')[0]}
                    </span>

                    {selectedDate[1] === null ? (
                        ''
                    ) : (
                        <span className="color-point">
                            {selectedDate[1] === null
                                ? ''
                                : helper.getTextDate(
                                      selectedDate,
                                  )[0]}
                        </span>
                    )}
                    {selectedDate[1] === null ? (
                        ''
                    ) : (
                        <span className="color-point light">
                            {selectedDate[1] === null
                                ? ''
                                : helper.getTextDate(
                                      selectedDate,
                                  )[1]}
                        </span>
                    )}
                    <span>
                        {selectedDate[1] === null
                            ? ''
                            : helper
                                  .getTextDate(selectedDate)[0]
                                  .split('\u2013')[1]}
                    </span>
                </div>
            </div>
        </>
    );
};

export default SalesCard;
