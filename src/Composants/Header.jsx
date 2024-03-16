import img_font_garden from "../../images/img_font_garden.jpg"
import logoGarden from "../../Icon/logoGarden.jpeg"

export default function Header() {

    const style = {
        backgroundImage: "url(" + img_font_garden + ")"
    }
    return (
        <section>


            <div className=" bg-yellow-500 pl-48 pr-48 justify-between text-white xl: pl-30 max-w-10xl h-12 flex gap-10">
                <div className="flex gap-24 mt-2">
                    <div className="flex gap-3">
                        <div><img className=" w-7 " src="Icon/horloge-trois.svg" alt="" /></div>
                        <div><h3>Horaires</h3></div>
                    </div>
                    <div className="flex gap-3 ">
                        <div><img className=" w-6 " src="Icon/appel-telephonique.svg" alt="" /></div>
                        <div><h1>+243 971 011 000</h1></div>
                    </div>
                </div>
                <div className="flex justify-between mt-2 gap-24">
                    <div className="flex gap-2">
                        <div><img className="w-7"src="Icon/whatsapp.svg" alt="" /></div>
                        <div><img className="w-7"src="Icon/facebook.svg" alt="" /></div>
                        <div><img className="w-7"src="Icon/instagram.svg" alt="" /></div>
                    </div>
                    <div className="flex mt-2">
                        <div><h3>ENREGISTRER</h3></div>
                    </div>
                </div>
            </div>

           





        </section>

    )
}
