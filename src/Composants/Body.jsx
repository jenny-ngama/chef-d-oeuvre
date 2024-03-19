
import logoGarden from "../../Icon/logoGarden.jpeg"
import { Link } from 'react-router-dom';

export default function Body() {
    return (

        <section>
            <div id="bloc" >
                <div className=" pt-[250px] gap-6"><h2 className="text-white text-center font-semibold text-6xl ">BIENVENUE A VOTRE RESTAURANT</h2></div>
                <div className="flex pt-[155px] gap-20 justify-center font-extralight text-2xl"> <button className="bg-green-700 h-16 w-48 text-white my-8">RESERVATIONS</button>
                <button className="bg-green-700 h-16 font-extralight px-12 w-48 text-white self-center my-8 ">MENU</button></div>
            </div>
            <div>
                <div className="flex justify-center text-blue-900 text-xl font-bold m-6 mt-4 my-8">
                    <h3>Produits alimentaires</h3>
                </div>
            </div>
            <div>
                <div className="flex justify-center text-red-600 font-bold text-4xl">
                    <h3>Plats populaires</h3>
                </div>
            </div>
            <div>
                <div>
                    <div className="flex justify-between ml-44 gap-5 w-96 h-96 items-center rounder-xl ">
                        <img src="images/penne-aux-boulettes-viande-sauce-tomate-dans-bol-blanc.jpg" alt="" />
                        <img src="images/ailes-poulet-au-four-dans-style-asiatique.jpg" alt="" />
                        <img src="images/burger-boeuf-viande-laitue-fromage-tomate-frites-vue-laterale.jpg" alt="" />
                        <img src="images/roti.jpg" alt="" />
                        <img src="images/vue-laterale-sandwich-pain-blanc-viande-grillee-escalope-fromage-laitue-frites-mayo-ketchup-planchejpg (2).jpg" alt="" />
                        <img src="images/tacos-mexicains-au-boeuf-sauce-tomate-salsa.jpg" alt="" />
                        <img src="images/pates-fettuccine-bolognaise-sauce-tomate-dans-bol-blanc.jpg" alt="" />

                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-center text-blue-900 text-3xl my-8">
                    <h3>RICHE ET SAIN</h3>
                </div>
            </div>
            <div className="grid grid-cols-11 gap-8 px-44">
                <img className="flex col-span-3 items-center rounded-xl" src="images/imgchefcuisine.jpg" alt="" />
                <div className="col-span-8">
                    <h3 className="text-red-600 text-3xl mb-3">Céréales artisanales, protéines et ingrédients de saison de la plus haute qualité</h3>
                    <p className="text-blue-800 text-x">Une juste indignation et une aversion pour les hommes qui sont si séduits et démoralisés par les charmes du plaisir du moment, si aveuglés par les désirs, qu'ils ne peuvent pas prévoir.</p>
                    <div className="flex justify-between mt-10 items-center">
                        <div className="text-blue-800 items-center text-2xl">
                            <div className=" space-y-5 ml-5 text-xl">
                                <div className="flex gap-2"><img src="Icon/raphael--sun.svg" alt="" /><h3>Simple et facile à distinguer</h3></div>
                                <div className="flex gap-2"><img src="Icon/raphael--sun.svg" alt="" /><h3>Plaisir du moment désir aveugle</h3></div>
                                <div className="flex gap-2"><img src="Icon/raphael--sun.svg" alt="" /><h3>Capable de faire ce que nous aimons le plus</h3></div>
                            </div>

                            <div className="flex justify-center my-10">
                                <button className="h-14 px-12 bg-red-500 justify-center mt-22 text-white rounded-lg font-semibold">Lire la suite...</button>
                            </div>
                        </div>
                        <img className="h-96 rounded-xl" src="images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg" alt="cuisto" />
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-center mt-16 gap-[450px] ">
                    <div><img className="w-8" src="Icon/ci--arrow-circle-left.svg" alt="" /></div>
                    <div className=" text-red-600 text-5xl font-bold "><h3 className="text-center">Offre importante</h3>
                        <div>
                            <div className="flex justify-center text-blue-900 font-light text-2xl"><h3>Car cette semaine, prenez votre nourriture, achetez la meilleure.</h3></div>
                        </div>
                    </div>
                    <div><img className="w-8" src="Icon/ci--arrow-circle-right.svg" alt="" /></div>
                </div>
            </div>
            <div>
                <div className="flex justify-between gap-4 w-96 h-96 items-center">
                    <img src="images/img offre1.jpg" alt="" />
                    <img src="images/img offre2.jpg" alt="" />
                    <img src="images/imgoffre3.jpg" alt="" />
                    <img src="images/imgoffre10.jpg" alt="" />
                    <img src="images/imgoffre9.jpg" alt="" />
                    <img src="images/imgoffre11.jpg" alt="" />
                </div>
            </div>
            <div className="grid gap-2 mb-7 justify-center">
                <div className="text-2xl text-center text-red-600 font-medium">
                    <h3>SPECIALS</h3></div>
                <div className="text-5xl text-blue-950 text-center font-bold" ><h3>Consultez notre carte</h3></div>
                <div className="justify-center flex text-xl text-blue-950 font-normal"><h3>Démoralisé par les charmes du plaisir du moment si aveuglé sauf à un certain avantage.</h3></div>
            </div>
            <div className="flex justify-center gap-56 text-3xl text-red-600">
                <div className="bg-red-600 text-white p-3"><h3>PETIT-DÉJEUNER</h3></div>
                <div><h3>DÉJEUNER</h3></div>
                <div><h3>DÎNER</h3></div>
                <div><h3>STARTERS</h3></div>
                <div><h3>BEVERAGES</h3></div>
            </div>
            <div>
                <div className="ml-44 w-96 mt-4"><img src="images/imgplaspe.jpg" alt="" /></div>
                <div className="flex my-8 items-center text-2xl text-white bg-red-600 p-4 ml-52 mt-6 font-medium h-13"><h3>VOIR TOUS LES MENUS</h3></div> 
            </div>
            <div>
                <div className="flex justify-center text-red-600 items-center text-3xl p-4 ml-52 font-medium"><h3>MANU SPÉCIAUX POUR TOUS LES TEMPS</h3></div>
            </div>
            <div className="gap-5 items-center text-x w-32 ml-44 mt-8 grid-cols-6">
                <div><img src="images/plagarden1.jpg" alt="" /></div>
                <p className="text-red-600">Burger</p>
                <div><img src="images/plagarden2.jpg" alt="" /></div>
                <p className="text-red-600">Burger</p>
                <div><img src="images/plagarden3.jpg" alt="" /></div>
                <p className="text-red-600">Burger</p>
                <div><img src="images/plagarden4.jpeg" alt="" /></div>
                <p className="text-red-600">Burger</p>
                <div><img src="images/plagarden5.jpg" alt="" /></div>
                <p className="text-red-600">Burger</p>
                <div><img src="images/plagarden6.jpg" alt="" /></div>
                <p className="text-red-600">Burger</p>
                <div><img src="" alt="" /></div>
                <p className="text-red-600">Burger</p>
            </div>
           
        </section>
    )
}