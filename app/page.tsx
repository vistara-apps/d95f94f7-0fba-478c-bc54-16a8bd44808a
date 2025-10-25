'use client';

import { useEffect, useState } from 'react';
import { Sparkles, Zap, Users, TrendingUp } from 'lucide-react';
import { AICompanionCard } from './components/AICompanionCard';
import { ContentCreator } from './components/ContentCreator';
import { ReputationDisplay } from './components/ReputationDisplay';
import { ConnectWalletButton } from './components/ConnectWalletButton';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'create' | 'reputation'>('dashboard');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <Sparkles className="w-12 h-12 text-accent" />
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-border bg-surface/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-fg">AI Companion</h1>
                <p className="text-xs text-muted">Co-create on Base</p>
              </div>
            </div>
            <ConnectWalletButton />
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="border-b border-border bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-2">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'dashboard'
                  ? 'bg-accent text-white'
                  : 'text-muted hover:text-fg hover:bg-surface'
              }`}
            >
              <Zap className="w-4 h-4" />
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('create')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'create'
                  ? 'bg-accent text-white'
                  : 'text-muted hover:text-fg hover:bg-surface'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Co-create
            </button>
            <button
              onClick={() => setActiveTab('reputation')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'reputation'
                  ? 'bg-accent text-white'
                  : 'text-muted hover:text-fg hover:bg-surface'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              Reputation
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-4 py-8">
              <h2 className="text-4xl font-bold text-fg">
                Your Personalized AI Co-pilot
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Create, collaborate, and build onchain reputation with your AI companion on Farcaster and Base
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface rounded-lg p-6 border border-border shadow-card">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-fg mb-2">
                  Viral Frame Integration
                </h3>
                <p className="text-sm text-muted">
                  Share AI-generated content directly to Farcaster with interactive Frames
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border shadow-card">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-fg mb-2">
                  Community Driven
                </h3>
                <p className="text-sm text-muted">
                  Collaborate with others and build together in a social-native environment
                </p>
              </div>

              <div className="bg-surface rounded-lg p-6 border border-border shadow-card">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-fg mb-2">
                  Onchain Reputation
                </h3>
                <p className="text-sm text-muted">
                  Build verifiable reputation and earn rewards for valuable contributions
                </p>
              </div>
            </div>

            {/* AI Companion Card */}
            <AICompanionCard />
          </div>
        )}

        {activeTab === 'create' && <ContentCreator />}
        {activeTab === 'reputation' && <ReputationDisplay />}
      </div>
    </main>
  );
}
