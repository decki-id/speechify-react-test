import './App.css'
import { Controls } from './components/Controls'
import { useSpeech } from './lib/useSpeech'
import { CurrentlyReading } from './components/CurrentlyReading'
import { useEffect, useState } from 'react'
import { fetchContent, parseContentIntoSentences } from './lib/content'

function App() {
  const [sentences, setSentences] = useState<Array<string>>([])
  // const { currentWord, currentSentence, controls } = useSpeech(sentences)

  useEffect(() => {
    // These functions has no process on the source file.
    // fetchContent().then((res: any) => {
    //   console.log(parseContentIntoSentences(res))
    // }).catch((err: any) => {
    //   console.log(err)
    //   return `<speak><s>There was an error</s></speak>`
    // })
    fetch("http://localhost:5174/content", {
      method: "GET", headers: { "Content-Type": "application/json" }
    }).then((res: any) => {
      // Never handle a 'ReadableStream' response before,
      // and I (of course) can't Google it while facing this test.
      // I'm also running out of time, so I guess I'm out.
      console.log(res.body)
    }).catch((err: any) => {
      console.log(err)
      return `<speak><s>There was an error</s></speak>`
    })
  })

  return (
    <div className="App">
      <h1>Text to speech</h1>
      <div>
        {/* <CurrentlyReading/> */}
      </div>
      <div>
        {/* <Controls/> */}
      </div>
    </div>
  )
}

export default App
