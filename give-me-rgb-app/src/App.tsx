import { RefreshCcw,Clipboard, Check, Copyright } from "lucide-react";
import { useEffect, useState } from "react";
import { IconButton } from "./Components/IconButton";

function App() {
  const [copy,setcopy] = useState<boolean>(false);

  const generateRGB = () => {
      const doc = document.getElementById("v");
      const vals = document.getElementById("rgb-val");
      const cop = document.getElementById("cop");
      const gi = document.getElementById("grow-img");
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);

      vals.innerText = `${r} ${g} ${b}`
      doc.style.backgroundColor = `rgb(${r},${g},${b})`

      vals.setAttribute("data-value", `rgb(${r},${g},${b})`)

      gi.style = `filter: drop-shadow(0px 0px 16px rgba(${r},${g},${b}, 1));`

      cop.innerHTML = "";

      for(let i = 1; i < 10; i++) {
        
        cop.innerHTML += `
          <div data-value="rgba(${r},${g},${b},0.${i})" data-op="0.${i}" style="background-color:rgba(${r},${g},${b},0.${i});padding:2rem;margin:0.5rem;box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.75);">
            <p style="text-shadow: 0px 0px 10px rgba(0,0,0,0.6);color:#fff;">0.${i}<p>
          </div>
        `;
      }
  }

  const copyrgb = () => {
    const vals = document.getElementById("rgb-val");

    navigator.clipboard.writeText(vals.getAttribute('data-value'));

    setcopy(true);

    setTimeout(()=>{
      setcopy(false);
    },2000)
  }

  useEffect(()=>{
    return () => generateRGB();
  },[]);

  return (
    <>
      <div id="v" className="h-screen flex justify-center items-center">
        <div className="flex justify-center items-center dark:bg-zinc-800 bg-zinc-200 shadow-md p-4 rounded-md gap-7">
            <IconButton onClick={generateRGB}>
              <RefreshCcw className="text-zinc-950 dark:text-zinc-200 text-4xl"/>
            </IconButton>
          <div className="">
            <h1 id="rgb-val" className="text-4xl font-bold text-zinc-950 dark:text-zinc-200">00 00 00</h1>
          </div>
          <IconButton onClick={copyrgb}>
            {copy ? (
              <Check className="text-emerald-600"/>
            ) : (
              <Clipboard className="text-zinc-950 dark:text-zinc-200 text-4xl"/>
            )}
          </IconButton>
        </div>
      </div>
      <div className="dark:bg-zinc-800 bg-zinc-200 p-6">
          <div className="flex justify-center items-center mb-4">
            <h1 className="text-4xl font-bold text-zinc-950 dark:text-zinc-200">Opacity</h1>
          </div>
          <div className="flex justify-center items-center flex-wrap" id="cop">
          </div>
      </div>
      <div className="dark:bg-zinc-800 bg-zinc-200 p-6">
          <div className="flex justify-center items-center mb-8">
            <h1 className="text-4xl font-bold text-zinc-950 dark:text-zinc-200">Grow</h1>
          </div>
          <div className="flex justify-center items-center flex-wrap mb-8" id="gro">
            <img id="grow-img" className="h-60 w-60 rounded-full object-cover" src="https://picsum.photos/200" alt="Placeholder Image" />
          </div>
      </div>
      <div className="dark:bg-zinc-900  bg-zinc-400 p-6">
        <div className="flex justify-center items-center m-8 gap-2 flex-wrap">
          <h1 className="text-zinc-950 dark:text-zinc-200 text-4xl font-bold">Created by</h1>
          <a target="_blank" href="https://eduardoduarte.com.br" className="text-zinc-950 dark:text-zinc-200 text-4xl font-bold underline hover:text-blue-400">Eduardo Duarte</a>
          <Copyright className="text-zinc-950 dark:text-zinc-200 text-4xl"/> 
          <h1 className="text-zinc-950 dark:text-zinc-200 text-4xl font-bold">
            {new Date().getFullYear()}
          </h1>
          
        </div>
      </div>
    </>
  )
}

export default App
