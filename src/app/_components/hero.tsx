//import {BoxingGloveIcon} from '@phosphor-icons/react'
import girlImg from '../../../public/girl.png'
import Image from 'next/image'

export function Hero() {
  return(
      <section className="bg-black text-white relative overflow-hidden">
        
        <div>
          <Image
             src={girlImg}
             alt="garota"
             fill
             sizes='100vw'
             priority
             className='object-cover opacity-60 lg:hidden'

          />
        </div>
      
        <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">

          <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative ">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg: 7xl font-bold leading-10"> FIND YOUR STRENGTH
              </h1>  
              <p className="lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat accusamus 
              dignissimos esse molestias beatae voluptates ipsam nemo numquam, maiores deserunt 
              commodi aperiam id velit doloremque sunt illo quas non quibusdam?
              </p>

                <a 
                  href="#"
                  className="bg-red-500 px-5 py-2 rounded-md font-semibold flex items-center
                  justify-center w-fit"
                  >
              
                    Start now 
                </a>

              <div className="mt-8">
                <p className="text-3xl mb-8">
                  <b className="bg-gray-400 text-gray-700 px-2 py-1 rounded-md">FIRST MONTH FREE!</b>
                </p>
              </div>
            </div>

            <div className="hidden md:block h-full relative">
              <Image
                src={girlImg}
                alt="garota"
                className='object-contain'
                fill
                sizes="(max-width: 768px) 0vw, 50vw"
                quality={100}
                priority
                 
              />
            </div>
            
          </article>
            
        </div>
      </section>
  )
}
