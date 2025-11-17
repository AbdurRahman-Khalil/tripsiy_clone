const getPriceRange = (rangeString) => {
    if (!rangeString) return null;

    const numbers = rangeString.match(/\d+/g);

    if (!numbers || numbers.length < 2) return null;

    return {
        min: Number(numbers[0]),
        max: Number(numbers[1]),
    };
};

export default getPriceRange;
