import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Link,
} from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
    page: {
        fontFamily: "Helvetica",
        fontSize: 10,
        color: "#111",
        paddingTop: 36,
        paddingBottom: 36,
        paddingHorizontal: 48,
        backgroundColor: "#ffffff",
    },
    name: {
        fontSize: 20,
        fontFamily: "Helvetica-Bold",
        textAlign: "center",
        letterSpacing: 2,
        marginBottom: 4,
    },
    contactRow: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 12,
        fontSize: 9,
        color: "#444",
        marginBottom: 14,
    },
    contactItem: { marginHorizontal: 5 },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: "#111",
        marginBottom: 6,
    },
    sectionTitle: {
        fontSize: 10,
        fontFamily: "Helvetica-Bold",
        letterSpacing: 1,
        textTransform: "uppercase",
        borderBottomWidth: 0.5,
        borderBottomColor: "#333",
        paddingBottom: 2,
        marginBottom: 6,
        marginTop: 10,
    },
    // Summary
    summaryText: {
        fontSize: 9.5,
        color: "#222",
        lineHeight: 1.5,
    },
    // Education row
    eduRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 2,
    },
    bold: { fontFamily: "Helvetica-Bold" },
    gray: { color: "#555" },
    // Skills
    skillsRow: { flexDirection: "row", marginBottom: 3 },
    skillLabel: { fontFamily: "Helvetica-Bold", width: 70, color: "#111" },
    skillValue: { flex: 1, color: "#222" },
    // Projects
    projectHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 2,
    },
    bullet: { flexDirection: "row", marginBottom: 2 },
    bulletDot: { width: 12, color: "#444" },
    bulletText: { flex: 1, color: "#333", lineHeight: 1.5 },
    techLine: { color: "#555", fontFamily: "Helvetica-Oblique", marginTop: 2, marginBottom: 4 },
});

