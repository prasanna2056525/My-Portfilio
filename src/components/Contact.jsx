import data from "../data/portfolio.json";
import {FaGithub,FaLinkedin,FaFacebook} from "react-icons/fa";

export default function Contact(){
return(
<section id="contact" className="text-center p-10">
<h2>Contact</h2>

<div className="flex justify-center gap-6 text-2xl">
<a href={data.socials.github}><FaGithub/></a>
<a href={data.socials.linkedin}><FaLinkedin/></a>
<a href={data.socials.facebook}><FaFacebook/></a>
</div>
</section>
);
}