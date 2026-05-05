'use client';
import { cn } from '@/lib/utils';
import { motion, SpringOptions, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';
import React from 'react';

export type AnimatedNumberProps = {
  value: number;
  className?: string;
  springOptions?: SpringOptions;
  as?: 'div' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export function AnimatedNumber({
  value,
  className,
  springOptions,
  as = 'span',
}: AnimatedNumberProps) {
  const spring = useSpring(value, springOptions);
  const [displayValue, setDisplayValue] = useState(value.toLocaleString());
  
  useEffect(() => {
    spring.set(value);
    
    const unsubscribe = spring.onChange((latest) => {
      setDisplayValue(Math.round(latest).toLocaleString());
    });
    
    return () => unsubscribe();
  }, [spring, value]);

  // Use a simple approach with explicit component mapping
  const Component = as === 'div' ? motion.div :
                   as === 'p' ? motion.p :
                   as === 'h1' ? motion.h1 :
                   as === 'h2' ? motion.h2 :
                   as === 'h3' ? motion.h3 :
                   as === 'h4' ? motion.h4 :
                   as === 'h5' ? motion.h5 :
                   as === 'h6' ? motion.h6 :
                   motion.span;

  return (
    <Component className={cn('tabular-nums', className)}>
      {displayValue}
    </Component>
  );
}