import { component$ } from "@builder.io/qwik";

// Símbolo de Elegguá (Orisha de los caminos)
export const ElegguaSymbol = component$(() => {
  return (
    <svg viewBox="0 0 100 100" class="w-8 h-8 text-red-400 opacity-60">
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M25 50 L75 50 M50 25 L50 75" stroke="currentColor" stroke-width="3"/>
      <circle cx="35" cy="35" r="3" fill="currentColor"/>
      <circle cx="65" cy="35" r="3" fill="currentColor"/>
      <circle cx="35" cy="65" r="3" fill="currentColor"/>
      <circle cx="65" cy="65" r="3" fill="currentColor"/>
      <path d="M40 60 Q50 70 60 60" stroke="currentColor" stroke-width="2" fill="none"/>
    </svg>
  );
});

// Símbolo de Yemayá (Orisha del mar)
export const YemayaSymbol = component$(() => {
  return (
    <svg viewBox="0 0 100 100" class="w-8 h-8 text-blue-400 opacity-60">
      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M20 50 Q30 40 40 50 Q50 60 60 50 Q70 40 80 50" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M25 60 Q35 50 45 60 Q55 70 65 60 Q75 50 85 60" stroke="currentColor" stroke-width="2" fill="none"/>
      <circle cx="50" cy="35" r="8" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M45 30 L55 30 M45 40 L55 40" stroke="currentColor" stroke-width="1"/>
    </svg>
  );
});

// Símbolo de Changó (Orisha del fuego y la guerra)
export const ChangoSymbol = component$(() => {
  return (
    <svg viewBox="0 0 100 100" class="w-8 h-8 text-red-500 opacity-60">
      <path d="M50 20 L60 40 L80 35 L65 55 L75 75 L50 65 L25 75 L35 55 L20 35 L40 40 Z" 
            fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M35 45 L50 50 L65 45" stroke="currentColor" stroke-width="2"/>
      <path d="M40 55 L50 60 L60 55" stroke="currentColor" stroke-width="2"/>
      <circle cx="50" cy="50" r="3" fill="currentColor"/>
    </svg>
  );
});

// Símbolo de Oshún (Orisha del amor y la dulzura)
export const OshunSymbol = component$(() => {
  return (
    <svg viewBox="0 0 100 100" class="w-8 h-8 text-yellow-400 opacity-60">
      <path d="M50 20 Q35 35 35 50 Q35 65 50 80 Q65 65 65 50 Q65 35 50 20 Z" 
            fill="none" stroke="currentColor" stroke-width="2"/>
      <circle cx="42" cy="45" r="2" fill="currentColor"/>
      <circle cx="58" cy="45" r="2" fill="currentColor"/>
      <path d="M45 55 Q50 60 55 55" stroke="currentColor" stroke-width="2" fill="none"/>
      <path d="M30 30 Q50 25 70 30" stroke="currentColor" stroke-width="1" fill="none"/>
      <path d="M25 40 Q50 35 75 40" stroke="currentColor" stroke-width="1" fill="none"/>
    </svg>
  );
});

// Firma de Palo Mayombe (Mpungo)
export const PaloMayombeSymbol = component$(() => {
  return (
    <svg viewBox="0 0 100 100" class="w-8 h-8 text-white opacity-50">
      <path d="M50 10 L50 90 M20 30 L80 30 M30 70 L70 70" stroke="currentColor" stroke-width="2"/>
      <circle cx="30" cy="30" r="4" fill="none" stroke="currentColor" stroke-width="1"/>
      <circle cx="70" cy="30" r="4" fill="none" stroke="currentColor" stroke-width="1"/>
      <circle cx="30" cy="70" r="4" fill="none" stroke="currentColor" stroke-width="1"/>
      <circle cx="70" cy="70" r="4" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M40 20 L60 20 M40 80 L60 80" stroke="currentColor" stroke-width="3"/>
      <path d="M35 50 L65 50" stroke="currentColor" stroke-width="3"/>
    </svg>
  );
});

