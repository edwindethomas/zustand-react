import {useCounterStore} from './store/counterStore'
import {shallow} from 'zustand/shallow';
import { useEffect } from 'react';

function App() {

  const {counter,name,posts} = useCounterStore((state)=> ({
    counter: state.count,
    name: state.title,
    posts: state.posts
  }),shallow)

  const {increment, getPosts, clearStore, multiply} = useCounterStore()
  useEffect(()=>{
    getPosts()
  },[])

  return (
    <>
      <h1>{name}</h1>
      <div>{counter}</div>
      <button
      onClick={()=>{
        increment(10)
      }}
      >Increment by 10</button>
      <button onClick={clearStore}>clear</button>
      <button onClick={()=>{multiply(2)}}>Multiply</button>
      <hr />
      {JSON.stringify(posts)}

    </>
  )
}

export default App