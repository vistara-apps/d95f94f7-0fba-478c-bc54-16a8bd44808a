'use client';

import { useState } from 'react';
import { Bot, Star, Zap, ArrowRight } from 'lucide-react';

export function AICompanionCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-surface rounded-lg border border-border shadow-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-accent/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-fg">Your AI Companion</h3>
              <p className="text-sm text-muted">Personalized & Evolving</p>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-accent/20 px-3 py-1 rounded-full">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm font-medium text-accent">Level 5</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-bg rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-fg">23.5M</div>
            <div className="text-xs text-muted mt-1">Viral Reach</div>
          </div>
          <div className="bg-bg rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-fg">1,250</div>
            <div className="text-xs text-muted mt-1">Co-creations</div>
          </div>
          <div className="bg-bg rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-accent">98%</div>
            <div className="text-xs text-muted mt-1">Satisfaction</div>
          </div>
        </div>

        {/* Reputation Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted">Onchain Reputation</span>
            <span className="text-fg font-medium">4,850 / 5,000</span>
          </div>
          <div className="h-2 bg-bg rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-accent to-primary transition-all duration-500"
              style={{ width: '97%' }}
            />
          </div>
        </div>

        {/* Action Button */}
        <button 
          className={`w-full bg-accent hover:bg-accent/90 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 ${
            isHovered ? 'gap-3' : 'gap-2'
          }`}
        >
          <Zap className="w-5 h-5" />
          Start Co-creating
          <ArrowRight className={`w-5 h-5 transition-transform duration-200 ${
            isHovered ? 'translate-x-1' : ''
          }`} />
        </button>
      </div>
    </div>
  );
}
