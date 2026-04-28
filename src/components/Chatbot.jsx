import {useState} from "react";

export default function ChatBot(){

const [open,setOpen]=useState(false);

return(
<div className="fixed bottom-6 right-6">
<button onClick={()=>setOpen(!open)}
className="bg-blue-600 p-4 rounded-full">🤖</button>

{open&&(
<div className="glass p-4 w-64">
<p>Hello! Explore my portfolio 👋</p>
</div>
)}
</div>
);
}