/** @format */

function solution(record) {
    let usernameDatabase = {};
    let chatroomLog = [];

    for (const command of record) {
        const tokens = command.split(' ');
        switch (tokens[0]) {
            case 'Enter':
                usernameDatabase[tokens[1]] = tokens[2];
                chatroomLog.push([tokens[1], 'Enter']);
                break;

            case 'Leave':
                chatroomLog.push([tokens[1], 'Leave']);
                break;

            case 'Change':
                usernameDatabase[tokens[1]] = tokens[2];
                break;

            default:
                break;
        }
    }

    let answer = [];
    for (const log of chatroomLog) {
        switch (log[1]) {
            case 'Enter':
                answer.push(`${usernameDatabase[log[0]]} came in.`);
                break;

            case 'Leave':
                answer.push(`${usernameDatabase[log[0]]} has left.`);
                break;

            default:
                break;
        }
    }

    return answer;
}

console.log(
    solution([
        'Enter uid1234 Muzi',
        'Enter uid4567 Prodo',
        'Leave uid1234',
        'Enter uid1234 Prodo',
        'Change uid4567 Ryan',
    ]),
);
