import ThemeToggle from "./ThemeToggle";

export default function Navbar(){
return(
<nav className="fixed w-full glass p-4 flex justify-between">
<h1>Portfolio</h1>
<div className="space-x-4">
<a href="#about">About</a>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>
<ThemeToggle/>
</div>
</nav>
);
}