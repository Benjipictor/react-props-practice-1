import { useState } from 'react'
import Title from './Title'
import './styles.css'
import NameLength from './Name-Length'
import NameReversed from './Name-Reversed'

export default function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
      <Title name={name}/>
      <NameLength name={name}/>
      <NameReversed name={name}/>
    </div>
  )
}
