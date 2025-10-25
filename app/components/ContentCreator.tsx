'use client';

import { useState } from 'react';
import { Send, Sparkles, Image, Type, Loader2 } from 'lucide-react';

export function ContentCreator() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [contentType, setContentType] = useState<'text' | 'image'>('text');
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      if (contentType === 'text') {
        setGeneratedContent(
          `🤖 AI Generated Content:\n\n"${prompt}"\n\nThis is a sample response from your AI companion. In production, this would connect to an actual AI model API to generate personalized content based on your prompt and your AI companion's learned preferences.`
        );
      } else {
        setGeneratedContent('image-placeholder');
      }
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-fg">Co-create with AI</h2>
        <p className="text-muted">Generate content collaboratively with your AI companion</p>
      </div>

      {/* Content Type Selector */}
      <div className="flex gap-2 justify-center">
        <button
          onClick={() => setContentType('text')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            contentType === 'text'
              ? 'bg-accent text-white'
              : 'bg-surface text-muted hover:text-fg border border-border'
          }`}
        >
          <Type className="w-4 h-4" />
          Text
        </button>
        <button
          onClick={() => setContentType('image')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            contentType === 'image'
              ? 'bg-accent text-white'
              : 'bg-surface text-muted hover:text-fg border border-border'
          }`}
        >
          <Image className="w-4 h-4" />
          Image
        </button>
      </div>

      {/* Input Area */}
      <div className="bg-surface rounded-lg border border-border shadow-card p-6 space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-fg">Your Prompt</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={
              contentType === 'text'
                ? 'Write a Farcaster cast about AI and decentralization...'
                : 'Generate an image of a futuristic AI companion...'
            }
            className="w-full h-32 bg-bg border border-border rounded-lg px-4 py-3 text-fg placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent resize-none"
          />
        </div>

        <button
          onClick={handleGenerate}
          disabled={!prompt.trim() || isGenerating}
          className="w-full bg-accent hover:bg-accent/90 disabled:bg-accent/50 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Generate with AI
              <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </div>

      {/* Generated Content */}
      {generatedContent && (
        <div className="bg-surface rounded-lg border border-border shadow-card p-6 space-y-4 animate-in fade-in duration-500">
          <div className="flex items-center gap-2 text-accent">
            <Sparkles className="w-5 h-5" />
            <span className="font-medium">AI Generated Content</span>
          </div>
          
          {contentType === 'text' ? (
            <div className="bg-bg rounded-lg p-4 text-fg whitespace-pre-wrap">
              {generatedContent}
            </div>
          ) : (
            <div className="bg-bg rounded-lg p-4 aspect-video flex items-center justify-center">
              <div className="text-center space-y-2">
                <Image className="w-12 h-12 text-muted mx-auto" />
                <p className="text-sm text-muted">Image generation placeholder</p>
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <button className="flex-1 bg-accent hover:bg-accent/90 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200">
              Share to Farcaster
            </button>
            <button className="flex-1 bg-surface hover:bg-bg text-fg font-medium py-2 px-4 rounded-lg border border-border transition-all duration-200">
              Refine Output
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
