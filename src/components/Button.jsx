import React from "react"
import { useNavigate } from "react-router-dom"

export default function Button(props) {
  const nav = useNavigate()
  return (
    <button className="p-2 bg-red-700 text-black my-2 rounded-lg w-fit active:bg-red-800 flex gap-2 items-center" onClick={!props.to ? () => nav(-1) : () => nav(props.to)}>
      <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>{props.children ? props.children : ''}
    </button>
  )
}