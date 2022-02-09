//https://programmers.co.kr/learn/courses/30/lessons/12915
//문자열 내 마음대로 정렬하기

//문제 설명
//문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때,
//각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
//예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면
//각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

//문제해결방법
//기존 strings배열을 오름차순으로 먼저 정렬한 후에 => string.sort()
//n번쨰에있는 문자열을 뽑아비교
//다를경우 그것을 또 오름차순으로 정렬함
//같을경우는 전체를 비교하여 오름차순 정렬

function solution(strings, n) {
  let sortArr = strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
    if (a[n] === b[n]) {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    }
  });

  var answer = sortArr;
  return answer;
}

//다른사람의 풀이(1등) => 완전 깔끔한 코드이다.
////기존 strings배열을 오름차순으로 정렬하고
//화살표함수로 두개의 n번째가 같은지 비교
//localeCompare()는 기준 문자열과 비교했을 때 비교 대상 문자열이 정렬상 전에 오는지, 후에 오는지 혹은 같은 순서에 배치되는지를 알려주는 숫자를 리턴
//a.localeCompare(b) => a가 b보다 앞에있으면 음수, 뒤에있으면 양수, 같으면 0을 반환

//n번째가 같다면, 전체적으로 비교하여 해당하는 숫자 반환
//n번째가 다르다면, n번째를 비교하여 해당하는 숫자 반환

function solution(strings, n) {
  // strings 배열
  // n 번째 문자열 비교
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}
