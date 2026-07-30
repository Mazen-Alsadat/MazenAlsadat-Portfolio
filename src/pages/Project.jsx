import "./Portfolio.css";

import { motion } from "framer-motion";
import { useState } from "react";

import projects from "../../data/projects";


export default function Portfolio(){


const [selectedProject, setSelectedProject] = useState(null);



return (

<section 
className="portfolio" 
id="work"
>


<div className="container">


<motion.div

className="section-title"

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.7
}}

>

<h2>
My <span>Projects</span>
</h2>


<p>
Selected creative works and case studies.
</p>


</motion.div>





<div className="featured-project">


<img src={projects[0].image} />


<div className="featured-overlay">

<p>
Featured Project
</p>

<h2>
{projects[0].title}
</h2>

</div>


</div>







<div className="projects-grid">


{

projects.map((project,index)=>(


<motion.div

key={project.slug}

initial={{
opacity:0,
y:80
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.5,
delay:index*.15
}}

>


<div

className="project-card"

onClick={()=>{

setSelectedProject(

selectedProject?.slug === project.slug

? null

: project

)

}}

>



<div className="project-image">


<img

src={project.image}

alt={project.title}

/>


</div>





<div className="project-info">


<span>

{project.category}

</span>



<h3>

{project.title}

</h3>



<div className="view-project">

View Project

<span>
↗
</span>

</div>



</div>



</div>






{

selectedProject?.slug === project.slug && (


<motion.div

className="inline-project"

initial={{
opacity:0,
height:0
}}

animate={{
opacity:1,
height:"auto"
}}

transition={{
duration:.5
}}

>


<h2>
{project.title}
</h2>


<p>
{project.description}
</p>





{

project.embed && (

<div className="inline-video">


<iframe

src={project.embed}

title={project.title}

allow="autoplay; fullscreen"

allowFullScreen

/>


</div>

)

}





<div className="inline-meta">


<p>
<strong>Year:</strong> {project.year}
</p>


<p>
<strong>Tools:</strong> {project.tools?.join(" • ")}
</p>


</div>





{

project.link && (

<a

href={project.link}

target="_blank"

rel="noreferrer"

className="behance-btn"

>

Open Behance ↗

</a>

)

}




</motion.div>


)

}



</motion.div>


))


}


</div>



</div>


</section>


)


}