import "./Navbar.css";
import { useState,useEffect } from "react";


export default function Navbar(){


const [scrolled,setScrolled] = useState(false);

const [open,setOpen] = useState(false);



useEffect(()=>{


const handleScroll=()=>{

setScrolled(window.scrollY > 50);

};


window.addEventListener("scroll",handleScroll);


return()=>{

window.removeEventListener("scroll",handleScroll);

};


},[]);



return(


<header

className={`navbar ${scrolled ? "scrolled":""}`}

>


<div className="container nav">



<a href="/" className="logo">

<img src="/logo.png" alt="Mazen Logo"/>

</a>





<nav className={open ? "active":""}>


<a href="#work" onClick={()=>setOpen(false)}>
Work
</a>


<a href="#about" onClick={()=>setOpen(false)}>
About
</a>


<a href="#contact" onClick={()=>setOpen(false)}>
Contact
</a>



</nav>





<div className="nav-actions">


<a

href="https://drive.google.com/drive/u/0/folders/12z3mJJzZhXKoeGaHMDeE8uY5ZKE-sv-P"

target="_blank"

rel="noreferrer"

className="secondary-btn"

>

More Projects ↗

</a>



<a

href="https://wa.me/201111958142"

target="_blank"

rel="noreferrer"

className="cta"

>

Let's Talk

</a>



<button

className={`menu-btn ${open ? "open":""}`}

onClick={()=>setOpen(!open)}

>


<span></span>
<span></span>
<span></span>


</button>



</div>



</div>



</header>


)

}