'use client';

import { useState } from 'react';
import { Wallet } from 'lucide-react';

export function ConnectWalletButton() {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    // In production, this would use OnchainKit's ConnectWallet component
    setIsConnected(!isConnected);
  };

  return (
    <button
      onClick={handleConnect}
      className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200"
    >
      <Wallet className="w-4 h-4" />
      {isConnected ? 'Connected' : 'Connect Wallet'}
    </button>
  );
}
