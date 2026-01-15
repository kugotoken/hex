import React, { useState, useEffect } from 'react';
import { HexLogo } from './components/HexLogo';
import { DistributionChart } from './components/DistributionChart';
import { TierCard } from './components/TierCard';
import { Tier } from './types';
import { ShieldCheck, Lock, Users, ArrowRight, Send, AlertTriangle, TrendingUp, Info } from 'lucide-react';

const tiers: Tier[] = [
  {
    name: "头等舱",
    range: "前 5 BNB 参与者",
    bonus: "+15%",
    description: "最早期的核心支持者，享受最高比例的社区贡献筹码空投。",
    icon: 'crown',
    color: 'text-hex-gold'
  },
  {
    name: "商务舱",
    range: "第 6-10 BNB 参与者",
    bonus: "+10%",
    description: "项目早期的重要推动力量，获赠显著的贡献筹码。",
    icon: 'briefcase',
    color: 'text-gray-300'
  },
  {
    name: "经济舱",
    range: "第 11-15 BNB 参与者",
    bonus: "+5%",
    description: "社区的中坚力量，享受基础贡献奖励。",
    icon: 'users',
    color: 'text-amber-700'
  },
  {
    name: "标准舱",
    range: "第 16-20 BNB 参与者",
    bonus: "0%",
    description: "按原始比例分配代币，公平公正。",
    icon: 'user',
    color: 'text-gray-500'
  }
];

