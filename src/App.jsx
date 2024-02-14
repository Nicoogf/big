import { RiMenuFill } from "react-icons/ri";
import Logo from "../public/logo.png"
import Logo1 from "../public/1.png"
import Logo2 from "../public/2.png"
import Logo3 from "../public/3.png"
import Logo4 from "../public/4.png"
import { BiNews } from "react-icons/bi";
import { MdSettingsVoice } from "react-icons/md";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { TbSeo } from "react-icons/tb";
import { FaPencilAlt } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import web from "../public/web.jpg"
import profile from "../public/profile.png" ;
import { FaInstagram } from "react-icons/fa6";

function App() {

  return (
    <main>

    
    <nav className='gradient-blue pb-10'>
      <div className="container flex flex-row items-center justify-around pt-10 mx-auto">
        {/* Menu Hamburgesa*/}
        <RiMenuFill className="text-white h-10 w-10 font-bold cursor-pointer"/>
        <img src={Logo} className="w-32"/>
        <a href="#" className="text-white border-2 border-white p-2 rounded-md"> Hablemos </a>
      </div>

      <div className="container pt-10 mx-auto">
        <h1 className="text-white text-center text-6xl w-[80%] mx-auto">
         Agencia de ventas digital
        </h1>
        <h5 className="text-white text-center w-[80%] mx-auto pt-8">
        Todo lo que necesitas en un solo lugar,  para obtener presencia y <span className="text-orange-500"> VENTAS </span> de manera digital.
        No te quedes afuera del mercado con mayor crecimiento en la última década   
        </h5>
        <a className="mt-4 bg-pink-600 font-semibold text-white px-4 py-3 rounded-md cursor-pointer block mx-auto w-[30%] text-center"> Hablemos </a>

      </div>
    </nav>

    <section className="bg-gray-900">
      <h3 className="text-gray-300 text-center font-semibold text-lg pt-4"> Trabajamos con </h3>

      <div className="container flex flex-row mx-auto">
      <img src={Logo1} className="w-32 mx-auto"/>
      <img src={Logo2} className="w-32 mx-auto"/>
      <img src={Logo3} className="w-32 mx-auto"/>
      <img src={Logo4} className="w-32 mx-auto"/>
      </div>
     
    </section>

    <section>
      <h3 className="text-4xl mb-4 text-center pt-4"> Servicios </h3>

      <div className="mx-auto container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <article className="shadow-2xl flex flex-col items-center justify-center py-10 w-[90%] mx-auto rounded-md border-2 border-gray-200">
        <BiNews className="text-8xl"/>
        <h5 className="text-2xl pb-2">Desarrollo web</h5>
        <p className="text-gray-800 w-[90%] text-center"> Ideal para tener presencia digital y profesionalizar tu marca.</p>
        </article>
        <article className="shadow-2xl flex flex-col items-center justify-center py-10 w-[90%] mx-auto rounded-md border-2 border-gray-200">
        <MdSettingsVoice className="text-8xl"/>
        <h5 className="text-2xl pb-2">Publicidad</h5>
        <p className="text-gray-800 w-[90%] text-center"> Ideal para tener presencia digital y profesionalizar tu marca.</p>
        </article>
        <article className="shadow-2xl flex flex-col items-center justify-center py-10 w-[90%] mx-auto rounded-md border-2 border-gray-200">
        <PiShoppingCartSimpleDuotone className="text-8xl"/>
        <h5 className="text-2xl pb-2">Publicidad</h5>
        <p className="text-gray-800 w-[90%] text-center"> Ideal para tener presencia digital y profesionalizar tu marca.</p>
        </article>
        <article className="shadow-2xl flex flex-col items-center justify-center py-10 w-[90%] mx-auto rounded-md border-2 border-gray-200">
        <TbSeo className="text-8xl"/>
        <h5 className="text-2xl pb-2">SEO</h5>
        <p className="text-gray-800 w-[90%] text-center"> Ideal para tener presencia digital y profesionalizar tu marca.</p>
        </article>
        <article className="shadow-2xl flex flex-col items-center justify-center py-10 w-[90%] mx-auto rounded-md border-2 border-gray-200">
        <FaPencilAlt className="text-8xl"/>
        <h5 className="text-2xl pb-2">Diseño grafico</h5>
        <p className="text-gray-800 w-[90%] text-center"> Ideal para tener presencia digital y profesionalizar tu marca.</p>
        </article>
        <article className="shadow-2xl flex flex-col items-center justify-center py-10 w-[90%] mx-auto rounded-md border-2 border-gray-200">
        <IoShareSocial className="text-8xl"/>
        <h5 className="text-2xl pb-2">Redes Sociales</h5>
        <p className="text-gray-800 w-[90%] text-center"> Ideal para tener presencia digital y profesionalizar tu marca.</p>
        </article>
        
    

      </div>
     
    </section>

    <section>
      <h3 className="text-4xl mb-4 text-center pt-4 my-8 pb-8">Mirá nuestros trabajos realizados</h3>

      <div className="mx-auto container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">

       <article className="relative shadow-2xl flex flex-col items-center justify-center w-[90%] mx-auto rounded-md border-2 border-gray-200">
        <div className="absolute hover:bg-gray-800/80 w-full h-full duration-300 transition-colors text-transparent hover:text-white ">
          <div className="absolute bottom-8 mx-auto w-full">
            <h5 className="font-semibold text-xl text-center"> Desarollo web </h5>
            <h6 className="text-center "> ¡Mira los sitios que realizamos para nuestros clientes!</h6>
          </div>         
        </div>
         <img src={web} />        
        </article>
        <article className="relative shadow-2xl flex flex-col items-center justify-center w-[90%] mx-auto rounded-md border-2 border-gray-200">
        <div className="absolute hover:bg-gray-800/80 w-full h-full duration-300 transition-colors text-transparent hover:text-white ">
          <div className="absolute bottom-8 mx-auto w-full">
            <h5 className="font-semibold text-xl text-center"> Desarollo web </h5>
            <h6 className="text-center "> ¡Mira los sitios que realizamos para nuestros clientes!</h6>
          </div>         
        </div>
         <img src={web} />        
        </article>
        <article className="relative shadow-2xl flex flex-col items-center justify-center w-[90%] mx-auto rounded-md border-2 border-gray-200">
        <div className="absolute hover:bg-gray-800/80 w-full h-full duration-300 transition-colors text-transparent hover:text-white ">
          <div className="absolute bottom-8 mx-auto w-full">
            <h5 className="font-semibold text-xl text-center"> Desarollo web </h5>
            <h6 className="text-center "> ¡Mira los sitios que realizamos para nuestros clientes!</h6>
          </div>         
        </div>
         <img src={web} />        
        </article>
        <article className="relative shadow-2xl flex flex-col items-center justify-center w-[90%] mx-auto rounded-md border-2 border-gray-200">
        <div className="absolute hover:bg-gray-800/80 w-full h-full duration-300 transition-colors text-transparent hover:text-white ">
          <div className="absolute bottom-8 mx-auto w-full">
            <h5 className="font-semibold text-xl text-center"> Desarollo web </h5>
            <h6 className="text-center "> ¡Mira los sitios que realizamos para nuestros clientes!</h6>
          </div>         
        </div>
         <img src={web} />        
        </article>
        <article className="relative shadow-2xl flex flex-col items-center justify-center w-[90%] mx-auto rounded-md border-2 border-gray-200">
        <div className="absolute hover:bg-gray-800/80 w-full h-full duration-300 transition-colors text-transparent hover:text-white ">
          <div className="absolute bottom-8 mx-auto w-full">
            <h5 className="font-semibold text-xl text-center"> Desarollo web </h5>
            <h6 className="text-center "> ¡Mira los sitios que realizamos para nuestros clientes!</h6>
          </div>         
        </div>
         <img src={web} />        
        </article>
        <article className="relative shadow-2xl flex flex-col items-center justify-center w-[90%] mx-auto rounded-md border-2 border-gray-200">
        <div className="absolute hover:bg-gray-800/80 w-full h-full duration-300 transition-colors text-transparent hover:text-white ">
          <div className="absolute bottom-8 mx-auto w-full">
            <h5 className="font-semibold text-xl text-center"> Desarollo web </h5>
            <h6 className="text-center "> ¡Mira los sitios que realizamos para nuestros clientes!</h6>
          </div>         
        </div>
         <img src={web} />        
        </article>

      </div>
    </section>

    <section>

      <div className="p-2">        
        <h3 className="text-center text-3xl font-bold mb-12 mt-8"> Fue posible gracias a nuestro increíble equipo </h3>
        <div className="w-[80%] mx-auto shadow-2xl border-2 border-gray-200 rounded-md">
          <img src={profile} className="mx-auto w-24"/>
          <p className="text-center text-lg text-gray-500 mb-4"> Cuando todo esta listo mi tarea es la optimizacion en los motores de busqueda, para tu crecimiento organico</p>
          <h4 className="text-center text-gray-800 font-bold"> Fernando Colinas</h4>
          <h5 className="text-center text-gray-700 py-2"> SEO</h5>
        </div>
      </div>

      <a className=" my-4 flex flex-row items-center gap-x-2 bg-blue-600 hover:bg-blue-400 duration-200 transition-colors text-white py-2 px-4  w-[210px] mx-auto rounded-md text-center cursor-pointer"> 
        <span> 
          <FaInstagram /> 
        </span>
        <h6>  Seguir en Instagram  </h6>
      </a>
        
    </section>

    <section className="bg-gray-800">
      <h6 className="text-white text-2xl text-center w-[90%] mx-auto py-6 font-bold"> Hace despegar tus ventas digitales </h6>
      <h6 className="text-center w-[50%] py-3 px-3 mx-auto bg-pink-600 hover:bg-white hover:text-black transition-colors duration-200 font-semibold rounded-md text-white mb-4"> Hablemos</h6>
      <hr />
    </section>

 

    <section className="bg-gray-800">
    <div className="mx-auto container grid grid-cols-1 lg:grid-cols-4  gap-4 ">

  

     <div>
      <h3 className="text-pink-600 font-semibold text-center mb-4 text-xl "> Empresa </h3>
        <ul className="text-gray-200 flex flex-col gap-y-3">
        <li className="text-center text-lg"> <a href="">Nosotros</a> </li>
        <li className="text-center text-lg"><a href="">Politicas de Privacidad</a> </li>
        <li className="text-center text-lg"> <a href="">Politicas de Cookies</a> </li>
        </ul>
      </div>

      <div>
      <h3 className="text-pink-600 font-semibold text-center mb-2 "> Presencia online </h3>
        <ul className="text-gray-200 flex flex-col gap-y-3">
        <li className="text-center"> <a href="">Desarrollo web</a> </li>
        <li className="text-center"><a href="">SEO</a> </li>
        <li className="text-center"> <a href="">E-Commerce</a> </li>
        </ul>
      </div>

      <div>
      <h3 className="text-pink-600 font-semibold text-center mb-2 "> Identidad </h3>
        <ul className="text-gray-200 flex flex-col gap-y-3">
        <li className="text-center"> <a href="">Publicidad</a> </li>
        <li className="text-center"><a href="">Redes sociales</a> </li>
        <li className="text-center"> <a href="">Diseño gráfico </a> </li>
        </ul>
      </div>

      <div>
      <h3 className="text-pink-600 font-semibold text-center mb-2 "> Contactanos </h3>
        <ul className="text-gray-200 flex flex-col gap-y-3">
        <li className="text-center"> <a href="">+54911 63213753</a> </li>
        <li className="text-center"><a href="">Enviar WhatsApp</a> </li>
        <li className="text-center"> <a href="">info@wearebigfive.com</a> </li>
        <li className="text-center"> <a href="">@wearebigfive</a> </li>
        </ul>
      </div>

    </div>

    </section>
    </main>

  )
}

export default App
