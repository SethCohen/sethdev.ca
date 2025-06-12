import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useTypewriterOnce } from '@/hooks/useTypewriterOnce';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import {
    siPython,
    siGnubash,
    siJavascript,
    siTypescript,
    siHtml5,
    siCss,
    siDart,
    siLua,
    siKotlin,
    siCplusplus,
    siC,
    siScala,
    siClojure,
    siSqlite,
    siMongodb,
    siFirebase,
    siLatex,
    siReact,
    siGatsby,
    siBulma,
    siFlutter,
    siNextdotjs,
    siTailwindcss,
    siExpress,
    siGraphql,
    siDocker,
    siKubernetes,
    siGooglecloud,
    siGithubactions,
    siPandas,
    siNumpy,
    siScikitlearn,
    siJupyter,
    siAseprite,
    siFigma,
    siPycharm,
    siIntellijidea,
    siWebstorm,
    siAndroidstudio,
    siGit,
    siVim,
    siArchlinux,
    siMui,
    siNodedotjs,
    siRust,
    siVite,
    siD3,
    siThreedotjs,
    siFastapi,
    siNginx,
    siCmake,
    siSpacy,
    siOpencv,
    siDavinciresolve,
    siBlender,
    siPostgresql,
    siMysql,
    siRobotframework,
    siPytest,
    siJest,
    siCypress,
    siPostman,
    siJira,
    siArduino,
    siZotero,
    siRaspberrypi
} from 'simple-icons/icons';

import CanadaFlag from "@/assets/canadaflag.svg?react";
import ASLFlag from "@/assets/aslflag.svg?react";
import FranceFlag from "@/assets/franceflag.svg?react";
import GermanFlag from "@/assets/germanflag.svg?react";
import IranFlag from "@/assets/iranflag.svg?react";
import MexicoFlag from "@/assets/mexicoflag.svg?react";
import JavaIcon from "@/assets/java.svg?react";
import SqlIcon from "@/assets/sql.svg?react";
import MatplotlibIcon from "@/assets/matplotlib.svg?react";
import SeabornIcon from "@/assets/seaborn.svg?react";
import AdobePhotoshopIcon from "@/assets/adobephotoshop.svg?react";
import AdobeIllustratorIcon from "@/assets/adobeillustrator.svg?react";
import AdobePremiereProIcon from "@/assets/adobepremierpro.svg?react";
import AdobeAfterEffectsIcon from "@/assets/adobeaftereffects.svg?react";
import VSCodeIcon from "@/assets/vscode.svg?react";
import VisualStudioIcon from "@/assets/visualstudio.svg?react";
import React from "react";

const highlight = (text: string, keywords: string[]) => {
    // Highlight keywords
    let result = text;
    keywords.forEach(word => {
        const regex = new RegExp(`(${word})`, 'gi');
        result = result.replace(regex, '<span class="font-semibold">$1</span>');
    });
    return result;
};

