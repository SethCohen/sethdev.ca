import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useTypewriterOnce } from '@/hooks/useTypewriterOnce';

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
                    </CardContent>
                </Card>
            </motion.div>
        </section>
    );
};

export default AboutMe;
