'use client'
import { Button } from "@/components/ui/button";

export default function Home () {
    const handleHover= (e: React.MouseEvent<HTMLButtonElement>) => {
            const windowHeight = window.innerHeight;
            const windowWidth = window.innerWidth;

            const randomx = Math.floor(Math.random()* windowWidth);
            const randomy= Math.floor(Math.random()* windowHeight);

            if (e.currentTarget instanceof HTMLButtonElement) {
            e.currentTarget.style.position = 'absolute';
            e.currentTarget.style.left = `${randomx}px`;
            e.currentTarget.style.top = `${randomy}px`;
            }


    }
    const name ='Pratik'
    const handleClick = () =>{
        window.open(`https://www.google.com/calendar/render?action=TEMPLATE&text=Date with ${name}&dates=20240214T100900Z%2F20240115T101000Z`)
    }
    return (
        <div className="w-screen h-screen bg-pink-500 flex items-center justify-center">
            <div className="flex flex-col items-center space-y-2">
                <img src="https://i.giphy.com/cLS1cfxvGOPVpf9g3y.webp"/>
                <p className="font-bold text-xl text-white">Will you go to the prom with me?</p>
                    <Button onClick={handleClick}> Yes!</Button>
                    <Button onMouseEnter={handleHover}>No</Button>
                
            </div>
        </div>
        
    )
}