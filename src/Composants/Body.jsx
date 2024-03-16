
import logoGarden from "../../Icon/logoGarden.jpeg"

export default function Body() {
    return (

        <section>
            <div className="bg-white -100 text-2xl text-white xl:  max-w-10xl h-20 font-bold flex ">
                <div className="flex justify-center">
                    <div className="ml-24 w-24">
                        <img className="h-16" src={logoGarden} alt="" />
                    </div>
                    <div className=" text-sky-950 flex justify-between mt-6 mr-32 font-extralight text-xl">
                        <div className="flex gap-10 ml-50 pl-48">
                            <h3>HOME</h3>
                            <h3>ABOUT</h3>
                            <h3>RESTAURANT</h3>
                            <h3>RESERVATIONS</h3>
                            <h3>CONTACT</h3>
                        </div>
                    </div>
                    <div>
                    <div className=" ml-[450px] flex gap-24 pb-2 pt-2">
                        <div className=" justify-center bg-sky-800 w-14 rounded-full flex">
                            <img className=" w-8" src="Icon/panier (2).svg" alt="" />
                        </div>
                        <div className="h-12 bg-red-500 self-center text-white rounded-lg p-3">
                            <button>LOGIN</button>
                        </div>
                    </div>
                    </div>
                  
                </div>
            </div>
            <div>
                
            </div>
            <div id="bloc" >
                <div className=" pt-[250px] gap-6 justify-center"><h2 className="text-white text-center font-semibold text-6xl ">BIENVENUE A VOTRE RESTAURANT</h2></div>
                <div className="flex pt-[155px] gap-6 justify-center font-extralight"> <button className="bg-green-600 h-16 font-semibold rounded-xl w-48 text-white">RESERVATION</button>
                <button className="bg-green-600 h-16 font-semibold px-12 rounded-xl w-32 text-white self-center my- ">MENU</button></div>
            </div>
            <div>
                <div className="flex justify-center text-blue-900 text-xl font-bold m-6">
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
                    <div className="flex justify-between ml-44 gap-5 rounder-xl w-96 h-96 items-center">
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
                <div className="flex justify-center text-blue-900 text-2xl my-8">
                    <h3>RICHE ET SAIN</h3>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-8 px-52">
                <img className="flex col-span-3 items-center rounded-xl" src="images/imgchefcuisine.jpg" alt="" />
                <div className="col-span-8">
                    <h3 className="text-red-600 text-4xl mb-8">Céréales artisanales, protéines et ingrédients de saison de la plus haute qualité</h3>
                    <p className="text-blue-800 text-xl">Une juste indignation et une aversion pour les hommes qui sont si séduits et démoralisés par les charmes du plaisir du moment, si aveuglés par les désirs, qu'ils ne peuvent pas prévoir.</p>
                    <div className="flex justify-between mt-10 items-center">
                        <div className="text-blue-800 items-center text-2xl">
                            <div className=" space-y-10 ml-5 text-xl">
                                
                                <div className="flex gap-2"><img src="Icon/raphael--sun.svg" alt="" /><h3>Simple et facile à distinguer</h3></div>
                                <div className="flex gap-2"><img src="Icon/raphael--sun.svg" alt="" /><h3>Plaisir du moment désir aveugle</h3></div>
                                
                                <div className="flex gap-2"><img src="Icon/raphael--sun.svg" alt="" /><h3>Capable de faire ce que nous aimons le plus</h3></div>
                            </div>

                            <div className="flex justify-center my-10">
                                <button className="h-14 px-12 bg-red-500 self-center mt-8 text-white rounded-lg font-extralight">Lire la suite...</button>
                            </div>
                        </div>
                        <img className="h-96 rounded-xl" src="images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg" alt="cuisto" />
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-center">
                    <div><img className="w-6 rounded-xl" src="Icon/fleche-cercle-gauche.svg" alt="" /></div>
                    <div className=" text-red-600 text-5xl font-bold "><h3 className="text-center">Offre importante</h3>
                        <div>
                            <div className="flex justify-center text-blue-600 mt-24 text-2xl"><h3>Car cette semaine, prenez votre nourriture, achetez la meilleure.</h3></div>
                        </div>
                    </div>
                    <div><img className="w-6" src="Icon/fleche-cercle-droite.svg" alt="" /></div>
                </div>
            </div>
            <div>
                <div className="flex justify-between gap-3 w-96 h-96 items-center ">
                    <img src="images/img offre1.jpg" alt="" />
                    <img src="images/img offre2.jpg" alt="" />
                    <img src="images/imgoffre3.jpg" alt="" />
                    <img src="images/imgoffre10.jpg" alt="" />
                    <img src="images/imgoffre9.jpg" alt="" />
                    <img src="images/imgoffre11.jpg" alt="" />
                </div>
            </div>
            <div className="grid gap-5 mb-7 justify-center">
                <div className="text-xl text-center text-red-600 font-medium">
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
                <div className="flex my-8 items-center text-2xl text-white bg-red-600 p-4 ml-52 mt-6 font-medium"><h3>VOIR TOUS LES MENUS</h3></div> 
            </div>
            <div>
                <div className="flex justify-center text-red-600 items-center text-3xl p-4 ml-52 font-medium"><h3>MANU SPÉCIAUX POUR TOUS LES TEMPS</h3></div>
            </div>
            <div className="gap-5 items-center text-x w-32 text-center rounded-full ml-44 mt-8 my-8">
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