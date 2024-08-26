import { socialIconList } from "@/locals";
import { motion } from "framer-motion";
import Link from "next/link";

const SocialIconList = () => {
  return (
    <div className="flex items-center flex-col gap-6">
      <div className="hidden md:flex flex-col gap-6">
        {socialIconList.map((curIcon, i) => (
          <Link href={curIcon.link} key={i}>
            <motion.a
              viewport={{ once: true }}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              exit={{ y: 40, opacity: 0 }}
              // href={curIcon.link}
              target="_blank"
            >
              <div className="text-milk/60 text-xl common-transition hover:-translate-y-[1px] hover:text-milk/90">
                {curIcon.icon}
              </div>
            </motion.a>
          </Link>
        ))}
      </div>
      <motion.div
        viewport={{ once: true }}
        initial={{ height: 0, opacity: 0 }}
        whileInView={{ height: "7rem", opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        exit={{ height: 0, opacity: 0 }}
        className="hidden md:block h-28 w-0.5 bg-milk/60"
      ></motion.div>
    </div>
  );
};
export default SocialIconList;
