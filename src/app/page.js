"use client"
import style from './page.module.css'
import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import logo from "../../public/images/phibricateLogo.png"
import skill1 from "../../public/images/skill1.png"
import client1 from "../../public/images/client1.png"
import client2 from "../../public/images/client2.png"
import client3 from "../../public/images/client3.png"
import client4 from "../../public/images/client4.png"
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* sec1 */}
      <main className={style.home}>
        <div className={style.herosec}>
          <div className={style.herocont}>

            <h1>
              Creating Dreams with Phibricate
            </h1>
            <p>
              Where Imagination Meets Innovation
            </p>
          </div>
          <div className={style.heroimgdiv}>
            <Image
              src={logo}
              className={style.heroimg}
            />
          </div>
        </div>
        <div className={style.backdiv}></div>
      </main>

      {/* sec2 */}

      <div className={style.phibsec2}>
        <div className={style.clientlogosdiv}>
          <div className={style.clientlogos}>
            <Image
              src={client1}
              className={style.clientimg}
            />
          </div>
          <div className={style.clientlogos}>
            <Image
              src={client2}
              className={style.clientimg}
            />
          </div>
          <div className={style.clientlogos}>
            <Image
              src={client3}
              className={style.clientimg}
            />
          </div>
          <div className={style.clientlogos}>
            <Image
              src={client4}
              className={style.clientimg}
            />
          </div>
        </div>

        <div className={style.headOurClients}>
          <motion.h2

           initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              ease: "ease-in-out",
              duration: 1.5,
              x: { duration: 1 }
            }}

          >Our Clients</motion.h2>
        </div>


      </div>


      {/* sec3 */}

      <div className={style.phibsec3}>
        <div className={style.sec3insidediv}>

          <motion.h2

            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              ease: "ease-in-out",
              duration: 1.5,
              x: { duration: 1 }
            }}

          > <span style={{ color: '#3C9987' }}>Who</span> We Are ?</motion.h2>
          <p>Phibricate Design Agency is a creative powerhouse dedicated to bringing your visions to life. We specialize in crafting captivating and innovative design solutions that resonate with your audience. Our team of talented designers, artists, and strategists are passionate about turning ideas into stunning visual realities. Whether you're a startup looking to establish your brand identity or an established business aiming to refresh your image. Phibricate is here to transform your dreams into design masterpieces.</p>
        </div>
      </div>


      {/* sec4 */}

      <div className={style.phibsec4}>
      
        <motion.h2 
        
        initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              ease: "ease-in-out",
              duration: 1.5,
              x: { duration: 1 }
            }}
        
        className={style.sec4heading}>Our Services</motion.h2>

        {/* first service */}

        <div className={style.services}>
          <div className={style.skill}>
            <p className={style.skillno}>01  :</p>
            <h2 className={style.skillname}>GFX</h2>
            <p className={style.skillsubname}>Graphic Design</p>

          </div>
          <div className={style.skillImgnExplain}>
            <motion.div
            
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              ease: "ease-in-out",
              duration: 1.5,
              x: { duration: 1 }
            }}
            
             className={style.skillimg}>
              <Image
                src={skill1} />
            </motion.div>
            <div className={style.skillbrief}>
              <motion.p
              
              initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              ease: "ease-in-out",
              duration: 1.5,
              delay:0.2,
              x: { duration: 1 }
              
            }}
            
              
              >

                Phibricate Design Agency is a creative powerhouse dedicated to bringing your visions to life. We specialize in crafting captivating and innovative design solutions that resonate with your audience. Our team of talented designers, artists, and strategists are passionate about turning ideas into stunning visual realities. Whether you're a startup looking to establish your brand identity or an established business aiming to refresh your image. Phibricate is here to transform your dreams into design masterpieces.
              </motion.p>
            </div>
          </div>


        </div>

        {/* second service */}

        <div className={style.services}>
          <div className={style.skill2}>
            <p className={style.skillno}>02  :</p>
            <h2 className={style.skillname}>GFX</h2>
            <p className={style.skillsubname}>Graphic Design</p>

          </div>
          <div className={style.skillImgnExplain}>

            <div className={style.skillbrief}>
              <p>
                Phibricate Design Agency is a creative powerhouse dedicated to bringing your visions to life. We specialize in crafting captivating and innovative design solutions that resonate with your audience. Our team of talented designers, artists, and strategists are passionate about turning ideas into stunning visual realities. Whether you're a startup looking to establish your brand identity or an established business aiming to refresh your image. Phibricate is here to transform your dreams into design masterpieces.
              </p>
            </div>
            <div className={style.skillimg}>
              <Image
                src={skill1} />
            </div>
          </div>


        </div>
        {/* third service */}

        <div className={style.services}>
          <div className={style.skill}>
            <p className={style.skillno}>03  :</p>
            <h2 className={style.skillname}>GFX</h2>
            <p className={style.skillsubname}>Graphic Design</p>

          </div>
          <div className={style.skillImgnExplain}>
            <div className={style.skillimg}>
              <Image
                src={skill1} />
            </div>
            <div className={style.skillbrief}>
              <p>
                Phibricate Design Agency is a creative powerhouse dedicated to bringing your visions to life. We specialize in crafting captivating and innovative design solutions that resonate with your audience. Our team of talented designers, artists, and strategists are passionate about turning ideas into stunning visual realities. Whether you're a startup looking to establish your brand identity or an established business aiming to refresh your image. Phibricate is here to transform your dreams into design masterpieces.
              </p>
            </div>
          </div>


        </div>

        {/* fourth service */}

        <div className={style.services}>
          <div className={style.skill2}>
            <p className={style.skillno}>04  :</p>
            <h2 className={style.skillname}>GFX</h2>
            <p className={style.skillsubname}>Graphic Design</p>

          </div>
          <div className={style.skillImgnExplain}>

            <div className={style.skillbrief}>
              <p>
                Phibricate Design Agency is a creative powerhouse dedicated to bringing your visions to life. We specialize in crafting captivating and innovative design solutions that resonate with your audience. Our team of talented designers, artists, and strategists are passionate about turning ideas into stunning visual realities. Whether you're a startup looking to establish your brand identity or an established business aiming to refresh your image. Phibricate is here to transform your dreams into design masterpieces.
              </p>
            </div>
            <div className={style.skillimg}>
              <Image
                src={skill1} />
            </div>
          </div>


        </div>


      </div>

      {/* sec4 */}

      <div className={style.phibsec5}>
        <div className={style.sec5heading}>
          <h2 className={style.sec4heading}>Our Services</h2>

        </div>
      </div>
    </>
  )
}
