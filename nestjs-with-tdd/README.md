# nestjs-with-tdd

## 참고자료
- https://docs.nestjs.com/fundamentals/testing
- https://dzone.com/articles/tdd-typescript-nestjs-api-layers-with-jest-part1-controller
- https://dzone.com/articles/tdd-typescript-nestjs-api-layers-with-jest-part2-service
- https://dzone.com/articles/tdd-typescript-nestjs-api-layers-with-jest-part3-repository

## 후기
- nestjs 에서의 controller 와 service 에 대한 TDD 사이클 정리함
- 원문에서는 controller 에서의 유효성검사를 joi 를 사용하는데, 여기서는 class-validator 을 사용했음
  - 상기 이유로 테스트도 원문에서의 joi + custom pipe 에 대한 테스트가 아닌, ValidationPipe 에 대한 테스트를 작성했음
- repository 에 대한 테스트는 작성하지 않음
