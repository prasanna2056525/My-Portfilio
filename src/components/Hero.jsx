import data from "../data/portfolio.json";

export default function Hero(){
return(
<section className="h-screen flex flex-col justify-center items-center">
<img src="/profile.png" className="w-40 rounded-full"/>
<h1 className="text-4xl">{data.name}</h1>
<p>{data.title}</p>
</section>
);
}