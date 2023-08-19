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
        const element = document.querySelector('#value');
        if (element && typeof window !== "undefined") {
            element.innerHTML = line;
        }
    }, [line]);

    const gpt = [
        {
    id: 1,
    title:"Empowering Your Business: Unleashing the Potential of Enterprise Chatbots",
    name: "Enterprise Chatbot",
    image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    description: "Greetings, Forward-Thinking Business Pioneers!  Have you ever envisioned an unwavering assistant, tirelessly at your beck and call 24/7, enhancing customer satisfaction and operational efficiency? Well, that's precisely what an enterprise chatbot offers, and we're here to help you harness its transformative power for your business.",
    details : "Why Choose Us?",
    values: " Seamless-Customer-Assistance: Astonish your customers with immediate responses, anytime they seek it. Our chatbots adeptly manage routine inquiries, freeing up your team to focus on intricate tasks. Tailored-Personalization: Customized interactions forge deeper customer bonds, while insights derived from data refinement bolster your strategic approaches. Budget-Friendly: Streamline tasks, reduce expenses, and effortlessly expand your operations as your business flourishes. Our Methodology We collaborate intimately with you, crafting bespoke chatbot solutions that seamlessly align with your brand's ethos. From conceptualization to execution, we accompany you every step of the way. Elevate Your Business Today Are you primed to revolutionise your business? Embrace the future by embracing the cutting-edge technology of chatbots. Let's embark on this transformative journey together!",
    price1: "1000",
    price2: "2000",
    price3: "3000",
  },
  {
    id: 2,
    title:"Explore the Dynamic Potential of Personalized Customer Support Bots",
    name: "Personalised customer support bot",
    image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    description: "Welcome to a revolutionary solution designed to transform your business: personalised customer support chatbots. Imagine this: instantaneous aid for your clientele, anytime, anywhere. These automated assistants embody your tireless support squad, primed to engage, assist, and resolve inquiries around the clock.",
    details : "Discover how they will elevate your enterprise:",
    values:" Uninterrupted-Availability: Wave goodbye to restricted business hours. These chatbots remain perpetually active, catering to your customers' requirements whenever they arise. Instant-Satisfaction: In the fast-paced realm we inhabit today, speed is of the essence. Our chatbots deliver immediate responses, guaranteeing your patrons never encounter neglect or exasperation. Tailored-Conversations: Farewell to generic retorts. These chatbots customise interactions grounded in individual inclinations, fostering genuine, lifelike connections. Effortless Expansion: As your enterprise flourishes, so does the influx of customers. Our chatbots seamlessly juggle numerous dialogues, ensuring your customer support effortlessly expands in tandem. Intelligent Insights: Beyond mere replies, these chatbots accumulate invaluable customer insights, enabling you to make knowledgeable decisions and gain a profound comprehension of your audience. Revamp your customer support framework while optimising costs. Say greetings to uniformity, efficacy, and contented customers.",
    price1: "1000",
    price2: "2000",
    price3: "3000",
  },
  {
    id: 3,
    name: "Staff onboarding bot",
    title:"Revolutionize Your Onboarding Experience through Our HR Bot Services",
    image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    description: "Greetings, Are you seeking to revolutionize your onboarding process? Look no further than our staff onboarding bots – the ultimate game-changer for businesses like yours. Imagine a flawless onboarding journey where paperwork becomes a breeze, queries receive instant responses, and engagement skyrockets. With our cutting-edge bots, this isn't a mere fantasy – it's a tangible reality.",
    details : "Why Opt for Us?",
    values:" Enhanced-Efficiency: Bid farewell to administrative overload. Entrust the nitty-gritty tasks to our bots and liberate your team's precious time. Unwavering-Consistency: Each new hire experiences a consistent, top-tier onboarding encounter. No crucial details slip through the cracks. Interactive-Engagement: Our bots do more than just automate; they actively interact. Say hi to an engaging onboarding companion for every fresh employee. Ready to seamlessly scale your processes, gain immediate insights, and guarantee a remarkable experience each time? Join hands with us to elevate your onboarding procedures. Reach out today to pave the way for a revolutionary shift in your onboarding strategies. Your future recruits will undoubtedly extend their gratitude.",
    price1: "1000",
    price2: "2000",
    price3: "3000",
  },
  {
    id: 4,
    name: "Sales bot",
    title:"Supercharge Business Success with Sales Bots",
    image: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    description: "Hello there! Envision an unstoppable sales force that remains tirelessly engaged, captivating customers, offering personalized suggestions, and propelling conversions. This is the remarkable impact of sales bots, and we're thrilled to reveal how they can revolutionize your business.",
    details : "Benefits That Await You?",
    values:" Round-the-Clock-Engagement: Our bots never sleep, ensuring instant customer interaction day and night. Efficiency-Surge: Liberate your team's time as bots adeptly handle routine inquiries, streamlining your operations. Tailored-Personalization: Allow bots to analyze customer data, resulting in customized product recommendations that drive sales. Actionable-Insights: Acquire invaluable customer insights through bot interactions, refining your strategies for optimum results. Seamless-Conversions: Effortlessly guide customers toward purchase, maximizing your sales potential. Ready to redefine your approach to sales? Let's initiate a conversation! Our sales bot services serve as your gateway to elevated customer experiences and exponential growth. Reach out today to embrace the future!",
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
            <div className={'flex items-center justify-center p-4 ml-4'}>
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
                    <p className='text-2xl font-bold'>{gpts.details}</p>
                    <p className='text-lg pt-5' id='value'>{gpts.values}</p>
                    </div>
                </div>
            </div>
            {/*<div>
                <h1 className={'pl-6 text-4xl md:text-5xl mt-10 mb-[50px] text-orange-600 font-semibold flex items-center justify-center'}>Blogs related to {gpts.name}</h1>
                <div className={'mb-[50px]'}>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 ml-4 mt-6 pr-4 gap-4 scroll-hide'>
                <div className='shadow-lg pl-4 shadow-gray-300 bg-[#E9F1FA] hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className={'mt-4'}>
                    <h1 className='text-2xl font-semibold flex justify-center'>Blog 1</h1>
                    <div className='flex flex-col justify-center m-5 gap-4'>

                    </div>
                    </div>
                </div>
          <div className='shadow-lg pl-4 shadow-gray-300 bg-[#E9F1FA] hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className={'mt-4'}>
                    <h1 className="text-2xl font-semibold flex justify-center">Blog 2</h1>
                    <div className={'flex flex-col justify-center m-5 gap-4'}>

                    </div>
                </div>
                </div>
                <div className='shadow-lg pl-4 shadow-gray-300 bg-[#E9F1FA] hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
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
                <div className='shadow-lg pl-4 shadow-gray-300 bg-[#E9F1FA] mt-8 h-[250px] duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className={'mt-4'}>
                    <h1 className='text-2xl font-semibold flex justify-center'>Price : {gpts.price1}</h1>
                    <div className='flex flex-col justify-center m-5 gap-4'>

                    </div>
                    </div>
                </div>
          <div className='shadow-lg pl-4 shadow-gray-300 bg-[#E9F1FA] h-[300px] duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className={'mt-4'}>
                    <h1 className="text-2xl font-semibold flex justify-center">Price : {gpts.price3}</h1>
                    <div className={'flex flex-col justify-center m-5 gap-4'}>

                    </div>
                </div>
                </div>
                <div className='shadow-lg pl-4 shadow-gray-300 bg-[#E9F1FA] mt-8 h-[250px] duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
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
