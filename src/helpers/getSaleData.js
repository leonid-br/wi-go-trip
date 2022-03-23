const getSaleData = ({ purchases }, selectedDate) => {
    if (selectedDate[1] === null) {
        return;
    }

    const pastDateStart = [
        (selectedDate[0].getFullYear() - 1).toString(),
        (selectedDate[0].getMonth() + 1)
            .toString()
            .padStart(2, '0'),
        selectedDate[0].getDate().toString().padStart(2, '0'),
    ].join('-');

    const pastDateEnd = [
        (selectedDate[0].getFullYear() - 1).toString(),
        (selectedDate[1].getMonth() + 1)
            .toString()
            .padStart(2, '0'),
        selectedDate[1].getDate().toString().padStart(2, '0'),
    ].join('-');

    const dateStart = [
        selectedDate[0].getFullYear().toString(),
        (selectedDate[0].getMonth() + 1)
            .toString()
            .padStart(2, '0'),
        selectedDate[0].getDate().toString().padStart(2, '0'),
    ].join('-');

    const dateEnd = [
        selectedDate[1].getFullYear().toString(),
        (selectedDate[1].getMonth() + 1)
            .toString()
            .padStart(2, '0'),
        selectedDate[1].getDate().toString().padStart(2, '0'),
    ].join('-');

    const idxStart = purchases.findIndex(
        el => el.date === dateStart,
    );

    const idxEnd = purchases.findIndex(
        el => el.date === dateEnd,
    );

    const pastIdxStart = purchases.findIndex(
        el => el.date === pastDateStart,
    );

    const pastIdxEnd = purchases.findIndex(
        el => el.date === pastDateEnd,
    );

    return [
        purchases.slice(idxStart, idxEnd + 1),
        purchases.slice(pastIdxStart, pastIdxEnd + 1),
    ];
};

export default getSaleData;
