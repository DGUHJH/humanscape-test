# 휴먼스케이프 투두리스트 과제

## 개발 스택
- 라이브러리 : React.js (CRA)
- 언어 : Typescript
- 상태 관리 모듈 : redux-toolkit
- css 관리 모듈 : Styled-components

## 실행 방법
```
$ git clone https://github.com/DGUHJH/humanscape-test.git
$ cd humanscape-test
$ npm install
$ npm start
```

## 빌드 방법
```
$ npm run build
```

## 배포
- https://epic-noether-a4a323.netlify.app/

## 트러블슈팅
1. Custom hook 사용 여부
    - useTodo라는 hook을 만들어서 사용하려고 하였으나, 컴포넌트 간의 연결성과 라이프 사이클이 비교적 단조로워 사용하지 않아도 되겠다고 판단하였습니다.
2. State 관리 방식
    - Custom hook, state, props로 개발 -> prop drilling 발생 -> useReducer, Context API로 개발 -> 최적화 과정 -> Redux
    - 결론적으로 useReducer, Context API로 개발이 가능하였으나 최적화 과정에서 Redux를 만드는 것과 별반 다를게 없어 Redux-toolkit을 사용하였습니다.
3. Jest 적용
    - 해당 프로젝트에서 진행할 마땅한 테스트가 떠오르지 않아 사용하지 않기로 결정했습니다.
4. git 관리
    - 레포지토리 관리가 아직은 미숙하여 분기와 브랜치가 중구난방으로 되어 있습니다. 해당 부분과 관련하여 git 사용 방식을 개선하기 위해 지금도 계속적으로 공부를 하고 있습니다.
5. Type 관리
    - 보통 Type은 따로 폴더를 만들어서 관리를 하는 편인데, 해당 프로젝트는 타입이 많이 존재하지 않아 분리하지 않았습니다.
