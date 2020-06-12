/** @format */

function solution(N, users) {
    let stageFailureRate = [];
    for (let stage = 1; stage <= N; stage++) {
        const playerPlayedStageNCount = users.reduce((total, currentUser) => {
            if (currentUser >= stage) return total + 1;
            else return total;
        }, 0);
        const playerNotClearedStageNCount = users.reduce(
            (total, currentUser) => {
                if (currentUser === stage) return total + 1;
                else return total;
            },
            0,
        );
        stageFailureRate.push([
            stage,
            playerNotClearedStageNCount / playerPlayedStageNCount,
        ]);
    }

    const sortedStage = stageFailureRate.sort((a, b) => {
        return b[1] - a[1];
    });

    let answer = sortedStage.map((e) => e[0]);
    return answer;
}

console.log(solution(4, [4, 4, 4, 4, 4]));
