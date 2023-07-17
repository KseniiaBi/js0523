import Image from 'next/image'
import styles from './page.module.css'
import {Button} from './components/button.js'
import {greet, showArray} from './components/helper.js'

const data = [1,2,3,4,5];
const message = 'Hello! This is homepage';

export default function Home() {
  return (
    <>
      <h1>{message}</h1>
      <p>This is React App</p>
      <Button click={greet} text="Click me" />
      <Button click={showArray} text={data.join('/')} />
    </>
  )
}

