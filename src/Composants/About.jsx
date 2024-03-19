import img_place_garden from "../../images/img_placegarden.jpg"

export default function About (){
    const style = {
           backgroundImage: "url(" + img_place_garden + ")"
       }

   return(

      <section className="min-h-screen">
<div id="about">
    <p className="text-white text-center pt-60 font-semibold text-6xl">WHO WE ARE</p>
</div>


    </section>
   )
}
