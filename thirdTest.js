/** @format */

const k_combinations = require('./combinations').k_combinations;

// Source: https://stackoverflow.com/a/43053803/10598076
const f = (a, b) => [].concat(...a.map((d) => b.map((e) => [].concat(d, e))));
const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);

// Source: https://stackoverflow.com/a/7376645/10598076
function hasDuplicates(array) {
    return new Set(array).size !== array.length;
}

function solution(relation) {
    let columnData = Array.from({ length: relation[0].length }, () => []);
    // const possibleColumn = Array.from(Array(relation[0].length).keys()); // [0, 1, 2, ..., N]
    let candidateKey = 0;

    for (const row of relation) {
        for (let i = 0; i < row.length; i++) {
            columnData[i].push(row[i]);
        }
    }

    for (let i = 1; i <= columnData.length; i++) {
        const possibleColumnCombinations = k_combinations(columnData, i); // Calculate each combination of columns

        for (const columnCombinations of possibleColumnCombinations) {
            // If the column combination contains a non-exist element in columnData, skip it.
            if (
                columnCombinations.some(
                    (column) => !columnData.includes(column),
                )
            )
                continue;

            const combinedColumns = cartesian(...columnCombinations); // Combine the data of each row of the array of the columns

            if (!hasDuplicates(combinedColumns)) {
                candidateKey += 1;
                for (const column of columnCombinations) {
                    columnData = columnData.filter((item) => item !== column);
                }
            }
        }
    }

    let answer = candidateKey;
    return answer;
}

console.log(
    solution([
        ['100', 'ryan', 'music', '2'],
        ['200', 'apeach', 'math', '2'],
        ['300', 'tube', 'computer', '3'],
        ['400', 'con', 'computer', '4'],
        ['500', 'muzi', 'music', '3'],
        ['600', 'apeach', 'music', '2'],
    ]),
);
