import React from 'react';
import { Tier } from '../types';
import { Crown, Briefcase, Users, User } from 'lucide-react';

interface TierCardProps {
  tier: Tier;
  index: number;
}

export const TierCard: React.FC<TierCardProps> = ({ tier, index }) => {
  const getIcon = () => {
    switch (tier.icon) {
      case 'crown': return <Crown size={32} className="text-hex-gold animate-pulse" />;
      case 'briefcase': return <Briefcase size={32} className="text-gray-300" />;
      case 'users': return <Users size={32} className="text-amber-600" />;
      default: return <User size={32} className="text-gray-500" />;
    }
  };

  const isHighlighted = index === 0;

  return (
    <div className={`
      relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-2
      ${isHighlighted ? 'bg-gradient-to-b from-hex-darker to-hex-gold/10 border-2 border-hex-gold shadow-glow' : 'bg-hex-darker border border-gray-700 hover:border-hex-gold/50'}
    `}>
      {isHighlighted && (
        <div className="absolute top-0 right-0 bg-hex-gold text-hex-dark text-xs font-bold px-3 py-1 rounded-bl-lg">
          最高权益
        </div>
      )}
      
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-full bg-hex-dark border ${isHighlighted ? 'border-hex-gold' : 'border-gray-700'}`}>
          {getIcon()}
        </div>
        <div>
          <h3 className={`text-xl font-bold ${isHighlighted ? 'text-hex-gold' : 'text-white'}`}>{tier.name}</h3>
          <p className="text-sm text-gray-400">{tier.range}</p>
        </div>
      </div>

      <div className="mb-4">
        <div className="text-sm text-gray-400 mb-1">额外获赠</div>
        <div className="text-3xl font-extrabold text-hex-gold">{tier.bonus}</div>
      </div>

      <p className="text-sm text-gray-400 border-t border-gray-700 pt-4 leading-relaxed">
        {tier.description}
      </p>
    </div>
  );
};