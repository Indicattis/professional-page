"use client"

import { motion } from "framer-motion"
import { SetStateAction } from "react"

interface CaptationControllersProps {
    stage: number
    numOfStages: number
    setStage: React.Dispatch<SetStateAction<number>>
}

export default function CaptationControllers({stage, numOfStages, setStage}: CaptationControllersProps) {
    return (
        <div className="flex gap-2">
            {Array.from({ length: numOfStages }, (_, index) => (
                <motion.div
                onClick={() => setStage(index)}
                key={`captation-controller-`+index}
                    className={`cursor-pointer z-40 text-xl `}
                    animate={{width: stage == index ? 56 : 32}}
                >
                        <div className={` h-2 cursor-pointer rounded-full  ${stage == index ? 'bg-neon_purple' : 'bg-purple'}`}></div>
                </motion.div>
            ))}
        </div>
    )
}
