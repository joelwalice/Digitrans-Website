import React, {useEffect} from 'react'
import { useRouter } from 'next/router'
import Navbar from "@/components/navbar";
import Link from "next/link";
import Footer from "@/components/footer";
import Image from 'next/image'
import Logos from "../../components/imageTag.png";

const Id = () => {
    const router = useRouter()
    const id = router.query.id;
    let line = ''
    useEffect(() => {
        const element = document.querySelector('#value');
        if (element && typeof window !== "undefined") {
            element.innerHTML = line;
        }
    }, [line]);
    const gpt = [
        {
    id: 1,
    name: "Web Development",
    title:"Harness Web Development for Business Advancement",
    image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    description: "Welcome to a realm brimming with boundless business potential! It brings me immense joy to introduce you to our exceptional web development services, meticulously crafted to reshape your brand's online presence. In today's swiftly evolving digital sphere, a robust website serves as your gateway to prominence. At Digitrans, we specialize in the art of crafting websites that not only capture attention but also engage and convert visitors into devoted patrons.",
    details : "Reason to Choose us?",
    values:" Tailored-Excellence: We recognize the distinctive essence of your business. Our team meticulously tailors every facet of your website to harmonize with your brand's essence, ensuring an indelible impression. Seamless-Responsiveness: With the surge in mobile users, responsive design is an absolute requisite. Our websites seamlessly adapt to any screen dimension, ensuring a fluid experience for every visitor. Effortless-Navigation: Navigating your website should be effortless. We prioritize intuitive layouts, making it a breeze for your customers to locate what they seek without any impediment. E-Commerce-Brilliance: Eager to establish an online store? We've got you covered. Our e-commerce solutions are meticulously curated to streamline the purchasing process and amplify your online sales. Velocity-and-Security: Bid adieu to sluggish loading times and security qualms. We optimize for speed and incorporate top-tier security measures, safeguarding both you and your customers. Sustained-Support: Our partnership is not confined to the launch day alone. Rest assured, we're here to provide ongoing support, updates, and maintenance to ensure your website remains at its zenith. Eager to catapult your business? Let's initiate a conversation about how our web development proficiency can propel your brand into a realm of digital triumph. Reach out today. Here's to your prosperous voyage into the digital realm.",
    price1: "1000",
    price2: "2000",
    price3: "3000",
  },
  {
    id: 2,
    name: "Graphic Designing",
    image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    description: "Welcome to a realm where graphics hold the key to unlocking business success! We're thrilled to introduce you to our elite graphic design team, primed to catapult your business to new heights. Curious about the transformation we can bring? Allow me to provide an illuminating overview: Unforgettable First Impressions: Our designs possess the innate power to seize attention and imprint a lasting memory, ensuring your business claims its distinct spotlight amidst the multitude.",
    details : "Reason to Choose us?",
    values:" Brand-Identity-Alchemy: Our designs are more than visuals; they mirror your brand's character, values, and mission, aiding you in cultivating a robust, unwavering brand identity. Engagement-Amplified: Beyond their visual allure, our graphics are captivating narratives that beckon your audience to delve deeper, igniting their exploration of your content. Conversion-Surge: Be it a website, social media post, or marketing material, our designs are expertly crafted to incite action, igniting a surge in conversion rates. Efficiency-Unleashed: Focus on your core pursuits as we wield our creative expertise. Transforming ideas into captivating designs is our forte. Tailored-Audience-Resonance: The era of one-size-fits-all is past. Our designs are bespoke creations, resonating harmoniously with your distinct target audience, fostering a profound connection. Embodiment-of-Professionalism: A meticulously designed visual epitomizes your business's credibility and competence, setting the stage for fruitful client relationships. Prepared to embark on a journey of visual transformation that elevates your business? Let's engage in conversation and explore how our graphic design services can be tailored to impeccably suit your singular requisites. Anticipating the privilege of manifesting your vision into visuals that herald tangible outcomes!",
    price1: "1000",
    price2: "2000",
    price3: "3000",
  },
  {
    id: 3,
    name: "Social Media Marketing",
    image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    description: "As ardent proponents of marketing excellence, we recognize the undeniable might of social media marketing. It transcends being a mere series of posts; rather, it's a strategic arsenal meticulously designed to amplify brand resonance. Anchoring Progress: Web Development's Crucial Role At its core, the bedrock of social media marketing lies in robust web development. This underpinning guarantees a user-friendly interface and an adaptive design.",
    details : "Reason to Choose us?",
    values:"  Global Reach, Unbounded: Across diverse platforms, we've witnessed businesses achieving international prominence. Pinpoint-Precision: Utilizing demographic insights, we excel in guiding you toward tailored audience segments. Cultivating-Genuine-Connections: Real-time interactions foster a sense of trust and authenticity. Surge-in-Website-Traffic: Our adeptness in crafting compelling content leads to remarkable surges in website traffic. Mastery-of-Data: Leveraging analytics, our strategies empower you to refine your marketing endeavors. Efficiency-Maximized: Cost-effectiveness prevails over traditional advertising methods. In summation, we've borne witness to the harmonious synergy of web development and social media marketing propelling businesses to unparalleled heights. Envision a partnership where this synergy cultivates growth, nurtures connections, and fuels digital triumph.",
    price1: "1000",
    price2: "2000",
    price3: "3000",
  },
  {
    id: 4,
    name: "Content Generation",
    image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    description: "Throughout our expedition in the realm of web development, we've unearthed the profound impact of content generation. It serves as your covert arsenal, with the potential to revolutionize your business ",
    details : "Can be done by?",
    values:" Elevating-Engagement: Crafting dynamic content that captivates visitors, inspiring them to delve deeper. Ascending-SEO-Supremacy: High-quality content propels you upwards in search rankings, luring in organic traffic. Cementing-Unique-Identity: Distinctive content fortifies your brand, cultivating trust and familiarity. Guiding-Lead-Conversion: Each content piece becomes a navigational beacon, directing potential leads along their journey. Catalyzing-Social-Media-Amplification: Shareable content amplifies your online footprint through sharing, extending your digital presence. Displaying-Authoritative-Persona: Informative content showcases your industry acumen, positioning you as an expert. Harnessing-Intelligent-Insights: Content analytics moulds your strategies, steering them toward optimal outcomes. We invite you to embark on a collaborative expedition, harnessing the potential of content generation within web development. Let's captivate audiences and propel your business to uncharted heights in unison.",
    price1: "1000",
    price2: "2000",
    price3: "3000",
  },
    ]
const gpts = gpt.find(item => item.id === parseInt(id));

    if (!gpts) {
        return (
            <div>
                <Navbar />
                <p>Educator not found</p>
            </div>
        );
    }

    
    for(let i=0;i<gpts.values.length;i++){
        line+=gpts.values[i];
        if(gpts.values[i]===":"){
            while(gpts.values[i]!==" " && i>-1){
                line = [...line]
                line.pop()
                i--
                console.log({i})
            }
            line = line.join('')
            line+='<br><b>'
            while(gpts.values[i]!==":"){
                line+=gpts.values[i]
                i++
                console.log({i})
            }
            line+=':</b>'
        }
    }
    

    return (
        <div>
            <title>{gpts.name}</title>
            <Navbar />
            <div className={'flex items-center justify-center'}>
                <h1 className={'text-5xl md:text-6xl mt-10 mb-[50px] text-orange-600 font-semibold flex items-center justify-center'}>{gpts.name}</h1>
            </div>
            <div>
            <div>
          <Image width={1000} src={Logos} className='hidden md:flex w-screen min-h-[480px]' />
          <Image width={1000} src={Logos} className='flex w-screen md:hidden' />
        </div>
                <div className={'p-6'}>
                    <h1 className={'text-4xl md:text-5xl mt-10 mb-[50px] text-orange-600 font-semibold flex items-center justify-center'}>Detailed Description</h1>
                    <p className={'text-lg p-5'}>{gpts.description}</p>
                    <div className='p-5'>
                    <p className='text-2xl font-bold'>{gpts.details}</p>
                    <p className='text-lg pt-5' id='value'>{gpts.values}</p>
                    </div>
                </div>
            </div>
            {/*<div>
                <h1 className={'pl-6 text-4xl md:text-5xl mt-10 mb-[50px] text-orange-600 font-semibold flex items-center justify-center'}>Blogs related to {gpts.name}</h1>
                <div className={'mb-[50px]'}>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 ml-4 mt-6 pr-4 gap-4 scroll-hide'>
                <div className='shadow-lg pl-4 shadow-[#040c16] bg-[#E9F1FA] hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className={'mt-4'}>
                    <h1 className='text-2xl font-semibold flex justify-center'>Blog 1</h1>
                    <div className='flex flex-col justify-center m-5 gap-4'>

                    </div>
                    </div>
                </div>
          <div className='shadow-lg pl-4 shadow-[#040c16] bg-[#E9F1FA] hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className={'mt-4'}>
                    <h1 className="text-2xl font-semibold flex justify-center">Blog 2</h1>
                    <div className={'flex flex-col justify-center m-5 gap-4'}>

                    </div>
                </div>
                </div>
                <div className='shadow-lg pl-4 shadow-[#040c16] bg-[#E9F1FA] hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className={'mt-4'}>
                            <h1 className='text-2xl font-semibold flex justify-center'>Blog 3</h1>
                            <div className='flex flex-col justify-center m-5 gap-4'>

                            </div>
                        </div>
                </div>
          </div>
          <div>
              <h1 className={'text-4xl md:text-5xl mt-10 mb-[50px] text-orange-600 font-semibold flex items-center justify-center'}>Pricing</h1>
              <div>
                <div className={'mb-[50px]'}>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 ml-4 mt-6 pr-4 gap-4 scroll-hide'>
                <div className='shadow-lg pl-4 shadow-[#040c16] bg-gray-400 mt-8 h-[250px] duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className={'mt-4'}>
                    <h1 className='text-2xl font-semibold flex justify-center'>Price : {gpts.price1}</h1>
                    <div className='flex flex-col justify-center m-5 gap-4'>

                    </div>
                    </div>
                </div>
          <div className='shadow-lg pl-4 shadow-[#040c16] bg-gray-400 h-[300px] duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className={'mt-4'}>
                    <h1 className="text-2xl font-semibold flex justify-center">Price : {gpts.price3}</h1>
                    <div className={'flex flex-col justify-center m-5 gap-4'}>

                    </div>
                </div>
                </div>
                <div className='shadow-lg pl-4 shadow-[#040c16] bg-gray-400 mt-8 h-[250px] duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <div className={'mt-4'}>
                            <h1 className='text-2xl font-semibold flex justify-center'>Price : {gpts.price2}</h1>
                            <div className='flex flex-col justify-center m-5 gap-4'>

                            </div>
                        </div>
                </div>
          </div>
          </div>
        </div>
        </div>
        </div>
    </div>*/}
            {/*<div className={'pb-10'}>
                <h1 className={'text-4xl md:text-5xl mt-10 mb-[50px] text-orange-600 font-semibold flex items-center justify-center'}>Reviews</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 ml-4 mt-6 pr-4 gap-4 scroll-hide'>
                <div className='shadow-lg pl-4 shadow-[#040c16] bg-gray-400 hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className={'mt-4'}>
                    <h1 className='text-2xl font-semibold flex justify-center'>Name 1</h1>
                    <div className='flex flex-col justify-center m-5 gap-4'>

                    </div>
                    </div>
                </div>
          <div className='shadow-lg pl-4 shadow-[#040c16] bg-gray-400 hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className={'mt-4'}>
                    <h1 className="text-2xl font-semibold flex justify-center">Name 2</h1>
                    <div className={'flex flex-col justify-center m-5 gap-4'}>

                    </div>
                </div>
                </div>
           <div className='shadow-lg pl-4 shadow-[#040c16] bg-gray-400 hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className={'mt-4'}>
                    <h1 className='text-2xl font-semibold flex justify-center'>Name 3</h1>
                    <div className='flex flex-col justify-center m-5 gap-4'>

                    </div>
                </div>
           </div>
      </div>
    </div>*/}
            <Footer />
        </div>
    );
};
export default Id