function ResumePDF() {
    return (
        <Document title="Anish Kumar Gupta - Resume" author="Anish Kumar Gupta">
            <Page size="A4" style={styles.page}>
                {/* Header */}
                <Text style={styles.name}>ANISH KUMAR GUPTA</Text>
                <View style={styles.contactRow}>
                    <Text style={styles.contactItem}>+91 6299293388</Text>
                    <Text style={styles.contactItem}>anish.grd2004@gmail.com</Text>
                    <Link src="https://linkedin.com/in/anishkumargupta" style={styles.contactItem}>LinkedIn</Link>
                    <Link src="https://github.com/anishkumargupta" style={styles.contactItem}>GitHub</Link>
                </View>

                {/* Professional Summary */}
                <Text style={styles.sectionTitle}>Professional Summary</Text>
                <Text style={styles.summaryText}>
                    Full Stack Developer and Machine Learning Engineer experienced in building AI-driven platforms, financial analytics systems, and scalable web applications. Strong background in data science, algorithmic trading, and statistical modeling, with expertise in translating complex datasets into production-ready, performance-optimized solutions.
                </Text>

                {/* Education */}
                <Text style={styles.sectionTitle}>Education</Text>

                <View style={styles.eduRow}>
                    <Text style={styles.bold}>B.Tech in Computer Science and Engineering</Text>
                    <Text>2022 – 2026</Text>
                </View>
                <View style={styles.eduRow}>
                    <Text style={styles.gray}>VIT Bhopal University, Madhya Pradesh</Text>
                    <Text style={styles.gray}>CGPA: 7.43</Text>
                </View>

                <View style={[styles.eduRow, { marginTop: 6 }]}>
                    <Text style={styles.bold}>Class XII — Science (PCM)</Text>
                    <Text>2022</Text>
                </View>
                <View style={styles.eduRow}>
                    <Text style={styles.gray}>Sri Chaitanya Junior Kalasala, Hyderabad</Text>
                    <Text style={styles.gray}>96.7% — BIE Telangana</Text>
                </View>

                <View style={[styles.eduRow, { marginTop: 6 }]}>
                    <Text style={styles.bold}>Class X</Text>
                    <Text>2020</Text>
                </View>
                <View style={styles.eduRow}>
                    <Text style={styles.gray}>BNS DAV Public School, Giridih</Text>
                    <Text style={styles.gray}>84.8% — CBSE</Text>
                </View>

                {/* Skills */}
                <Text style={styles.sectionTitle}>Skills</Text>
                <View style={styles.skillsRow}>
                    <Text style={styles.skillLabel}>Languages:</Text>
                    <Text style={styles.skillValue}>JavaScript | TypeScript | Python | C++ | SQL</Text>
                </View>
                <View style={styles.skillsRow}>
                    <Text style={styles.skillLabel}>Frontend:</Text>
                    <Text style={styles.skillValue}>React | Next.js | HTML5 | CSS3 | Tailwind CSS | Responsive Design</Text>
                </View>
                <View style={styles.skillsRow}>
                    <Text style={styles.skillLabel}>Backend:</Text>
                    <Text style={styles.skillValue}>Node.js | Express.js | FastAPI | RESTful APIs | GraphQL | Microservices</Text>
                </View>
                <View style={styles.skillsRow}>
                    <Text style={styles.skillLabel}>AI / ML:</Text>
                    <Text style={styles.skillValue}>TensorFlow | Scikit-learn | LangChain | Ollama | Data Visualization | Statistics</Text>
                </View>
                <View style={styles.skillsRow}>
                    <Text style={styles.skillLabel}>Finance:</Text>
                    <Text style={styles.skillValue}>Algorithmic Trading | Technical Analysis | Financial Data | Portfolio Risk Management</Text>
                </View>

                {/* Projects */}
                <Text style={styles.sectionTitle}>Projects</Text>

                {/* Project 1 */}
                <View style={styles.projectHeader}>
                    <Text style={styles.bold}>Trading Hand – Algo Trading Assistant</Text>
                    <Text style={styles.gray}>Major Project</Text>
                </View>
                {[
                    "Built an AI-powered trading assistant supporting automated and manual trading workflows with detailed performance analytics and strategy evaluation.",
                    "Developed trade tracking and journaling modules to analyze execution history, identify recurring behavioral mistakes, and surface consistently profitable patterns.",
                    "Integrated real-time market data and AI-driven insights to assist traders in making disciplined, data-backed trading decisions under volatile conditions.",
                ].map((b, i) => (
                    <View key={i} style={styles.bullet}>
                        <Text style={styles.bulletDot}>•</Text>
                        <Text style={styles.bulletText}>{b}</Text>
                    </View>
                ))}
                <Text style={styles.techLine}>Tech: React, Tailwind CSS, JavaScript, MetaTrader5, Machine Learning, Pine Script.</Text>

                {/* Project 2 */}
                <View style={styles.projectHeader}>
                    <Text style={styles.bold}>Dhruv Tara – AI Education Platform</Text>
                    <Text style={styles.gray}>College Project</Text>
                </View>
                {[
                    "Designed and developed an AI-driven e-learning platform integrating automated notes generation, lecture video summarization, and an intelligent AI tutor for contextual doubt resolution.",
                    "Implemented NLP-based summarization pipelines to extract high-impact concepts from long-form academic content, improving revision efficiency and learner focus.",
                    "Enhanced student productivity by reducing information overload and enabling faster comprehension through personalized, AI-assisted learning workflows.",
                ].map((b, i) => (
                    <View key={i} style={styles.bullet}>
                        <Text style={styles.bulletDot}>•</Text>
                        <Text style={styles.bulletText}>{b}</Text>
                    </View>
                ))}
                <Text style={styles.techLine}>Tech: JavaScript, Python, HTML, CSS, REST APIs.</Text>

                {/* Project 3 */}
                <View style={styles.projectHeader}>
                    <Text style={styles.bold}>AI Portfolio Risk Analyzer</Text>
                    <Text style={[styles.gray]}></Text>
                </View>
                {[
                    "Developed a machine learning-based financial analytics system to evaluate and manage multi-asset portfolio risk across equities, forex, and crypto instruments.",
                    "Modeled volatility, exposure, and cross-asset correlations to quantify risk concentration and portfolio sensitivity under varying market conditions.",
                ].map((b, i) => (
                    <View key={i} style={styles.bullet}>
                        <Text style={styles.bulletDot}>•</Text>
                        <Text style={styles.bulletText}>{b}</Text>
                    </View>
                ))}
                <Text style={styles.techLine}>Tech: Python, Pandas, NumPy, Scikit-learn, Matplotlib.</Text>

                {/* Achievements */}
                <Text style={styles.sectionTitle}>Achievements & Certifications</Text>
                <View style={styles.bullet}>
                    <Text style={styles.bulletDot}>•</Text>
                    <Text style={styles.bulletText}>
                        <Text style={styles.bold}>Winner – Stock Overflow (Data Science Club, VIT Bhopal):</Text> Won ML/DL-based stock price prediction competition; applied visualization and statistical analysis on noisy financial data.
                    </Text>
                </View>
                <View style={styles.bullet}>
                    <Text style={styles.bulletDot}>•</Text>
                    <Text style={styles.bulletText}>
                        <Text style={styles.bold}>EY Techathon 6.0 – Unstop:</Text> Worked as Full Stack Developer; received Certificate of Appreciation.
                    </Text>
                </View>
                <View style={styles.bullet}>
                    <Text style={styles.bulletDot}>•</Text>
                    <Text style={styles.bulletText}>
                        <Text style={styles.bold}>Certifications:</Text> Generative AI (IBM), Full Stack Development (Udemy)
                    </Text>
                </View>
            </Page>
        </Document>
    );
}

export async function GET() {
    try {
        const buffer = await renderToBuffer(<ResumePDF />);
        const uint8 = new Uint8Array(buffer);

        return new NextResponse(uint8, {
            status: 200,
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": 'attachment; filename="Anish_Kumar_Gupta_Resume.pdf"',
            },
        });
    } catch (err) {
        console.error("Resume PDF generation error:", err);
        return new NextResponse("Failed to generate resume", { status: 500 });
    }
}
