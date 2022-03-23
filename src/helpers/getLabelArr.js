const getLabelArr = data => {
    if (data === undefined) {
        return '';
    }
    const dateStartArr = data[0].map(el => {
        const parsDate = Date.parse(el.date);
        return new Date(parsDate)
            .toLocaleString('ru', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            })
            .slice(0, -3);
    });

    const dateEndArr = data[1].map(el => {
        const parsDate = Date.parse(el.date);
        return new Date(parsDate)
            .toLocaleString('ru', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            })
            .slice(0, -3);
    });

    return dateStartArr.map((elem, index) => [
        `${elem},${dateEndArr[index]}`,
    ]);
};

export default getLabelArr;
