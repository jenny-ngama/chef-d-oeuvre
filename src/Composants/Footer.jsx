export default function Footer(){
    return(
        <footer className="bg-black">
            <section>
            <div className="text-white py-4">
                 <p>NEWS</p>
                  <p>CONTACT US</p>
                  <p>FOLLOW</p>
                </div>
                <div className="flex justify-between mt-2 gap-24">
                    <div className="flex gap-2">
                        <div><img className="w-7"src="Icon/whatsapp.svg" alt="" /></div>
                        <div><img className="w-7"src="Icon/akar-icons--facebook-fill.svg" alt="" /></div>
                        <div><img className="w-7"src="Icon/akar-icons--instagram-fill.svg" alt="" /></div>
                    </div>
                    <p>Copyright © 2022 | Restaurant Garden</p>
                </div>
            </section>
                
        </footer>
    )
}