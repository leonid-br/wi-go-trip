import Diagram from 'components/Diagram';
import helper from 'helpers';
import './InformationCard.css';

const ViewsCard = ({ data, title, selectedDate }) => {
    //Подсчет количества кликов, просмотров и процента
    const getClickStart = () => {
        if (data === undefined) {
            return;
        }

        const sumViews = data[0].reduce(
            (acc, cur) => acc + cur.view,
            0,
        );

        const sumClicks = data[0].reduce(
            (acc, cur) => acc + cur.click,
            0,
        );

        const precentClicks = (
            (sumClicks * 100) /
            sumViews
        ).toFixed(1);

        return [sumViews, sumClicks, precentClicks];
    };

    //Подсчет количества кликов и просмотров предыдущий период
    const getClickEnd = () => {
        const sumViews = data[1].reduce(
            (acc, cur) => acc + cur.view,
            0,
        );

        const sumClicks = data[1].reduce(
            (acc, cur) => acc + cur.click,
            0,
        );

        return [sumViews, sumClicks];
    };

    return (
        <>
            <div className="cards__container">
                <h3 className="cards__title">{title}</h3>
                <div className="statistic">
                    <span className="cards__views-precent">
                        {data === undefined
                            ? ' '
                            : `${getClickStart(data)[2]}%`}
                    </span>
                    <div className="cards__views-statistics">
                        <span className="cards__views-start">
                            {data === undefined
                                ? ' '
                                : `${getClickStart(data)[0]} → ${
                                      getClickStart(data)[1]
                                  }`}
                        </span>
                        <span className="cards__views-end">
                            {data === undefined
                                ? ' '
                                : `${getClickEnd(data)[0]} → ${
                                      getClickEnd(data)[1]
                                  }`}
                        </span>
                    </div>
                </div>
                <div className="diagram">
                    <Diagram
                        data={data}
                        // onChangeData={onChangeData}
                    />
                </div>
                <div className="legend views">
                    <span>
                        {data === undefined
                            ? ' '
                            : helper
                                  .getLabelArr(data)[0][0]
                                  .split(',')[0]}
                    </span>
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

export default ViewsCard;
