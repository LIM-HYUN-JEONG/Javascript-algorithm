//https://programmers.co.kr/learn/courses/30/lessons/77484
//로또의 최고순위와 최저 순위

function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let min = lottos.filter((it) => win_nums.includes(it)).length; //포함하는 숫자 배열로 반환함 (same.length가 필요함)
  let zeroCount = lottos.filter((zero) => 0 === zero).length;
  let max = min + zeroCount;

  var answer = [rank[max], rank[min]];
  return answer;
}
