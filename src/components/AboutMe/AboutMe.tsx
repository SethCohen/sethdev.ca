import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useTypewriterOnce } from '@/hooks/useTypewriterOnce';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import {
    siPython, siGnubash, siJavascript, siTypescript, siHtml5, siCss3, siDart, siLua, siKotlin, siCplusplus, siC, siScala, siClojure, siSqlite, siMongodb, siFirebase, siLatex, siReact, siGatsby, siBulma, siFlutter, siNextdotjs, siTailwindcss, siExpress, siGraphql, siDocker, siKubernetes, siGooglecloud, siGithubactions, siPandas, siNumpy, siScikitlearn, siJupyter, siAseprite, siFigma, siPycharm, siIntellijidea, siWebstorm, siAndroidstudio, siGit, siVim, siArchlinux,
    siMui,
    siNodedotjs
} from 'simple-icons/icons';

const highlight = (text: string, keywords: string[]) => {
    // Highlight keywords with gold color
    let result = text;
    keywords.forEach(word => {
        const regex = new RegExp(`(${word})`, 'gi');
        result = result.replace(regex, '<span class="font-semibold">$1</span>');
    });
    return result;
};

const intro = "I’m a developer, researcher, and digital creative with passions spanning software development, human-computer interaction (HCI), and computational linguistics. I enjoy building thoughtful, user-centered tools—from interactive language visualizations to clean, expressive interfaces that feel intuitive and inviting.";
const keywords1 = [
    'developer', 'researcher', 'digital creative', 'software development', 'human-computer interaction', 'HCI', 'computational linguistics', 'user-centered', 'language visualizations', 'interfaces'
];
const para2 = "Right now, I’m pursuing a Master’s in Computer Science, focusing on visualizing the evolution of languages and etymology. My work looks at how language connects us across time and cultures, and how design can help make that journey more accessible, engaging, and meaningful.";
const keywords2 = [
    'Master’s in Computer Science', 'visualizing', 'evolution of languages', 'etymology', 'language', 'design', 'accessible', 'engaging', 'meaningful'
];
const para3 = "At the core of everything I build is the user—I care deeply about creating seamless, inclusive experiences that support curiosity, learning, and exploration.";
const keywords3 = [
    'user', 'seamless', 'inclusive', 'curiosity', 'learning', 'exploration'
];
const para4 = "Outside of research and coding, I’m endlessly curious. I love experimenting in the kitchen, capturing small moments through photography, and working with my hands—whether it’s sketching, woodworking, or designing digital art. I stay active through calisthenics, weight training, and rock climbing, always finding new ways to challenge myself and grow.";
const keywords4 = [
    'curious', 'experimenting', 'photography', 'sketching', 'woodworking', 'digital art', 'calisthenics', 'weight training', 'rock climbing', 'challenge', 'grow'
];

