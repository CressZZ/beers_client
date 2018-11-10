
const common = {
    comma: number => {
        return new Intl.NumberFormat('ko-KR', {
            maximumSignificantDigits: 9
        }).format(number);
    }, };

module.exports = common;