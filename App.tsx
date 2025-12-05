import React, { useState } from 'react';
import { Carousel } from './components/Carousel';
import { generateCreativeStory } from './services/geminiService';
import { CAROUSEL_IMAGES, CONTENT_SECTIONS } from './constants';
import { StoryState } from './types';
import { Sparkles, RefreshCcw, SendHorizontal } from 'lucide-react';

const App: React.FC = () => {
  const [storyState, setStoryState] = useState<StoryState>({
    title: "Storytelling",
    content: "Since childhood, I've been captivated by the silent conversations between human intent and digital response. I grew up with a screen in my living room, improvising prompts and codes, drawn to the infinite possibilities. Though I learnt the basics of logic, I found the poetry in the machine...",
    isLoading: false,
  });

  const [promptInput, setPromptInput] = useState("");

  const handleGenerate = async () => {
    if (storyState.isLoading) return;
    
    setStoryState(prev => ({ ...prev, isLoading: true }));
    const result = await generateCreativeStory(promptInput);
    
    setStoryState({
      title: result.title,
      content: result.content,
      isLoading: false
    });
    setPromptInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleGenerate();
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#F3F3F3] font-sans">
      
      {/* Background Large Text */}
      <div 
        className="absolute top-[5%] w-full text-center font-serif-italic pointer-events-none select-none z-0"
        style={{
          fontSize: '18rem',
          lineHeight: 1,
          color: 'rgba(0,0,0,0.03)',
          whiteSpace: 'nowrap'
        }}
      >
        these stories
      </div>

      {/* Hero Container */}
      <div className="relative z-10 flex flex-col items-center min-h-[90vh]">
        
        {/* Wheel Carousel */}
        <div className="w-full">
           <Carousel images={CAROUSEL_IMAGES} />
        </div>

        {/* Text Content Section */}
        {/* Negative margin pulls this up to overlap the bottom of the wheel slightly */}
        <div className="text-center max-w-lg mx-auto pb-20 relative z-20 -mt-[100px] px-6">
          <p className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase mb-4">
            The Art of Sonic and Visual
          </p>
          
          <h1 className="text-6xl text-gray-900 font-serif-italic mb-8 transition-opacity duration-500">
            {storyState.isLoading ? (
               <span className="opacity-50">Dreaming...</span>
            ) : (
              storyState.title
            )}
          </h1>
          
          <div className="relative min-h-[120px]">
            {storyState.isLoading && (
               <div className="absolute inset-0 flex items-center justify-center">
                 <RefreshCcw className="w-6 h-6 text-gray-400 animate-spin" />
               </div>
            )}
            <p className={`text-gray-500 text-sm leading-relaxed transition-opacity duration-700 ${storyState.isLoading ? 'opacity-0' : 'opacity-100'}`}>
              {storyState.content}
            </p>
          </div>

          {/* Input Section - Integrated minimally */}
          <div className="mt-12 flex justify-center w-full">
            <div className="relative w-full max-w-[300px] border-b border-gray-300 focus-within:border-orange-500 transition-colors">
              <input 
                type="text" 
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Suggest a new theme..."
                disabled={storyState.isLoading}
                className="w-full bg-transparent py-2 px-0 text-center text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
              />
              <button 
                onClick={handleGenerate}
                disabled={storyState.isLoading}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors"
              >
                {storyState.isLoading ? <Sparkles size={14} className="animate-pulse"/> : <SendHorizontal size={14} />}
              </button>
            </div>
          </div>
          
        </div>

      </div>

      {/* Content Sections */}
      <div className="relative z-10 w-full">
        {CONTENT_SECTIONS.map((section) => (
          <section 
            key={section.id} 
            id={`section-${section.id}`}
            className={`min-h-screen flex flex-col items-center justify-center px-6 ${section.themeClass}`}
          >
            <div className="max-w-2xl text-center">
              <span className="text-xs font-bold opacity-40 tracking-[0.3em] uppercase mb-6 block">
                {section.subtitle}
              </span>
              <h2 className="text-5xl md:text-7xl font-serif-italic mb-10 leading-tight">
                {section.title}
              </h2>
              <p className="text-lg md:text-xl leading-relaxed opacity-80 font-light">
                {section.content}
              </p>
            </div>
          </section>
        ))}
      </div>

    </div>
  );
};

export default App;