// Tech stack grouped by category
const techStack = {
    languages: [
        { icon: siPython, label: 'Python', isSimpleIcon: true },
        { icon: <JavaIcon className="w-6 h-6" />, label: 'Java', isSimpleIcon: false },
        { icon: siJavascript, label: 'JavaScript', isSimpleIcon: true },
        { icon: siTypescript, label: 'TypeScript', isSimpleIcon: true },
        { icon: siHtml5, label: 'HTML5', isSimpleIcon: true },
        { icon: siCss, label: 'CSS', isSimpleIcon: true },
        { icon: siDart, label: 'Dart', isSimpleIcon: true },
        { icon: siLua, label: 'Lua', isSimpleIcon: true },
        { icon: siKotlin, label: 'Kotlin', isSimpleIcon: true },
        { icon: siCplusplus, label: 'C++', isSimpleIcon: true },
        { icon: siC, label: 'C', isSimpleIcon: true },
        { icon: siScala, label: 'Scala', isSimpleIcon: true },
        { icon: siClojure, label: 'Clojure', isSimpleIcon: true },
        { icon: <SqlIcon className="w-6 h-6" />, label: 'SQL', isSimpleIcon: false },
        { icon: siMongodb, label: 'NoSQL', isSimpleIcon: true },
        { icon: siGnubash, label: 'Bash', isSimpleIcon: true },
        { icon: siLatex, label: 'LaTeX', isSimpleIcon: true },
        { icon: siRust, label: 'Rust', isSimpleIcon: true },
        // TODO: Assembly (ARM/x86)
    ],
    frontend: [
        { icon: siReact, label: 'React', isSimpleIcon: true },
        { icon: siGatsby, label: 'Gatsby', isSimpleIcon: true },
        { icon: siMui, label: 'MaterialUI', isSimpleIcon: true },
        { icon: siBulma, label: 'Bulma', isSimpleIcon: true },
        { icon: siFlutter, label: 'Flutter', isSimpleIcon: true },
        { icon: siNextdotjs, label: 'Next.js', isSimpleIcon: true },
        { icon: siTailwindcss, label: 'TailwindCSS', isSimpleIcon: true },
        { icon: siVite, label: 'Vite', isSimpleIcon: true },
        { icon: siD3, label: 'D3.js', isSimpleIcon: true },
        { icon: siThreedotjs, label: 'Three.js', isSimpleIcon: true },
    ],
    backend: [
        { icon: siNodedotjs, label: 'Node.js', isSimpleIcon: true },
        { icon: siExpress, label: 'Express.js', isSimpleIcon: true },
        { icon: siGraphql, label: 'GraphQL', isSimpleIcon: true },
        { icon: siDocker, label: 'Docker', isSimpleIcon: true },
        { icon: siKubernetes, label: 'Kubernetes', isSimpleIcon: true },
        { icon: siGooglecloud, label: 'Google Cloud Platform', isSimpleIcon: true },
        { icon: siGithubactions, label: 'GitHub Actions', isSimpleIcon: true },
        { icon: siFastapi, label: 'FastAPI', isSimpleIcon: true },
        { icon: siNginx, label: 'Nginx', isSimpleIcon: true },
        { icon: siCmake, label: 'CMake', isSimpleIcon: true },
    ],
    dataml: [
        { icon: siPandas, label: 'Pandas', isSimpleIcon: true },
        { icon: siNumpy, label: 'NumPy', isSimpleIcon: true },
        { icon: siScikitlearn, label: 'scikit-learn', isSimpleIcon: true },
        { icon: <MatplotlibIcon className="w-6 h-6" />, label: 'Matplotlib', isSimpleIcon: false },
        { icon: <SeabornIcon className="w-6 h-6" />, label: 'Seaborn', isSimpleIcon: false },
        { icon: siJupyter, label: 'Jupyter Notebooks', isSimpleIcon: true },
        { icon: siSpacy, label: 'spaCy', isSimpleIcon: true },
        { icon: siOpencv, label: 'OpenCV', isSimpleIcon: true },
    ],
    creative: [
        { icon: <AdobePhotoshopIcon className="w-6 h-6" />, label: 'Adobe Photoshop', isSimpleIcon: false },
        { icon: <AdobeIllustratorIcon className="w-6 h-6" />, label: 'Adobe Illustrator', isSimpleIcon: false },
        { icon: <AdobePremiereProIcon className="w-6 h-6" />, label: 'Adobe Premiere Pro', isSimpleIcon: false },
        { icon: <AdobeAfterEffectsIcon className="w-6 h-6" />, label: 'Adobe After Effects', isSimpleIcon: false },
        { icon: siDavinciresolve, label: 'DaVinci Resolve', isSimpleIcon: true },
        { icon: siBlender, label: 'Blender', isSimpleIcon: true },
        { icon: siAseprite, label: 'Aseprite', isSimpleIcon: true },
        { icon: siFigma, label: 'Figma', isSimpleIcon: true },
        { icon: siPycharm, label: 'PyCharm', isSimpleIcon: true },
        { icon: siIntellijidea, label: 'IntelliJ', isSimpleIcon: true },
        { icon: siWebstorm, label: 'Webstorm', isSimpleIcon: true },
        { icon: siAndroidstudio, label: 'Android Studio', isSimpleIcon: true },
        { icon: <VSCodeIcon className="w-6 h-6" />, label: 'VS Code', isSimpleIcon: false },
        { icon: <VisualStudioIcon className="w-6 h-6" />, label: 'Visual Studio', isSimpleIcon: false },
    ],
    databases: [
        { icon: siFirebase, label: 'Firebase', isSimpleIcon: true },
        { icon: siSqlite, label: 'SQLite', isSimpleIcon: true },
        { icon: siMongodb, label: 'MongoDB', isSimpleIcon: true },
        { icon: siPostgresql, label: 'PostgreSQL', isSimpleIcon: true },
        { icon: siMysql, label: 'MySQL', isSimpleIcon: true },
    ],
    testing: [
        { icon: siRobotframework, label: 'Robot Framework', isSimpleIcon: true },
        { icon: siPytest, label: 'Pytest', isSimpleIcon: true },
        { icon: siJest, label: 'Jest', isSimpleIcon: true },
        { icon: siCypress, label: 'Cypress', isSimpleIcon: true },
        { icon: siPostman, label: 'Postman', isSimpleIcon: true },
        { icon: siJira, label: 'JIRA', isSimpleIcon: true },
    ],
    embedded: [
        { icon: siArduino, label: 'Arduino', isSimpleIcon: true },
        { icon: siRaspberrypi, label: 'Raspberry Pi', isSimpleIcon: true },
    ],
    other: [
        { icon: siGit, label: 'Git', isSimpleIcon: true },
        { icon: siVim, label: 'Vim', isSimpleIcon: true },
        { icon: siArchlinux, label: 'Arch Linux', isSimpleIcon: true },
        { icon: siZotero, label: 'Zotero', isSimpleIcon: true },
    ]
};


