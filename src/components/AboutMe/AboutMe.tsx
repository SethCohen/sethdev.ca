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
    siCss3,
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
    siNodedotjs
} from 'simple-icons/icons';

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
        { icon: siPython, label: 'Python' },
        // TODO: implement java.svg
        { icon: siJavascript, label: 'JavaScript' },
        { icon: siTypescript, label: 'TypeScript' },
        { icon: siHtml5, label: 'HTML5' },
        { icon: siCss3, label: 'CSS3' },
        { icon: siDart, label: 'Dart' },
        { icon: siLua, label: 'Lua' },
        { icon: siKotlin, label: 'Kotlin' },
        { icon: siCplusplus, label: 'C++' },
        { icon: siC, label: 'C' },
        { icon: siScala, label: 'Scala' },
        { icon: siClojure, label: 'Clojure' },
        // TODO: implement sql.svg
        { icon: siMongodb, label: 'NoSQL' },
        { icon: siGnubash, label: 'Bash' },
        { icon: siLatex, label: 'LaTeX' }
    ],
    frontend: [
        { icon: siReact, label: 'React' },
        { icon: siGatsby, label: 'Gatsby' },
        { icon: siMui, label: 'MaterialUI' },
        { icon: siBulma, label: 'Bulma' },
        { icon: siFlutter, label: 'Flutter' },
        { icon: siNextdotjs, label: 'Next.js' },
        { icon: siTailwindcss, label: 'TailwindCSS' }
    ],
    backend: [
        { icon: siNodedotjs, label: 'Node.js' },
        { icon: siExpress, label: 'Express.js' },
        { icon: siGraphql, label: 'GraphQL' },
        { icon: siDocker, label: 'Docker' },
        { icon: siKubernetes, label: 'Kubernetes' },
        { icon: siGooglecloud, label: 'Google Cloud Platform' },
        { icon: siGithubactions, label: 'GitHub Actions' }
    ],
    dataml: [
        { icon: siPandas, label: 'Pandas' },
        { icon: siNumpy, label: 'NumPy' },
        { icon: siScikitlearn, label: 'scikit-learn' },
        // TODO: implement matplotlib.svg
        // TODO: implement seaborn.svg
        { icon: siJupyter, label: 'Jupyter Notebooks' }
    ],
    creative: [
        // TODO: implement adobephotoshop.svg
        // TODO: implement adobeillustrator.svg
        // TODO: implement adobepremierepro.svg
        // TODO: implement adobeaftereffects.svg
        { icon: siAseprite, label: 'Aseprite' },
        { icon: siFigma, label: 'Figma' },
        { icon: siPycharm, label: 'PyCharm' },
        { icon: siIntellijidea, label: 'IntelliJ' },
        { icon: siWebstorm, label: 'Webstorm' },
        { icon: siAndroidstudio, label: 'Android Studio' },
        // TODO: implement vscode.svg
        // TODO: implement visualstudio.svg
    ],
    databases: [
        { icon: siFirebase, label: 'Firebase' },
        { icon: siSqlite, label: 'SQLite' },
        { icon: siMongodb, label: 'MongoDB' }
    ],
    other: [
        { icon: siGit, label: 'Git' },
        { icon: siVim, label: 'Vim' },
        { icon: siArchlinux, label: 'Arch Linux' }
    ]
};

// Language proficiency data
const languages = [
    { flag: '🇨🇦', name: 'English', level: 'Fluent (Native)', clb: 'CLB 9 / CEFR C2', color: 'text-amber-400' },
    { flag: '🇲🇽', name: 'Spanish', level: 'Intermediate (CLB 5 / CEFR B1)', clb: '', color: 'text-amber-400' },
    { flag: '🇫🇷', name: 'French', level: 'Low Intermediate (CLB 4 / CEFR A2)', clb: '', color: 'text-amber-400' },
    { flag: '🤟', name: 'ASL', level: 'Low Intermediate (CLB 3 / CEFR A2)', clb: '', color: 'text-amber-400' },
    { flag: '🇮🇷', name: 'Farsi', level: 'Beginner (CLB 2 / CEFR A1)', clb: '', color: 'text-amber-400' },
    { flag: '🇩🇪', name: 'German', level: 'Beginner (CLB 1 / CEFR A1)', clb: '', color: 'text-amber-400' }
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

interface TechStackItem {
    icon: { path: string; hex: string };
    label: string;
}

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
                                                case 'other': return 'Other:';
                                                default: return '';
                                            }
                                        })()}
                                    </div>
                                    <div className={techIconRow}>
                                        {(items as TechStackItem[]).map(({ icon, label }) => (
                                            <Tooltip key={label}>
                                                <TooltipTrigger asChild>
                                                    <span className="inline-flex items-center">
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill={`#${icon.hex}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="inline mr-1">
                                                            <path d={icon.path} />
                                                        </svg>
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