// Cruz de Palo Mayombe
export const PaloCross = component$(() => {
  return (
    <svg viewBox="0 0 100 100" class="w-8 h-8 text-red-300 opacity-50">
      <path d="M50 15 L50 85 M25 50 L75 50" stroke="currentColor" stroke-width="4"/>
      <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M42 42 L58 58 M58 42 L42 58" stroke="currentColor" stroke-width="1"/>
      <circle cx="50" cy="25" r="3" fill="currentColor"/>
      <circle cx="50" cy="75" r="3" fill="currentColor"/>
      <circle cx="35" cy="50" r="3" fill="currentColor"/>
      <circle cx="65" cy="50" r="3" fill="currentColor"/>
    </svg>
  );
});

// Caldero de Palo Mayombe
export const PaloCaldron = component$(() => {
  return (
    <svg viewBox="0 0 100 100" class="w-8 h-8 text-gray-400 opacity-50">
      <ellipse cx="50" cy="70" rx="25" ry="15" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M25 70 L25 45 Q25 35 35 35 L65 35 Q75 35 75 45 L75 70" 
            fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M20 55 L15 50 M80 55 L85 50" stroke="currentColor" stroke-width="2"/>
      <path d="M45 45 L45 60 M50 45 L50 60 M55 45 L55 60" stroke="currentColor" stroke-width="1"/>
      <circle cx="40" cy="50" r="1" fill="currentColor"/>
      <circle cx="60" cy="55" r="1" fill="currentColor"/>
    </svg>
  );
});

// Veve de Vudú
export const VuduVeve = component$(() => {
  return (
    <svg viewBox="0 0 100 100" class="w-8 h-8 text-purple-400 opacity-50">
      <path d="M50 10 L50 90" stroke="currentColor" stroke-width="2"/>
      <path d="M30 30 L70 30 M35 50 L65 50 M30 70 L70 70" stroke="currentColor" stroke-width="1"/>
      <circle cx="50" cy="30" r="5" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M40 40 L50 50 L60 40" stroke="currentColor" stroke-width="1" fill="none"/>
      <path d="M40 60 L50 50 L60 60" stroke="currentColor" stroke-width="1" fill="none"/>
      <circle cx="35" cy="70" r="2" fill="currentColor"/>
      <circle cx="65" cy="70" r="2" fill="currentColor"/>
      <path d="M45 80 Q50 85 55 80" stroke="currentColor" stroke-width="1" fill="none"/>
    </svg>
  );
});

// Símbolo de protección
export const ProtectionSymbol = component$(() => {
  return (
    <svg viewBox="0 0 100 100" class="w-8 h-8 text-yellow-300 opacity-50">
      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="2"/>
      <path d="M50 20 L60 40 L80 40 L66 54 L72 74 L50 62 L28 74 L34 54 L20 40 L40 40 Z" 
            fill="none" stroke="currentColor" stroke-width="1"/>
      <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" stroke-width="1"/>
      <path d="M42 42 L58 58 M58 42 L42 58" stroke="currentColor" stroke-width="1"/>
    </svg>
  );
});

// Componente contenedor para distribuir símbolos
export const AfrocubanSymbolsContainer = component$<{position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'}>((props) => {
  const symbols = [
    ElegguaSymbol,
    YemayaSymbol, 
    ChangoSymbol,
    OshunSymbol,
    PaloMayombeSymbol,
    PaloCross,
    PaloCaldron,
    VuduVeve,
    ProtectionSymbol
  ];
  
  const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  const Symbol = randomSymbol;
  
  const positionClasses = {
    'top-left': 'absolute top-4 left-4',
    'top-right': 'absolute top-4 right-4', 
    'bottom-left': 'absolute bottom-4 left-4',
    'bottom-right': 'absolute bottom-4 right-4',
    'center': 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
  };
  
  return (
    <div class={`${positionClasses[props.position]} pointer-events-none z-0`}>
      <Symbol />
    </div>
  );
});