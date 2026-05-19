import backgroundImg from "../assets/images/backgroundInvestigations.jpeg";
import corprateImg from "../assets/images/corparateInvestigations.jpeg";
import digitalForensicsImg from "../assets/images/digitalForensic.jpeg";
import fraudImg from "../assets/images/fraaud.jpeg";
import survaillanceImg from "../assets/images/survailance.jpeg";
import legalSupportImg from "../assets/images/legalSupport.jpeg";
import {
  faUserCheck,
  faShieldAlt,
  faSearchDollar,
  faEye,
  faLaptopCode,
  faGavel,
} from "@fortawesome/free-solid-svg-icons";

export const servicesData = [
  {
    imgSrc: backgroundImg,
    alt: "Background investigation",
    title: "Background Investigations",
    description:
      "Comprehensive background checks for employment, business partnerships, and personal relationships.",
    icon: faUserCheck,
  },
  {
    imgSrc: fraudImg,
    alt: "Fraud investigation",
    title: "Fraud Investigations",
    description:
      "Expert analysis and evidence gathering for financial fraud, insurance claims, and corporate investigations.",
    icon: faSearchDollar,
  },
  {
    imgSrc: survaillanceImg,
    alt: "Surveillance",
    title: "Surveillance",
    description:
      "Discreet surveillance operations with advanced technology and experienced investigators.",
    icon: faEye,
  },
  {
    imgSrc: corprateImg,
    alt: "Corporate investigation",
    title: "Corporate Investigations",
    description:
      "Internal investigations, due diligence, and corporate security assessments for businesses.",
    icon: faShieldAlt,
  },
  {
    imgSrc: digitalForensicsImg,
    alt: "Digital forensics",
    title: "Digital Forensics",
    description:
      "Advanced digital evidence recovery and analysis for legal and investigative purposes.",
    icon: faLaptopCode,
  },
  {
    imgSrc: legalSupportImg,
    alt: "Legal support",
    title: "Legal Support",
    description:
      "Expert witness testimony, evidence preparation, and litigation support services.",
    icon: faGavel,
  },
];
