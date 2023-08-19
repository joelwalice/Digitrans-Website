import React, {useEffect} from 'react'
import { useRouter } from 'next/router'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from 'next/image'
import Link from "next/link";
import Logos from "../../components/imageTag.png";

const Id = () => {
    const router = useRouter()
    const id = router.query.id;
    let line = '';
    useEffect(() => {
        if(typeof window !== "undefined"){
          const element = document.querySelector('#value');
          element.innerHTML = line
        }
      }, [line]);
    const gpt = [
        {
    id: 1,
    name: "Data Analysis",
    title:"Ignite Business Triumph: Unveiling the Power of Data Analytics",
    image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    description: "Greetings, Have you ever pondered over the secret behind the perpetual success of thriving businesses? The answer lies within the realm of data analytics - and we're excited to illustrate how our adept team can harness its potential to create wonders for your venture.",
    details : "Benefits That Await You?",
    values:" Unveiling the Essence of Data Analytics Imagine holding a treasure map that illuminates the path of your business decisions. That's precisely what data analytics embodies - the process of transforming raw data into invaluable insights. This is where our expertise takes center stage. Charting Your Course to Triumph Here\'s how we\'re poised to elevate your Business to New heights. Informed-Decision-Making: Bid adieu to conjecture. Our mastery in data analytics empowers you to make informed choices rooted in profound insights. Customer-Insight: Acquire an unprecedented understanding of your customers. Uncover their desires and deliver precisely what they seek. Revolutionized-Efficiency: We\'ll identify inefficiencies and streamline operations, saving you both time and money. Predicting-Tomorrow: Our predictive analytics will ensure you\'re prepared for impending trends and challenges on the horizon. Stay-Ahead-of-the-Curve: Garner an advantage by recognizing trends ahead of competitors, etching your influence in the industry. Tailored-Marketing: Craft laser-focused campaigns that heighten engagement and drive conversions. Let\'s Commence this Journey! Whether you\'re at the inception stage or an established player, data analytics stands as your covert weapon for triumph. Let\'s engage in a dialogue about how our prowess can propel your business growth toward unparalleled success. Here\'s to a future brimming with astute decisions and unparalleled accomplishments.",
    price1: "1000",
    price2: "2000",
    price3: "3000",
  },
  {
    id: 2,
    name: "Data Visualization",
    title:"The Influence of Data Visualization on Business Dynamics",
    image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    description: "Greetings! Here at Digitrans, we specialize in the art of transforming intricate data into captivating visual narratives. In today's rapid-paced business milieu, comprehending your data isn't a mere option; it's an imperative. This is precisely where our expertise steps in to create a truly transformative impact.",
    details : "Reason to Opt Us?",
    values:"In-Depth Insights, Swiftly: Our visualizations go beyond surface allure. They serve as gateways to critical insights that expedite shrewd decision-making. Customization-at-its-Finest: We don't believe in a one-size-fits-all approach. Just as your business is unique, our visualizations mirror that uniqueness, seamlessly aligning with your industry and objectives. Compelling-Communication: Data possesses persuasion, provided it's presented artfully. Our visuals ensure your message strikes a chord unfailingly, be it within the boardroom or while engaging with clients. Unveil-Concealed-Opportunities: Our visualizations spotlight growth prospects and trends that might have otherwise slipped under the radar. They bring to light the concealed treasures within your data. Let's Redefine Your Data Strategy Eager to surge ahead of the competition? Let's initiate a conversation about how data visualization can revolutionize your business landscape. Our team is fervently dedicated to propelling your success through insightful, enthralling visuals. Reach out to us, and together, let's unlock the genuine potential of your data. To envisioning triumph.",
    price1: "1000",
    price2: "2000",
    price3: "3000",
  },
  {
    id: 3,
    name: "Consulting",
    title:"Ignite Success: Your Path to Triumph with Our Exceptional Consulting Services",
    image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    description: "Greetings! I am genuinely excited to introduce you to our potent consulting services, meticulously designed to propel your business toward unprecedented heights. At Digitrans, we're not just consultants – we're dedicated partners, fully invested in your triumph. Imagine the assurance of having a trusted advisor by your side, equipped with fresh insights and strategic finesse to conquer your business challenges. That's exactly what we offer. ",
    details : "Benefits That Await You?",
    values:" Strategic-Navigation: Allow us to chart a lucid trajectory for your aspirations, meticulously crafting a bespoke roadmap to shepherd your voyage. Innovative-Solutions: Stymied by an obstacle? Our prowess lies in providing ingenious solutions that dismantle barriers and ignite growth. Novel-Perspective: Harness the power of an external viewpoint that catalyzes innovation, ensuring you stay at the forefront of a dynamic market. Empowerment-Through-Skill: Through targeted training, we empower your team with enhanced abilities that guarantee enduring success. Measured-Results: Our strategies are calibrated for quantifiable outcomes, guaranteeing your Return on Investment remains a paramount priority. Are you poised for unprecedented achievement? Let's establish a connection. Your victory is our driving force.",
    price1: "1000",
    price2: "2000",
    price3: "3000",
  },
  {
    id: 4,
    name: "Data Forecasting",
    title:"Data Forecasting: The Key to Unlocking Business Success",
    image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    description: "Welcome to the realm of forward-looking decision-making! We're here to unveil the captivating universe of data forecasting and illustrate how our team can catapult your triumph to unprecedented heights. Data forecasting is akin to peering into the forthcoming trends using insights gleaned from past data. Imagine having the foresight to discern your customers' desires before they even recognize them. This is the potent capability we bestow upon you.",
    details : "Reason to Choose us?",
    values:" Through our data forecasting services, you can Decide-with-Conviction: Base your choices on robust predictions, not conjectures. Our forecasts become your hidden advantage in outwitting ambiguity. Optimize-Resources: Gain the ability to finely tune your resources by accurately predicting what lies ahead. Bid farewell to excess or shortage – only seamless equilibrium prevails. Adapt-Agilely: The business landscape resembles a rollercoaster, yet you won't merely survive – you'll thrive. Stay ahead of shifts with insights that empower proactive responses. Catapult-Profits: Anticipate demand, serve your customers more efficiently, and witness your profits ascend to new heights. Delight-Patrons: Contented customers are also loyal customers. Meet their needs with precision and keep those smiles intact. By joining hands with us, you're not just procuring a service; you're welcoming an impassioned team wholeheartedly dedicated to seeing your business achieve unparalleled zeniths. Let's embark on this transformative journey together. Reach out today, and allow data forecasting to propel you into a future brimming with triumph!",
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
                <p>Value not found</p>
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
                <h1 className={'text-4xl md:text-4xl mt-10 mb-[50px] text-orange-600 font-semibold flex items-center justify-center'}>{gpts.title}</h1>
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
                    <p className='text-2xl font-bold'>{gpts.details}
                    </p>
                    <pre></pre>
                    <p className='text-lg pt-5' id='value'>{gpts.values}</p>
                    </div>
                </div>
            </div>
            {/*<div>
                <h1 className={'pl-6 text-4xl md:text-5xl mt-10 mb-[50px] text-orange-600 font-semibold flex items-center justify-center mr-4'}>Blogs related to {gpts.name}</h1>
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
                <div className='shadow-lg pl-4 shadow-[#040c16] bg-[#E9F1FA] mt-8 h-[250px] duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className={'mt-4'}>
                    <h1 className='text-2xl font-semibold flex justify-center'>Price : {gpts.price1}</h1>
                    <div className='flex flex-col justify-center m-5 gap-4'>

                    </div>
                    </div>
                </div>
          <div className='shadow-lg pl-4 shadow-[#040c16] bg-[#E9F1FA] h-[300px] duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className={'mt-4'}>
                    <h1 className="text-2xl font-semibold flex justify-center">Price : {gpts.price3}</h1>
                    <div className={'flex flex-col justify-center m-5 gap-4'}>

                    </div>
                </div>
                </div>
                <div className='shadow-lg pl-4 shadow-[#040c16] bg-[#E9F1FA] mt-8 h-[250px] duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
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
