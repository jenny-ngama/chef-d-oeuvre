import img_font_garden from "../../images/img_font_garden.jpg"
import logoGarden from "../../Icon/logoGarden.jpeg"
import { Link } from "react-router-dom"

export default function Header() {

    const style = {
        backgroundImage: "url(" + img_font_garden + ")"
    }
    return (
        <section>

            <div className="bg-yellow-500 pl-48 pr-48 justify-between text-white xl: pl-30 max-w-10xl h-12 flex gap-10">
                <div className="flex gap-24 mt-2">
                    <div className="flex gap-3">
                        <div><img className=" w-7 " src="Icon/akar-icons--circle-chevron-down-fill.svg" alt="" /></div>
                        <div><h3>Horaires</h3></div>
                    </div>
                    <div className="flex gap-3 ">
                        <div><img className=" w-6 " src="Icon/ic--sharp-local-phone.svg" alt="" /></div>
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

            <div className="bg-white -100 text-2xl text-white xl:  max-w-10xl h-20 font-bold flex ">
                <div className="flex justify-center">
                    <div className="ml-24 w-24">
                        <img className="h-16" src={logoGarden} alt="" />
                    </div>
                    <div className=" text-sky-950 flex justify-between mt-6 mr-30 font-extralight text-xl">
                        <div className="flex gap-10 ml-96 pl-30">
                        <   Link to="/" >
                                <span>HOME</span>
                            </Link>

                            <Link to="/about" >
                                <span>ABOUT</span>
                            </Link>
                            <span>RESTAURANT</span>
                            <span>RESERVATIONS</span>
                            <span>CONTACT</span>
                        </div>
                    </div>
                    <div>
                    <div className=" ml-[450px] flex gap-24 pb-2 pt-2">
                        <div className=" justify-center bg-sky-800 w-14 rounded-full flex">
                            <img className=" w-8" src="Icon/panier (2).svg" alt="" />
                        </div>
                        <div className="h-12 bg-red-500 self-center text-white rounded-lg p-3">
                            <div className="pl-30"> <button>LOGIN</button></div>
                           
                        </div>
                    </div>
                    </div>
                  
                </div>
            </div>

           





        </section>

    )
}
