export default function Footer(){
    return(
        <footer className="bg-black">
            <section>
            <div className="text-white py-4 flex justify-between text-2xl ">
                <div className="ml-80"><h3>NEWS</h3>
                </div>
                <div className="text-center "><h3>CONTACT US</h3></div>
                  <div className="mr-80"><h3>FOLLOW US</h3></div> 
                </div>
                <div className="flex justify-between mt-8 pt-96">
                    <div className="flex gap-2">
                        <div><img className="w-7"src="" alt="" /></div>
                        <div><img className="w-7"src="Icon/akar-icons--facebook-fill.svg" alt=""/></div>
                        <div><img className="w-7"src="Icon/akar-icons--instagram-fill.svg" alt=""/></div>
                    </div>
                    </div>
                    <div className="flex justify-center text-white text-x h-12 pt-2 bg-blue-950">
                    <div><p>Copyright © 2024 | Restaurant Garden</p></div> 
                </div>       
            </section>
    
        </footer>
    )
}