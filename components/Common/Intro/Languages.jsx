import { Progress } from "antd"
import { useEffect, useState } from "react"

const Languages = () => {
    const [bengali, setBengali] = useState(0)
    const [english, setEnglish] = useState(0)
    const [hindi, setHindi] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            if (bengali < 98) {
                setBengali(prevCount => prevCount + 1);
            }
            if (english < 95) {
                setEnglish(prevCount => prevCount + 1);
            }
             if (hindi < 90) {
                setHindi(prevCount => prevCount + 1);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [bengali, english])
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-Snow text-xs font-bold'>Linguistic Proficiency</span>
                <div className="flex flex-row items-center justify-center space-x-4">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#AD49E1" type="circle" percent={bengali} size={60} />
                        <span className='text-xs font-bold text-Snow'>Bengali</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#AD49E1" type="circle" percent={english} size={60} />
                        <span className='text-xs font-bold text-Snow'>English</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#AD49E1" type="circle" percent={hindi} size={60} />
                        <span className='text-xs font-bold text-Snow'>Hindi</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Languages