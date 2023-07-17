'use client'

export const Button = (props) => {
    return(
      <button onClick={props.click}>{props.text}</button>
    )
  }
