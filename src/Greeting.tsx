import React from "react"

type GreetingsProps = {
  name: string
  mark: string
  option?: string
  onClick: (name: string) => void // 아무것도 리턴하지 않는다는 함수를 의미.
}

/*
  React.FC 장점(props 의 타입을 Generics 로 넣어서 사용.)
  1. props 에 기본적으로 children 이 들어가있다는 것
  2. defaultProps, propTypes, contextTypes 를 설정 할 때 자동완성이 될 수 있다는 것
*/
function Greetings({ name, mark, option, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name)
  return (
    <div>
      hello! {name} {mark} {option && <p>{option}</p>}
      <button onClick={handleClick}>click</button>
    </div>
  )
}

Greetings.defaultProps = {
  mark: "!"
}

export default Greetings
