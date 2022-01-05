/* eslint-disable @typescript-eslint/no-explicit-any */
export const toCapitalize = (s?: string) => `${s?.charAt(0).toUpperCase()}${s?.slice(1)}`;

export const toLocaleString =
    (locale = 'en', currency?: 'PHP') =>
    (value: string | number = '') => {
        let stringValue: string;

        if (typeof value === 'number') {
            stringValue = `${value}`;
        } else {
            stringValue = value;
        }

        const n = stringValue.replace(/,/g, '');

        if (Number.isNaN(Number(n))) {
            return stringValue;
        }

        try {
            if (currency) {
                return Number(n).toLocaleString(locale, {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                });
            }

            return Number(n).toLocaleString(locale, {
                maximumFractionDigits: 20,
            });
        } catch (e) {
            return stringValue;
        }
    };

export const truncateNumber = (value: number | string, decimalCount = 2) => {
    const val = Number(value);
    const re = new RegExp(`(\\d+\\.\\d{${decimalCount}})(\\d)`);
    const m = val.toString().match(re);
    return m ? parseFloat(m[1]) * Math.sign(val) : value;
};

// export const transformText = (t: any, language: string) => (value: string | number, type?: TextTypes) => {
//     switch (type) {
//         case 'currency':
//             return toLocaleString(language)(truncateNumber(Number(value).toFixed(2), 2));
//         default:
//             return t(value);
//     }
// };
