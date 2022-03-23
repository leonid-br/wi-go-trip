const getTextDate = selectedDate => {
    if (selectedDate === undefined) {
        return '';
    }
    if (selectedDate[1] === null) {
        return;
    }

    const dateStartNormalize = selectedDate[0]
        .toLocaleString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
        .split(' ');

    const dateEndNormalize = selectedDate[1]
        .toLocaleString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
        .split(' ');
    const dateStart = `${dateStartNormalize[0]}\u2013${dateEndNormalize[0]} ${dateStartNormalize[1]} ${dateStartNormalize[2]}`;

    const dateEnd = `${dateStartNormalize[0]}\u2013${
        dateEndNormalize[0]
    } ${dateEndNormalize[1]}
        ${dateEndNormalize[2] - 1}`;

    return [dateStart, dateEnd];
};

export default getTextDate;
