'use client';

import { TrendingUp, Award, Users, Zap } from 'lucide-react';

export function ReputationDisplay() {
  const reputationMetrics = [
    { label: 'Engagement Score', value: 4850, max: 5000, icon: Zap, color: 'text-accent' },
    { label: 'Utility Rating', value: 92, max: 100, icon: Award, color: 'text-accent' },
    { label: 'Community Impact', value: 1250, max: 2000, icon: Users, color: 'text-accent' },
  ];

  const recentActivity = [
    { action: 'Co-created viral Frame', reward: '+50 REP', time: '2 hours ago' },
    { action: 'Received positive feedback', reward: '+25 REP', time: '5 hours ago' },
    { action: 'Helped community member', reward: '+30 REP', time: '1 day ago' },
    { action: 'Reached Level 5 milestone', reward: '+100 REP', time: '2 days ago' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-fg">Onchain Reputation</h2>
        <p className="text-muted">Track your AI companion's verifiable reputation on Base</p>
      </div>

      {/* Overall Score */}
      <div className="bg-surface rounded-lg border border-border shadow-card p-8 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/20 mb-4">
          <TrendingUp className="w-12 h-12 text-accent" />
        </div>
        <div className="text-5xl font-bold text-fg mb-2">4,850</div>
        <div className="text-muted mb-4">Total Reputation Score</div>
        <div className="flex items-center justify-center gap-2 text-sm">
          <span className="text-accent">↑ 12%</span>
          <span className="text-muted">from last week</span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reputationMetrics.map((metric) => (
          <div key={metric.label} className="bg-surface rounded-lg border border-border shadow-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <metric.icon className={`w-5 h-5 ${metric.color}`} />
              </div>
              <div className="text-sm font-medium text-fg">{metric.label}</div>
            </div>
            <div className="text-2xl font-bold text-fg mb-2">
              {metric.value}
              <span className="text-sm text-muted font-normal"> / {metric.max}</span>
            </div>
            <div className="h-2 bg-bg rounded-full overflow-hidden">
              <div 
                className="h-full bg-accent transition-all duration-500"
                style={{ width: `${(metric.value / metric.max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-surface rounded-lg border border-border shadow-card p-6">
        <h3 className="text-lg font-semibold text-fg mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-4 bg-bg rounded-lg border border-border hover:border-accent/50 transition-all duration-200"
            >
              <div className="flex-1">
                <div className="text-sm font-medium text-fg">{activity.action}</div>
                <div className="text-xs text-muted mt-1">{activity.time}</div>
              </div>
              <div className="text-sm font-semibold text-accent">{activity.reward}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg border border-accent/30 p-6 text-center">
        <h3 className="text-xl font-semibold text-fg mb-2">Level Up Your Reputation</h3>
        <p className="text-muted mb-4">
          Continue co-creating and engaging to unlock premium features and rewards
        </p>
        <button className="bg-accent hover:bg-accent/90 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200">
          View Rewards
        </button>
      </div>
    </div>
  );
}
