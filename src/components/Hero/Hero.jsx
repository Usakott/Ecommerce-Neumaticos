import React from 'react'
import Neuma from "../../assets/Neuma.png"
import Logo from "../../assets/Logo.png"
// eslint-disable-next-line no-unused-vars
import{motion} from "framer-motion"
import { slipeUp, slipeInFromSide } from '../../utility/animation'

const Hero = () => {
  return (
    <section className='mt-36'>

      <div className='p-10 grid grid-cols-1 md:grid-cols-2 -mt-10'>

        {/* textos descriptivos */}
        <div className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'>
          <motion.img className='max-w-xs -mt-5' 
          src={Logo} alt='Logo del Hero'
          variants={slipeUp(0.2)}
          initial="initial"
          animate="animate"
          />
          <motion.p 
          className='py-12 text-gray-900'
          variants={slipeUp(0.3)}
          initial="initial"
          animate="animate"
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit, ullamcorper laoreet a montes nisl at diam, in gravida consequat augue posuere rhoncus. Vel aliquet odio penatibus magnis suscipit dignissim lacus cras, curae dictumst per tincidunt primis lobortis vehicula et, purus metus pretium sociis facilisi augue fames. Habitant porttitor vitae dapibus metus habitasse sem, platea quis ligula magna sapien ornare sodales, rutrum primis velit ullamcorper egestas.                        
          </motion.p>
          <motion.div 
          className='flex justify-center gap-4'
          variants={slipeUp(1)}
          initial="initial"
          animate="animate"
          >
            <a className='bg-slate-500 py-2 px-12 rounded-3xl text-slate-50 hover:bg-slate-300 transition-all duration-300 items-center cursor-pointer'>
              Ver Catálogo 
              <i className="bi bi-card-text text-xl ml-2"></i>
            </a>
            <a className='text-gray-900 flex items-center cursor-pointer'>
              Ver Ofertas 
              <i className="bi bi-cash-coin text-xl ml-2"></i>
            </a>                                    
          </motion.div>          
        </div>

        {/* imagen */}
        <motion.div 
        className='-mt-14 sm:p-10 md:p-15 lg:p-30 xl:p-36'
        variants={slipeInFromSide("right", 0.5)}
        initial="initial"
        animate="animate"
        >
          <img src={Neuma} alt='Imagen de referencia'/>                    
        </motion.div>
                
      </div>                  
    </section>
  )
}

export default Hero