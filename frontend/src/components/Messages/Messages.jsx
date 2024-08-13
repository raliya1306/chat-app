import { useEffect, useRef, useState } from 'react'
import './Messages.css'
import EmojiPicker from 'emoji-picker-react'

const Messages = () => {
  const [openEmoji, setOpenEmoji] = useState(false)
  const [text, setText] = useState('')
  
  const messageEnd = useRef(null)

  useEffect(() => {
    messageEnd.current?.scrollIntoView({behaviour: 'smooth'})
  }, [])

  const handleEmoji = (e) => {
    setText(prev => prev + e.emoji)
    setOpenEmoji(false)
  }

  return (
    <div className='message'>
      <div className="top">
        <div className="user">
          <img src='default-pfp.webp' alt='' />
          <span>Claire Bailey</span>
        </div>
        <button>Block</button>
      </div>
      <div className="center">
        <div className="message">
          <img src='default-pfp.webp' alt='' />
          <div className="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ut consequatur recusandae quaerat dignissimos ea!</p>
            <span>57s ago</span>
          </div>
        </div>
        <div className="message">
          <img src='default-pfp.webp' alt='' />
          <div className="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ut consequatur recusandae quaerat dignissimos ea!</p>
            <span>57s ago</span>
          </div>
        </div>
        <div className="message mine">
          <div className="text">
            <img src='cherryblossom_tree_wallpaper_nature_hd_by_xrebelyellx_dgtdoah-fullview.jpg' alt='' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ut consequatur recusandae quaerat dignissimos ea!</p>
            <span>57s ago</span>
          </div>
        </div>
        <div className="message">
          <img src='default-pfp.webp' alt='' />
          <div className="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ut consequatur recusandae quaerat dignissimos ea!</p>
            <span>57s ago</span>
          </div>
        </div>
        <div className="message mine">
          <div className="text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. rem qui aspernatur, veritatis odit accusamus dignissimos ea!</p>
            <span>57s ago</span>
          </div>
        </div>
        <div ref={messageEnd}></div>
      </div>
      <div className="bottom">
        <img src='attach.png' alt='' />
        <input type='text' placeholder='Your message' value={text} onChange={e => setText(e.target.value)} />
        <div className="emoji">
         <img src='smiley.png' alt='' onClick={() => setOpenEmoji(prev => !prev)} /> 
         <div className="emojiPicker">
          <EmojiPicker open={openEmoji} onEmojiClick={handleEmoji} height={350} width={350}/>
         </div>
        </div>        
        <img src='send.png' alt='' className='sendButton'/>
      </div>
    </div>
  )
}

export default Messages