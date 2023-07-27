import Link from 'next/link'
import styles from './page.module.css'
import Counter from './counter';
import CountersSection  from './sectionWithCounters';
import CoolCounter from './coolCounter';
const message = 'Hello! This is homepage';


export default function Home() {
 
  return (
    <>
      
      <p>This is React App</p>
    <section>
      <h2>Section with Counters</h2>
      <Counter />
      <Counter />
    </section>
      <CountersSection />
      <hr />
      <CoolCounter />
    </>
  )
}

