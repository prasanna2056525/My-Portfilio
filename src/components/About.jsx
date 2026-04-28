import data from "../data/portfolio.json";

export default function About(){
return(
<section id="about" className="p-10 text-center">
<h2>About Me</h2>
<p>{data.about}</p>
</section>
);
}