import data from "../data/portfolio.json";

export default function Skills(){
return(
<section className="p-10">
<h2 className="text-center">Skills</h2>
<div className="flex flex-wrap justify-center gap-3">
{data.skills.map((s,i)=>
<span key={i} className="glass px-4 py-2">{s}</span>
)}
</div>
</section>
);
}