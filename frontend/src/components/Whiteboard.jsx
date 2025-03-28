import React, { useEffect, useRef, useState } from 'react'
import Editor from '@monaco-editor/react';



const Whiteboard = ({ whiteBoardVisibility, roomId , focusing , languageValue , inputValue , onChangeFunction , resetBtnClr , isError , output }) => {
  

  return (
    <div className={`absolute p-2 flex bg-gray-200 z-[999] items-center justify-evenly h-full w-[90rem] bg-white shadow-[0px_0px_20px_rgba(0,0,0,1)] transition-all ease-in-out delay-3050 ${whiteBoardVisibility ? 'right-0 top-0' : 'right-[-100rem] top-0'}`}>

      
        <div className='h-full w-[48%] '>
        <div id='editing-area' className='w-full h-full bg-gray-900 flex-grow my-2 p-[7px] rounded overflow-hidden flex-grow'>
            <Editor
              height="100%"
              theme="vs-dark"
              onMount={() => focusing}
              language={languageValue}
              value={inputValue}
              onChange={() => onChangeFunction}
            />;
          </div>
        </div>
        <div className='h-full w-[48%] '>
        <div id="output-display-block" className={`bg-gray-900 h-full w-full rounded p-4 overflow-auto break-words ${isError.current ? `text-red-500 border border-red-500` : `text-gray-300 border border-green-300`} ${!resetBtnClr ? `border-0 text-gray-300` : null} `}>
            {output.map((val, i) => {
              return <p key={i}>{val}</p>
            })}
        </div>
      </div>
    </div>
  )
}

export default Whiteboard


