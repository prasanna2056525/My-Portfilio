import data from "../data/portfolio.json";

export default function Projects(){
return(
<section id="projects" className="p-10">
<h2 className="text-center">Projects</h2>

<div className="grid md:grid-cols-2 gap-6">
{data.projects.map((p,i)=>(
<div key={i} className="glass p-6">
<h3>{p.title}</h3>
<p>{p.description}</p>
<a href={p.link}>View</a>
</div>
))}
</div>
</section>
);
}