const AboutMe: React.FC = () => {
    const typed = useTypewriterOnce("About Me", 60);
    return (
        <section id="about-me" className="py-16 px-6 text-center relative">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.h2
                    className="text-amber-400 not-last:mb-8 text-4xl md:text-5xl font-extrabold tracking-tight"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    aria-label="About Me"
                >
                    {typed}
                </motion.h2>
                <Card className="bg-transparent border-none shadow-none">
                    <CardContent className="p-6 sm:p-8">
                        <div className="space-y-6 text-base leading-relaxed text-white">
                            <motion.p
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                dangerouslySetInnerHTML={{ __html: highlight(intro, keywords1) }}
                            />
                            <motion.p
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                dangerouslySetInnerHTML={{ __html: highlight(para2, keywords2) }}
                            />
                            <motion.p
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.6 }}
                                dangerouslySetInnerHTML={{ __html: highlight(para3, keywords3) }}
                            />
                            <motion.p
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.8 }}
                                dangerouslySetInnerHTML={{ __html: highlight(para4, keywords4) }}
                            />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 1 }}
                            className="mt-10 text-left max-w-lg mx-auto"
                        >
                            <h3 className="text-2xl font-bold text-amber-400 mb-3 text-center">Linguistic Proficiency</h3>
                            <ul className="space-y-2 text-base">
                                <li className="flex items-center gap-2">
                                    <span className="text-2xl">🇨🇦</span>
                                    <span>
                                        <span className="font-semibold text-amber-400">English</span>
                                        <span className="ml-2 text-white/80">Fluent (Native)</span>
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-2xl">🇲🇽</span>
                                    <span>
                                        <span className="font-semibold text-amber-400">Spanish</span>
                                        <span className="ml-2 text-white/80">Intermediate (CLB 5 / CEFR B1)</span>
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-2xl">🇫🇷</span>
                                    <span>
                                        <span className="font-semibold text-amber-400">French</span>
                                        <span className="ml-2 text-white/80">Low Intermediate (CLB 4 / CEFR A2)</span>
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-2xl">🤟</span>
                                    <span>
                                        <span className="font-semibold text-amber-400">ASL</span>
                                        <span className="ml-2 text-white/80">Low Intermediate (CLB 3 / CEFR A2)</span>
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-2xl">🇮🇷</span>
                                    <span>
                                        <span className="font-semibold text-amber-400">Farsi</span>
                                        <span className="ml-2 text-white/80">Beginner (CLB 2 / CEFR A1)</span>
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="text-2xl">🇩🇪</span>
                                    <span>
                                        <span className="font-semibold text-amber-400">German</span>
                                        <span className="ml-2 text-white/80">Beginner (CLB 1 / CEFR A1)</span>
                                    </span>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 1.2 }}
                            className="mt-12 text-left max-w-2xl mx-auto"
                        >
                            <h3 className="text-2xl font-bold text-amber-400 mb-3 text-center">Skills & Tech Stack</h3>
                            <div className="mb-4">
                                <div className="font-semibold text-lg mb-1 text-white">Programming Languages:</div>
                                <div className="flex flex-wrap gap-3 items-center">
                                    {[
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
                                    ].map(({ icon, label }) => (
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
                            <div className="mb-4">
                                <div className="font-semibold text-lg mb-1 text-white">Frontend:</div>
                                <div className="flex flex-wrap gap-3 items-center">
                                    {[
                                        { icon: siReact, label: 'React' }, 
                                        { icon: siGatsby, label: 'Gatsby' }, 
                                        { icon: siMui, label: 'MaterialUI' }, 
                                        { icon: siBulma, label: 'Bulma' }, 
                                        { icon: siFlutter, label: 'Flutter' }, 
                                        { icon: siNextdotjs, label: 'Next.js' }, 
                                        { icon: siTailwindcss, label: 'TailwindCSS' }
                                    ].map(({ icon, label }) => (
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
                            <div className="mb-4">
                                <div className="font-semibold text-lg mb-1 text-white">Backend & DevOps:</div>
                                <div className="flex flex-wrap gap-3 items-center">
                                    {[
                                        { icon: siNodedotjs, label: 'Node.js' }, 
                                        { icon: siExpress, label: 'Express.js' }, 
                                        { icon: siGraphql, label: 'GraphQL' }, 
                                        { icon: siDocker, label: 'Docker' }, 
                                        { icon: siKubernetes, label: 'Kubernetes' },
                                        { icon: siGooglecloud, label: 'Google Cloud Platform' }, 
                                        { icon: siGithubactions, label: 'GitHub Actions' }
                                    ].map(({ icon, label }) => (
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
                            <div className="mb-4">
                                <div className="font-semibold text-lg mb-1 text-white">Data/ML:</div>
                                <div className="flex flex-wrap gap-3 items-center">
                                    {[
                                        { icon: siPandas, label: 'Pandas' },
                                        { icon: siNumpy, label: 'NumPy' },
                                        { icon: siScikitlearn, label: 'scikit-learn' },
                                        // TODO: implement matplotlib.svg
                                        // TODO: implement seaborn.svg
                                        { icon: siJupyter, label: 'Jupyter Notebooks' }
                                    ].map(({ icon, label }) => (
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
                            <div className="mb-4">
                                <div className="font-semibold text-lg mb-1 text-white">Creative & IDEs:</div>
                                <div className="flex flex-wrap gap-3 items-center">
                                    {[
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
                                    ].map(({ icon, label }) => (
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
                            <div className="mb-4">
                                <div className="font-semibold text-lg mb-1 text-white">Databases:</div>
                                <div className="flex flex-wrap gap-3 items-center">
                                    {[
                                        { icon: siFirebase, label: 'Firebase' }, 
                                        { icon: siSqlite, label: 'SQLite' }, 
                                        { icon: siMongodb, label: 'MongoDB' },
                                    ].map(({ icon, label }) => (
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
                            <div>
                                <div className="font-semibold text-lg mb-1 text-white">Other:</div>
                                <div className="flex flex-wrap gap-3 items-center">
                                    {[
                                        { icon: siGit, label: 'Git' }, 
                                        { icon: siVim, label: 'Vim' }, 
                                        { icon: siArchlinux, label: 'Arch Linux' }].map(({ icon, label }) => (
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
                        </motion.div>
                    </CardContent>
                </Card>
            </motion.div>
        </section>
    );
};

export default AboutMe;
