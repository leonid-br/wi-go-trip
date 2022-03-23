const getEndMonth = selectedDate => {
    if (selectedDate[0] === null) {
        return;
    }
    const endMonthNumber = selectedDate[0].getMonth() - 1;
    return new Date(new Date().setMonth(endMonthNumber))
        .toLocaleString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
        .split(' ')[1];
};

export default getEndMonth;