// Language proficiency data
const languages = [
    { flag: <CanadaFlag className="w-8 h-8 inline-block mb-1" />, name: 'English', level: 'Fluent (Native)', clb: 'CLB 9 / CEFR C2', color: 'text-amber-400' },
    { flag: <MexicoFlag className="w-8 h-8 inline-block mb-1" />, name: 'Spanish', level: 'Intermediate (CLB 5 / CEFR B1)', clb: '', color: 'text-amber-400' },
    { flag: <FranceFlag className="w-8 h-8 inline-block mb-1" />, name: 'French', level: 'Low Intermediate (CLB 4 / CEFR A2)', clb: '', color: 'text-amber-400' },
    { flag: <ASLFlag className="w-8 h-8 inline-block mb-1" />, name: 'ASL', level: 'Low Intermediate (CLB 3 / CEFR A2)', clb: '', color: 'text-amber-400' },
    { flag: <IranFlag className="w-8 h-8 inline-block mb-1" />, name: 'Farsi', level: 'Beginner (CLB 2 / CEFR A1)', clb: '', color: 'text-amber-400' },
    { flag: <GermanFlag className="w-8 h-8 inline-block mb-1" />, name: 'German', level: 'Beginner (CLB 1 / CEFR A1)', clb: '', color: 'text-amber-400' }
];

// About paragraphs and keywords
const aboutParagraphs = [
    {
        text: "I’m a developer, researcher, and digital creative with passions spanning software development, human-computer interaction (HCI), and computational linguistics. I enjoy building thoughtful, user-centered tools—from interactive language visualizations to clean, expressive interfaces that feel intuitive and inviting.",
        keywords: [
            'developer', 'researcher', 'digital creative', 'software development', 'human-computer interaction', 'HCI', 'computational linguistics', 'user-centered', 'language visualizations', 'interfaces'
        ]
    },
    {
        text: "Right now, I’m pursuing a Master’s in Computer Science, focusing on visualizing the evolution of languages and etymology. My work looks at how language connects us across time and cultures, and how design can help make that journey more accessible, engaging, and meaningful.",
        keywords: [
            'Master’s in Computer Science', 'visualizing', 'evolution of languages', 'etymology', 'language', 'design', 'accessible', 'engaging', 'meaningful'
        ]
    },
    {
        text: "At the core of everything I build is the user—I care deeply about creating seamless, inclusive experiences that support curiosity, learning, and exploration.",
        keywords: [
            'user', 'seamless', 'inclusive', 'curiosity', 'learning', 'exploration'
        ]
    },
    {
        text: "Outside of research and coding, I’m endlessly curious. I love experimenting in the kitchen, capturing small moments through photography, and working with my hands—whether it’s sketching, woodworking, or designing digital art. I stay active through calisthenics, weight training, and rock climbing, always finding new ways to challenge myself and grow.",
        keywords: [
            'curious', 'experimenting', 'photography', 'sketching', 'woodworking', 'digital art', 'calisthenics', 'weight training', 'rock climbing', 'challenge', 'grow'
        ]
    }
];

