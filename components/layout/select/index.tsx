import { IconCaretDown, IconCheck } from "@tabler/icons-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getTextColor } from "@/components/utils/getColor";
interface SelectProps {
  exhibition: string;
  itens: string[];
  theme: string;
}

export default function SelectDefault({ exhibition, itens, theme }: SelectProps) {
  const [open, setOpen] = useState(true);

  return (
    <AnimatePresence>
      <motion.div className="flex flex-col gap-3">
        <motion.div
          initial={{ opacity: 0.6 }}
          whileTap={{ scale: 0.99 }}
          whileInView={{ opacity: 1 }}
          onClick={() => setOpen(!open)}
          className={`rounded-md bg-white  font-bold _text flex justify-between p-3 gap-3 cursor-pointer z-20 ${getTextColor(theme)} ${open ? "opacity-100" : "opacity-75"}`}
        >
          <h1>{exhibition}</h1>
          <motion.div animate={{ rotate: open ? 180 : 0 }} className="">
            <IconCaretDown />
          </motion.div>
        </motion.div>
          <motion.div
            // initial={{y: -100 , opacity: 0}}
            // animate={{y: 0, opacity:1}}
            // exit={{y: -100, opacity: 0}}
            // transition={{duration: 0.3}}
            className={`flex flex-col z-10 overflow-hidden transition-all duration-700 ease-out ${open ? "h-24" : "h-0"}`}
          >
    <AnimatePresence>
    {open && itens.map((item, index) => {
              return (
                <motion.div
                key={`li-item-${index}`}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    opacity: {delay:index * 0.25},
                    delay: index * 0.25,
                    type: "spring",
                    stiffness: 600,
                    damping: 100,
                  }}
                  className="flex gap-1 _text _small py-1 px-3 items-center"
                >
                  <IconCheck/>{item}
                </motion.div>
              );
            })}
            </AnimatePresence>
          </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