const App: React.FC = () => {
  // Mock progress state for visual appeal
  const [raised, setRaised] = useState(12.4);
  
  useEffect(() => {
    // Subtle animation for the raised amount
    const interval = setInterval(() => {
      setRaised(prev => {
        if (prev >= 14.8) return 12.4;
        return prev + 0.01;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const progressPercentage = (raised / 20) * 100;

  return (
    <div className="min-h-screen font-sans text-gray-100 bg-hex-dark selection:bg-hex-gold selection:text-hex-dark overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 hex-bg-pattern pointer-events-none z-0"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-hex-dark/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HexLogo width={32} height={32} />
            <span className="font-bold text-xl tracking-wider text-white">$HEX</span>
          </div>
          <div className="flex items-center gap-4">
             <a href="#participate" className="hidden sm:inline-block px-5 py-2 bg-hex-gold text-hex-dark font-bold rounded-full hover:bg-hex-light transition-colors text-sm">
              立即参与
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 container mx-auto flex flex-col items-center text-center z-10">
        <div className="animate-fade-in-up mb-8 relative">
            <div className="absolute inset-0 bg-hex-gold/20 blur-3xl rounded-full"></div>
            <HexLogo width={180} height={180} className="relative drop-shadow-2xl" />
        </div>
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-hex-gold/10 border border-hex-gold/30 text-hex-gold text-sm font-semibold mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hex-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-hex-gold"></span>
          </span>
          首发邀约开启中
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          <span className="text-white">基于 four.meme 的</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-hex-gold via-hex-light to-hex-gold">全新 ＄HEX 生态</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
          打破“开盘即巅峰”魔咒，构建长效共识。加入 $HEX 原始份额募集，成为共识之巅的原始股东。
        </p>

        {/* Progress Bar */}
        <div className="w-full max-w-md bg-gray-800 rounded-full h-6 mb-3 relative overflow-hidden border border-gray-700">
           <div 
             className="bg-gradient-to-r from-hex-accent to-hex-gold h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2"
             style={{ width: `${progressPercentage}%` }}
           >
             <span className="text-[10px] font-bold text-hex-dark animate-pulse">Running</span>
           </div>
        </div>
        <div className="flex justify-between w-full max-w-md text-sm font-mono text-hex-gold mb-10">
           <span>已募集: {raised.toFixed(2)} BNB</span>
           <span>目标: 20 BNB</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a href="#participate" className="px-8 py-4 bg-hex-gold text-hex-dark font-bold text-lg rounded-xl hover:bg-hex-light hover:shadow-glow transition-all flex items-center justify-center gap-2">
            获取原始份额 <ArrowRight size={20} />
          </a>
          <a href="https://t.me/HexaCoin_HEX" target="_blank" rel="noreferrer" className="px-8 py-4 bg-hex-darker border border-gray-600 text-white font-bold text-lg rounded-xl hover:border-hex-gold hover:text-hex-gold transition-all flex items-center justify-center gap-2">
            <Send size={20} /> 加入 Telegram
          </a>
        </div>
      </header>

      {/* Vision Section */}
      <section className="py-20 bg-hex-darker border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <TrendingUp className="text-hex-gold" size={32} />
                <span>项目愿景</span>
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-hex-gold">$HEX</strong> 不仅仅是一个代币，它是基于 four.meme 协议深度定制的社区图腾。
                </p>
                <p>
                  我们通过<span className="text-white font-semibold">“初始高溢价池+阶梯贡献激励”</span>的底层逻辑，旨在打破 Meme 币“开盘即巅峰”的魔咒，构建一个长效、高粘性的原始股东矩阵。
                </p>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-hex-dark p-6 rounded-lg border border-gray-800 text-center hover:border-hex-gold/30 transition-colors">
                    <div className="text-4xl font-bold text-hex-gold mb-2">20</div>
                    <div className="text-sm text-gray-400">BNB 硬顶</div>
                 </div>
                 <div className="bg-hex-dark p-6 rounded-lg border border-gray-800 text-center hover:border-hex-gold/30 transition-colors">
                    <div className="text-4xl font-bold text-hex-gold mb-2">75%</div>
                    <div className="text-sm text-gray-400">初始流动性</div>
                 </div>
                 <div className="bg-hex-dark p-6 rounded-lg border border-gray-800 text-center hover:border-hex-gold/30 transition-colors">
                    <div className="text-4xl font-bold text-hex-gold mb-2">0</div>
                    <div className="text-sm text-gray-400">RUG 风险</div>
                 </div>
                 <div className="bg-hex-dark p-6 rounded-lg border border-gray-800 text-center hover:border-hex-gold/30 transition-colors">
                    <div className="text-4xl font-bold text-hex-gold mb-2">20+</div>
                    <div className="text-sm text-gray-400">核心决策席位</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Allocation Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">募资方案与资金分配</h2>
          <p className="text-gray-400">本募资采取最高透明度原则，资金流向全透明</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
           <DistributionChart />
           <div className="space-y-6">
              <div className="bg-hex-darker p-6 rounded-xl border border-hex-gold/20 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-hex-gold"></div>
                <h3 className="text-xl font-bold text-white mb-2 flex justify-between">
                  <span>初始流动性池 (LP)</span>
                  <span className="text-hex-gold">15 BNB (75%)</span>
                </h3>
                <p className="text-gray-400 text-sm">
                  100% 用于 four.meme 初始流动性池。打造深厚“护城河”底池，有效抵抗大户抛压，确保二级市场交易平滑。
                </p>
              </div>

              <div className="bg-hex-darker p-6 rounded-xl border border-gray-700 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-hex-accent"></div>
                <h3 className="text-xl font-bold text-white mb-2 flex justify-between">
                  <span>增长储备基金</span>
                  <span className="text-hex-accent">5 BNB (25%)</span>
                </h3>
                <p className="text-gray-400 text-sm">
                  用于项目早期的市场推广、社区建设及突发情况应对，保障项目可持续发展。
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* Tiers Section */}
      <section className="py-20 bg-gradient-to-b from-hex-darker to-hex-dark relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">独家权益：阶梯激励</h2>
            <p className="text-gray-400">越早参与，权重越高。额外奖励来自团队份额，<span className="text-hex-gold">不稀释底池</span>。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => (
              <TierCard key={index} tier={tier} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">安全背书与风控承诺</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-hex-darker/50 p-8 rounded-2xl border border-gray-800 text-center hover:border-green-500/50 transition-colors group">
            <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
              <ShieldCheck className="text-green-500" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">安全承诺</h3>
            <p className="text-gray-400 text-sm">
              开盘即 <span className="text-white font-semibold">丢弃权限 (Renounce)</span>，LP 权限自动锁定，彻底杜绝 RUG 风险。
            </p>
          </div>

          <div className="bg-hex-darker/50 p-8 rounded-2xl border border-gray-800 text-center hover:border-hex-gold/50 transition-colors group">
            <div className="w-16 h-16 mx-auto bg-hex-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-hex-gold/20 transition-colors">
              <Lock className="text-hex-gold" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">软顶保护机制</h3>
            <p className="text-gray-400 text-sm">
              若未募集满 15 BNB，判定启动失败，<span className="text-white font-semibold">所有款项原路全额退回</span>，确保零风险。
            </p>
          </div>

          <div className="bg-hex-darker/50 p-8 rounded-2xl border border-gray-800 text-center hover:border-blue-500/50 transition-colors group">
            <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
              <Users className="text-blue-500" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">透明治理</h3>
            <p className="text-gray-400 text-sm">
              20 位原始股东受邀进入 <span className="text-white font-semibold">$HEX 核心决策委员会</span>，同步重大决策。
            </p>
          </div>
        </div>
      </section>

      {/* Participation Section */}
      <section id="participate" className="py-20 bg-hex-gold text-hex-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-10">
           <HexLogo width={400} height={400} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold mb-6 text-hex-darker">立即加入募集</h2>
              <p className="text-hex-darker/80 text-lg mb-8 font-medium">
                扫描二维码或加入官方电报群，获取最新的募集地址。不要错过成为头等舱乘客的机会。
              </p>
              
              <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-4 bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                    <Info size={24} className="text-hex-darker" />
                    <div className="text-hex-darker font-bold">请认准官方唯一发布渠道</div>
                 </div>
                 
                 <a href="https://t.me/HexaCoin_HEX" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-hex-darker text-white font-bold rounded-xl shadow-xl hover:bg-black transition-all transform hover:scale-105">
                   <Send size={24} />
                   进入官方 TG 频道
                 </a>
              </div>
            </div>

            <div className="lg:w-1/3 flex justify-center">
              <div className="bg-white p-4 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="w-64 h-64 bg-gray-200 rounded-xl overflow-hidden relative">
                   {/* Placeholder for QR Code */}
                   <img 
                     src="/1.png" 
                     alt="Join QR Code" 
                     className="w-full h-full object-cover opacity-80"
                   />
                   <div className="absolute inset-0 flex items-center justify-center bg-hex-dark/10">
                      <div className="bg-white p-2 rounded-full">
                         <HexLogo width={40} height={40} />
                      </div>
                   </div>
                </div>
                <div className="text-center mt-4 font-bold text-hex-darker">打开币安扫描支付参与</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-center text-gray-500 text-sm">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center gap-2 mb-4 opacity-50">
             <HexLogo width={24} height={24} />
             <span className="font-bold">$HEX</span>
          </div>
          <p>© 2026 HexaCoin. All rights reserved.</p>
          <p className="mt-2 text-xs text-gray-700 max-w-lg mx-auto">
            Disclaimer: Cryptocurrency investments carry high risks. Please do your own research (DYOR) before participating. This page is for informational purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