// Tailwind class consolidations
const sectionClass = "py-16 px-6 text-center relative";
const cardClass = "bg-transparent border-none shadow-none";
const cardContentClass = "p-6 sm:p-8";
const paragraphClass = "space-y-6 text-base leading-relaxed text-white";
const headingClass = "text-amber-400 not-last:mb-8 text-4xl md:text-5xl font-extrabold tracking-tight";
const subheadingClass = "text-2xl font-bold text-amber-400 mb-3 text-center";
const listClass = "space-y-2 text-base";
const techCategoryTitle = "font-semibold text-lg mb-1 text-white";
const techIconRow = "flex flex-wrap gap-3 items-center";
const techSectionClass = "mb-4";
const maxWSection = "mt-12 text-left max-w-2xl mx-auto";
const maxWLang = "mt-10 text-left max-w-lg mx-auto";

const AboutMe: React.FC = () => {
    const typed = useTypewriterOnce("About Me", 60);
    return (
        <section id="about-me" className={sectionClass}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.h2
                    className={headingClass}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    aria-label="About Me"
                >
                    {typed}
                </motion.h2>
                <Card className={cardClass}>
                    <CardContent className={cardContentClass}>
                        <div className={paragraphClass}>
                            {aboutParagraphs.map((para, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.2 + i * 0.2 }}
                                    dangerouslySetInnerHTML={{ __html: highlight(para.text, para.keywords) }}
                                />
                            ))}
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 1 }}
                            className={maxWLang}
                        >
                            <h3 className={subheadingClass}>Linguistic Proficiency</h3>
                            <ul className={listClass}>
                                {languages.map((lang) => (
                                    <li className="flex items-center gap-2" key={lang.name}>
                                        <span className="text-2xl">{lang.flag}</span>
                                        <span>
                                            <span className={`font-semibold ${lang.color}`}>{lang.name}</span>
                                            <span className="ml-2 text-white/80">{lang.level}</span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 1.2 }}
                            className={maxWSection}
                        >
                            <h3 className={subheadingClass}>Skills & Tech Stack</h3>
                            {Object.entries(techStack).map(([category, items]) => (
                                <div className={techSectionClass} key={category}>
                                    <div className={techCategoryTitle}>
                                        {(() => {
                                            switch (category) {
                                                case 'languages': return 'Programming Languages:';
                                                case 'frontend': return 'Frontend:';
                                                case 'backend': return 'Backend & DevOps:';
                                                case 'dataml': return 'Data/ML:';
                                                case 'creative': return 'Creative & IDEs:';
                                                case 'databases': return 'Databases:';
                                                case 'testing': return 'Testing & QA:';
                                                case 'embedded': return 'Embedded Systems:';
                                                case 'other': return 'Other:';
                                                default: return '';
                                            }
                                        })()}
                                    </div>
                                    <div className={techIconRow}>
                                        {(items as Array<{ icon: React.ReactNode | { path: string; hex: string } | null; label: string; isSimpleIcon: boolean }> ).map(({ icon, label, isSimpleIcon }) => (
                                            <Tooltip key={label}>
                                                <TooltipTrigger asChild>
                                                    <span className="inline-flex items-center">
                                                        {isSimpleIcon && icon && typeof icon === 'object' && 'path' in icon && 'hex' in icon ? (
                                                            <svg
                                                                width={24}
                                                                height={24}
                                                                viewBox="0 0 24 24"
                                                                fill={
                                                                    !icon.hex ||
                                                                    icon.hex === '000' ||
                                                                    icon.hex === '000000' ||
                                                                    icon.hex === '0'
                                                                        ? '#fff'
                                                                        : `#${icon.hex}`
                                                                }
                                                                aria-hidden="true"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                className="inline mr-1"
                                                            >
                                                                <path d={icon.path} />
                                                            </svg>
                                                        ) : (
                                                            React.isValidElement(icon) ? icon : null
                                                        )}
                                                        <span className="sr-only">{label}</span>
                                                    </span>
                                                </TooltipTrigger>
                                                <TooltipContent>{label}</TooltipContent>
                                            </Tooltip>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </CardContent>
                </Card>
            </motion.div>
        </section>
    );
};

export default AboutMe;
