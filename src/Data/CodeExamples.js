export const codeExamples = {
    "App.jsx": `
    import { useState } from "react";
    import { expresscode } from "@expresscode/ai";
    
    function App() {
    const [code, setCode] = useState("");
    const handleAICompletion = async () => {
        const suggestion = await ExpressCode.complete(code);
        setCode(suggestion);
        };
        
        return (
        <div className="app">
        <ExpressCode
        OnChange={setCode}
        onAI={handleAICompletion}
        />
        </div>
        );
}`,
    "Hero.jsx": `
    import { useState } from "react";
    import { expresscode } from "@expresscode/ai";
    
    function App() {
    const [code, setCode] = useState("");
    const handleAICompletion = async () => {
        const suggestion = await ExpressCode.complete(code);
        setCode(suggestion);
        };
        
        return (
        <div className="app">
        <ExpressCode
        OnChange={setCode}
        onAI={handleAICompletion}
        />
        </div>
        );
}`,
            "Navbar.jsx": `
    import { useState } from "react";
    import { expresscode } from "@expresscode/ai";
    
    function App() {
    const [code, setCode] = useState("");
    const handleAICompletion = async () => {
        const suggestion = await ExpressCode.complete(code);
        setCode(suggestion);
        };
        
        return (
        <div className="app">
        <ExpressCode
        OnChange={setCode}
        onAI={handleAICompletion}
        />
        </div>
        );
}`,
};

export const floatingCards = {
    "App.jsx": {
bgColor: "bg-blue-500/20",
iconColor: "text-blue-400",
textColor: "text-blue-200",
contentColor: "text-blue-300",
icon: "AI",
title: "Smart Completion",
content: "AI-powered code suggestions in real-time",
    },
     "Hero.jsx": {
bgColor: "bg-blue-500/20",
iconColor: "text-blue-400",
textColor: "text-blue-200",
contentColor: "text-blue-300",
icon: "AI",
title: "Auto Animation",
content: "Dynamic typing effects generated automatically",
    },
     "Navbar.jsx": {
bgColor: "bg-blue-500/20",
iconColor: "text-blue-400",
textColor: "text-blue-200",
contentColor: "text-blue-300",
icon: "AI",
title: "Smart Search",
content: "Intelligent code search across your project",
    },
}