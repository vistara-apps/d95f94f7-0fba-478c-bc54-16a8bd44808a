# AI Companion & Co-creation - Base Mini App

Your personalized AI co-pilot for collaborative content on Farcaster and Base.

## Features

- 🤖 **Personalized AI Companions** - Unique AI personalities with onchain reputation
- ✨ **Co-creation Flows** - Generate text and images collaboratively with AI
- 🎯 **Frame-Based Interactions** - Viral distribution through Farcaster Frames
- 🏆 **Onchain Reputation** - Verifiable reputation system on Base
- 💎 **Token-Gated Access** - Premium features unlocked via token holdings
- 🚀 **Gasless Transactions** - Powered by Coinbase Paymaster

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2 on Ethereum)
- **Wallet Integration**: OnchainKit
- **Social Integration**: Farcaster MiniKit
- **Styling**: Tailwind CSS with Coinbase theme
- **TypeScript**: Full type safety

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```
   Then add your API keys.

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── components/       # React components
│   ├── layout.tsx        # Root layout with providers
│   ├── page.tsx          # Main page
│   └── globals.css       # Global styles
├── public/
│   └── .well-known/
│       └── farcaster.json # Farcaster manifest
└── package.json
```

## Key Components

- **AICompanionCard**: Displays AI companion stats and reputation
- **ContentCreator**: Interface for co-creating content with AI
- **ReputationDisplay**: Shows onchain reputation metrics
- **ConnectWalletButton**: Wallet connection via OnchainKit

## Deployment

This app is optimized for deployment on Vercel:

```bash
npm run build
```

## Learn More

- [Base Documentation](https://docs.base.org)
- [OnchainKit Documentation](https://onchainkit.xyz)
- [Farcaster MiniKit](https://miniapps.farcaster.xyz)

## License

MIT
