# NeonByte Capital AI - Advanced Trading Terminal

NeonByte Capital AI is a high-performance, AI-driven financial intelligence and trading platform. It provides institutional-grade market insights, real-time data visualization, and advanced execution tools for Forex and Cryptocurrency markets.

## ✨ Key Features

- **Advanced Trading Terminal**: A high-density dashboard with live technical charts.
- **AI-Powered Market Pulse**: High-frequency intelligence feed with impact analysis.
- **Real-Time L2 Order Book**: Visualization of market depth and spread transparency.
- **Global Ticker Tape**: Live price action for major currency pairs and crypto.
- **Infrastructure Transparency**: Real-time stats on execution speed and network uptime.
- **Premium Aesthetics**: A state-of-the-art neon design system with glassmorphism.

## 🚀 Technical Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 + Framer Motion
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js v5
- **Charts**: TradingView Advanced Widget Integration

## 🛠️ Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Environment Setup**:
   Create a `.env.local` file with your database and authentication secrets:
   ```env
   DATABASE_URL="your_postgresql_url"
   NEXTAUTH_SECRET="your_secret"
   ```

3. **Database Migration**:
   ```bash
   npx prisma generate
   ```

4. **Run Development Server**:
   ```bash
   npm run dev
   ```

---

## 🔒 License

Proprietary. All rights reserved by NeonByte Capital AI.
