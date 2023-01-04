import dynamic from "next/dynamic";

const Footer = dynamic(() => import('./footer'), {
    ssr: false
})

export default Footer;