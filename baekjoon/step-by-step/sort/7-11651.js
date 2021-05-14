/**
 * @see https://www.acmicpc.net/problem/11651
 * @description
 * # Title: 좌표 정렬하기2
 * # Condition
 * # Problem
 * 2차원 평면 위의 점 N개
 * 좌표를 y좌표가 증가하는 순으로, y좌표가 같으면 x좌표가 증가하는 순서로 정렬
 * # Input
 * 첫째 줄에 점의 개수 N (1 ≤ N ≤ 100,000)
 * 둘째 줄부터 N개의 줄에는 i번점의 위치 xi와 yi (-100,000 ≤ xi, yi ≤ 100,000)
 * 좌표는 항상 정수
 * 위치가 같은 점은 없음
 * # Memo
 *
 * @see
 * @arguments
 * Case1
 * `5
0 4
1 2
1 -1
2 2
3 3`
 */

function sortPoints(points) {
  const sorted = points.sort((a, b) => {
    // y좌표 오름차순 정렬
    if (a[1] !== b[1]) return a[1] - b[1];
    // y 좌표 같으면 x 오름차순 정렬
    else return a[0] - b[0];
  });

  return sorted;
}

const sample = [
  `5
0 4
1 2
1 -1
2 2
3 3`,
];

sample.forEach((input) => {
  const [n, ...pointStrings] = input.split('\n');

  const points = pointStrings.map((str) => str.split(' ').map((n) => Number(n)));

  const sorted = sortPoints(points);

  console.log(sorted.map((point) => point.join(' ')).join('\n'));
});
