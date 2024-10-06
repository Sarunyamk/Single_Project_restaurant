import React ,{useEffect,useState} from 'react'
import { IoVolumeHighSharp } from "react-icons/io5";
import useAppStore from '../zustand/appStore'


export default function TextVoice() {
    const user = useAppStore((state)=> state.user)   
    const text =  `Hello ,How are you today ?`
    const [word,setWord] = useState(null)

    useEffect(() => {
       const synth = window.speechSynthesis
       const u = new SpeechSynthesisUtterance(text)
       setWord(u)
    }, [])

    const hdlPlay = () => {
        const synth = window.speechSynthesis
        synth.speak(word)
    }

  return (
    <div className=' font-head flex gap-6 justify-center items-center'>
      <p className='font-main'>{text}</p>
      <IoVolumeHighSharp onClick={hdlPlay} className='cursor-pointer'/>
    </div>
  )
}
