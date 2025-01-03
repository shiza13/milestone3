import Footer from "./components/footer";
import Header from "./components/header";
import Image from "next/image";
export default function Homepage(){
  return(
   <div>
    <Header/><Image src="/Hero Blocks.png" alt="" layout="responsive"
  width={16}
  height={9} /><div><button className="homee-button1"></button></div>
    <div className="txt-brand">What makes our brand different</div>
    <div className="container-row">
  <div className="container-1">
    
    <Image src="/Feature block.png" alt="" layout="responsive"
  width={0}
  height={0} />
  </div>
  <div className="container-2">
    
  <Image src="/Feature block (1).png" alt="" layout="responsive"
  width={0}
  height={0} />
  </div>
  <div className="container-3">
    
  <Image src="/Feature block (2).png" alt="" layout="responsive"
  width={0}
  height={0} />
  </div>
  <div className="container-4">
   
  <Image src="/Feature block (3).png"alt=""  layout="responsive"
  width={0}
  height={0} />
  </div>
</div>
<div className="container-row-2">
  <div className="container-5">
    
    <Image src="/Product Card.png" alt=""layout="responsive"
  width={0}
  height={0}  />
  </div>
  <div className="container-6">
    
  <Image src="/Product Card (1).png" alt=""layout="responsive"
  width={0}
  height={0} />
  </div>
  <div className="container-7">
    
  <Image src="/Product Card (2).png" alt="" layout="responsive"
  width={0}
  height={0}/>
  </div>
  <div className="container-8">
   
  <Image src="/Product Card (3).png" alt="" layout="responsive"
  width={16}
  height={9} />
  </div>
</div>
<button><Image src="/Button Medium.png" alt="" layout="responsive"
  width={16}
  height={9} className="view" /></button>

    <div className="homeimage-container">
    <div><img src="/Text Block.png" alt=""
  
   className="text-block-Image" />
    </div>
    <div><img src="/Image Block.png" alt=""
  
   className="image-block-Image" /></div>
    </div>

    <div><button className="homee-button2"></button></div>
    {/* <div className="signup-on-pic"></div><Image src="/Email sign-up.png"className="email-box-pic"/><input type="text" placeholder="your@email.com" className="input-email"></input> <button className="email-signup-button">Signup</button> */}
    <div className="signup-on-pic">
  <img src="/Email sign-up.png" alt="Image" 
   className="email-box-pic" />
  <input type="text" placeholder="Enter text here" className="home-input-email" />
  <button className="email-signup-button"></button>
</div>
    
    <Footer/>
   </div> 
  
  )
}