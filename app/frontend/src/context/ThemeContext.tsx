// ThemeProvider.tsx
"use client";

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction
} from "react";
import LocalStorageHelper from "@/utils/LocalStorageHelper";

// -------------------- Tipos --------------------
interface ThemeColors {
  color0: string;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;

  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;

  onColor1: string;
  onColor2: string;
  onColor3: string;
  onColor4: string;
  onColor5: string;

  onColor6: string;
  onColor7: string;
  onColor8: string;
  onColor9: string;
  onColor10: string;
}

interface Theme {
  name: "light" | "dark";
  colors: ThemeColors;
}

interface Themes {
  light: Theme;
  dark: Theme;
}

type PaletteKey = string;

interface Palette {
  name: PaletteKey;
  label?: string;
  // Overrides específicos para modo claro e modo escuro
  overridesLight?: Partial<ThemeColors>;
  overridesDark?: Partial<ThemeColors>;
  // descrição opcional
  description?: string;
}

interface ThemeContextType {
  currentThemeName: "light" | "dark";
  theme: Theme; // tema efetivo (base + overrides)
  setCurrentThemeName: Dispatch<SetStateAction<"light" | "dark">>;
  toggleTheme: () => void;

  paletteName: PaletteKey;
  setPaletteName: (name: PaletteKey) => void;
  palettes: Palette[];
  availablePaletteNames: string[];
}

// -------------------- Storage --------------------
const storage = new LocalStorageHelper();
const LOCAL_STORAGE_THEME_KEY = "app-theme-name";
const LOCAL_STORAGE_PALETTE_KEY = "app-palette-name";

// -------------------- Temas base --------------------
const lightTheme: Theme = {
  name: "light",
  colors: {
    color0: "transparent",
    color1: "#FFFFFF",
    color2: "#F2F2F7",
    color3: "#E5E5EA",
    color4: "#D1D1D6",
    color5: "#1C1C1E",

    color6: "",
    color7: "",
    color8: "",
    color9: "",
    color10: "",

    onColor1: "#000000",
    onColor2: "#1C1C1E",
    onColor3: "#000000",
    onColor4: "#000000",
    onColor5: "#FFFFFF",

    onColor6: "#0D0D0D",
    onColor7: "#0D0D0D",
    onColor8: "",
    onColor9: "",
    onColor10: "#FFFFFF"
  }
};

const darkTheme: Theme = {
  name: "dark",
  colors: {
    color0: "transparent",
    color1: "#000000",
    color2: "#1C1C1E",
    color3: "#2C2C2E",
    color4: "#3A3A3C",
    color5: "#F2F2F7",

    color6: "",
    color7: "",
    color8: "",
    color9: "",
    color10: "",

    onColor1: "#F2F2F7",
    onColor2: "#C7C7CC",
    onColor3: "#FFFFFF",
    onColor4: "#FFFFFF",
    onColor5: "#000000",

    onColor6: "#0D0D0D",
    onColor7: "#0D0D0D",
    onColor8: "",
    onColor9: "",
    onColor10: "#000000"
  }
};

const themes: Themes = {
  light: lightTheme,
  dark: darkTheme
};


// -------------------- Paletas emparelhadas --------------------
const defaultPalettes = [
  {
    name: "laranja",
    label: "Laranja",
    overridesLight: {
      color6: "#ff8a00",
      color7: "#ffb86b",
      color8: "#FFD6A6",
      color9: "#FFB380"
    },
    overridesDark: {
      color6: "#ffb84d",
      color7: "#c06d00",
      color8: "#4b2e00",
      color9: "#663f00",
      onColor6: "#000000",
      onColor7: "#ffffff"
    },
    description: "Paleta vibrante laranja"
  },
  {
    name: "verde",
    label: "Verde",
    overridesLight: {
      color6: "#4CAF50",
      color7: "#2E7D32",
      color8: "#A5D6A7",
      color9: "#81C784"
    },
    overridesDark: {
      color6: "#66cc77",
      color7: "#2e7d32",
      color8: "#103214",
      color9: "#0f3a12",
      onColor6: "#000000"
    },
    description: "Paleta verde mais suave"
  },
  {
    name: "azul",
    label: "Azul",
    overridesLight: {
      color6: "#0066FF",
      color7: "#0047b3",
      color8: "#99CCFF",
      color9: "#66AAFF"
    },
    overridesDark: {
      color6: "#6fa8ff",
      color7: "#0047b3",
      color8: "#001f3f",
      color9: "#002a5c",
      onColor6: "#000000"
    },
    description: "Paleta azul clássica"
  },
  {
    name: "vermelho",
    label: "Vermelho",
    overridesLight: {
      color6: "#F44336",
      color7: "#D32F2F",
      color8: "#FFCDD2",
      color9: "#E57373"
    },
    overridesDark: {
      color6: "#E57373",
      color7: "#B71C1C",
      color8: "#4E0B0B",
      color9: "#7F1313",
      onColor6: "#000000"
    },
    description: "Paleta vermelha intensa"
  },
  {
    name: "roxo",
    label: "Roxo",
    overridesLight: {
      color6: "#9C27B0",
      color7: "#7B1FA2",
      color8: "#E1BEE7",
      color9: "#CE93D8"
    },
    overridesDark: {
      color6: "#CE93D8",
      color7: "#6A1B9A",
      color8: "#2C0B3E",
      color9: "#4A148C",
      onColor6: "#000000"
    },
    description: "Paleta roxa elegante"
  },
  {
    name: "amarelo",
    label: "Amarelo",
    overridesLight: {
      color6: "#FFEB3B",
      color7: "#FBC02D",
      color8: "#FFF9C4",
      color9: "#FFF59D"
    },
    overridesDark: {
      color6: "#FFF59D",
      color7: "#F9A825",
      color8: "#4D4B0B",
      color9: "#7F7A13",
      onColor6: "#000000"
    },
    description: "Paleta amarela energética"
  },
  {
    name: "rosa",
    label: "Rosa",
    overridesLight: {
      color6: "#E91E63",
      color7: "#C2185B",
      color8: "#F8BBD0",
      color9: "#F48FB1"
    },
    overridesDark: {
      color6: "#F48FB1",
      color7: "#AD1457",
      color8: "#5D092B",
      color9: "#880E4F",
      onColor6: "#000000"
    },
    description: "Paleta rosa charmosa"
  },
  {
    name: "ciano",
    label: "Ciano",
    overridesLight: {
      color6: "#00BCD4",
      color7: "#0097A7",
      color8: "#B2EBF2",
      color9: "#80DEEA"
    },
    overridesDark: {
      color6: "#80DEEA",
      color7: "#00838F",
      color8: "#00343A",
      color9: "#006064",
      onColor6: "#000000"
    },
    description: "Paleta ciano refrescante"
  },
  {
    name: "turquesa",
    label: "Turquesa",
    overridesLight: {
      color6: "#009688",
      color7: "#00796B",
      color8: "#B2DFDB",
      color9: "#80CBC4"
    },
    overridesDark: {
      color6: "#80CBC4",
      color7: "#00695C",
      color8: "#002B26",
      color9: "#004D40",
      onColor6: "#000000"
    },
    description: "Paleta turquesa moderna"
  },
  {
    name: "indigo",
    label: "Índigo",
    overridesLight: {
      color6: "#3F51B5",
      color7: "#303F9F",
      color8: "#C5CAE9",
      color9: "#9FA8DA"
    },
    overridesDark: {
      color6: "#9FA8DA",
      color7: "#283593",
      color8: "#1A237E",
      color9: "#1A237E",
      onColor6: "#000000"
    },
    description: "Paleta índigo profunda"
  },
  {
    name: "verde-limao",
    label: "Verde-Limão",
    overridesLight: {
      color6: "#CDDC39",
      color7: "#AFB42B",
      color8: "#F0F4C3",
      color9: "#E6EE9C"
    },
    overridesDark: {
      color6: "#E6EE9C",
      color7: "#9E9D24",
      color8: "#3E4010",
      color9: "#827717",
      onColor6: "#000000"
    },
    description: "Paleta verde-limão cítrica"
  },
  {
    name: "ambar",
    label: "Âmbar",
    overridesLight: {
      color6: "#FFC107",
      color7: "#FFA000",
      color8: "#FFECB3",
      color9: "#FFD54F"
    },
    overridesDark: {
      color6: "#FFD54F",
      color7: "#FF8F00",
      color8: "#5F4C02",
      color9: "#FF6F00",
      onColor6: "#000000"
    },
    description: "Paleta âmbar quente"
  },
  {
    name: "marrom",
    label: "Marrom",
    overridesLight: {
      color6: "#795548",
      color7: "#5D4037",
      color8: "#D7CCC8",
      color9: "#BCAAA4"
    },
    overridesDark: {
      color6: "#BCAAA4",
      color7: "#4E342E",
      color8: "#2A1C16",
      color9: "#3E2723",
      onColor6: "#000000"
    },
    description: "Paleta marrom terrosa"
  },
  {
    name: "cinza",
    label: "Cinza",
    overridesLight: {
      color6: "#9E9E9E",
      color7: "#616161",
      color8: "#F5F5F5",
      color9: "#EEEEEE"
    },
    overridesDark: {
      color6: "#BDBDBD",
      color7: "#757575",
      color8: "#303030",
      color9: "#424242",
      onColor6: "#000000"
    },
    description: "Paleta cinza neutra"
  }
];

// -------------------- Utils --------------------
function applyCssVariables(colors: ThemeColors) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  // transforma camelCase em kebab (onColor1 -> on-color1)
  Object.entries(colors).forEach(([key, value]) => {
    const kebab = key.replace(/([A-Z])/g, "-$1").toLowerCase();
    root.style.setProperty(`--${kebab}`, value || "");
  });
}

// mescla baseTheme.colors com overrides (partial). Retorna ThemeColors completo.
function mergeColors(base: ThemeColors, overrides?: Partial<ThemeColors>): ThemeColors {
  // Preenchimento por fallback para garantir todas as chaves
  return {
    color0: overrides?.color0 ?? base.color0,
    color1: overrides?.color1 ?? base.color1,
    color2: overrides?.color2 ?? base.color2,
    color3: overrides?.color3 ?? base.color3,
    color4: overrides?.color4 ?? base.color4,
    color5: overrides?.color5 ?? base.color5,

    color6: overrides?.color6 ?? base.color6,
    color7: overrides?.color7 ?? base.color7,
    color8: overrides?.color8 ?? base.color8,
    color9: overrides?.color9 ?? base.color9,
    color10: overrides?.color10 ?? base.color10,

    onColor1: overrides?.onColor1 ?? base.onColor1,
    onColor2: overrides?.onColor2 ?? base.onColor2,
    onColor3: overrides?.onColor3 ?? base.onColor3,
    onColor4: overrides?.onColor4 ?? base.onColor4,
    onColor5: overrides?.onColor5 ?? base.onColor5,

    onColor6: overrides?.onColor6 ?? base.onColor6,
    onColor7: overrides?.onColor7 ?? base.onColor7,
    onColor8: overrides?.onColor8 ?? base.onColor8,
    onColor9: overrides?.onColor9 ?? base.onColor9,
    onColor10: overrides?.onColor10 ?? base.onColor10
  };
}

// -------------------- Contexto --------------------
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // tema (light/dark)
  const [currentThemeName, setCurrentThemeName] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const stored = storage.getItem(LOCAL_STORAGE_THEME_KEY) as ("light" | "dark") | null;
    return stored === "light" || stored === "dark" ? stored : "light";
  });

  // paleta
  const [paletteName, setPaletteNameState] = useState<PaletteKey>(() => {
    if (typeof window === "undefined") return defaultPalettes[0].name;
    const stored = storage.getItem(LOCAL_STORAGE_PALETTE_KEY) as (string | null);
    return stored || defaultPalettes[0].name;
  });

  // trocar paleta com persistência
  const setPaletteName = (name: PaletteKey) => {
    const found = defaultPalettes.find(p => p.name === name);
    if (!found) {
      console.warn(`[ThemeProvider] palette "${name}" not found`);
      return;
    }
    setPaletteNameState(name);
    if (typeof window !== "undefined") storage.setItem(LOCAL_STORAGE_PALETTE_KEY, name);
  };

  // persist tema
  useEffect(() => {
    if (typeof window !== "undefined") storage.setItem(LOCAL_STORAGE_THEME_KEY, currentThemeName);
  }, [currentThemeName]);

  // pega palette selecionada
  const selectedPalette = defaultPalettes.find(p => p.name === paletteName) ?? defaultPalettes[0];

  // escolhe overrides conforme tema atual (light/dark)
  const paletteOverridesForCurrentTheme =
    currentThemeName === "light" ? selectedPalette.overridesLight : selectedPalette.overridesDark;

  // combina baseTheme + overrides da paleta
  const baseTheme = themes[currentThemeName] ?? themes.light;
  const mergedColors = mergeColors(baseTheme.colors, paletteOverridesForCurrentTheme);
  const mergedTheme: Theme = { name: baseTheme.name, colors: mergedColors };

  // aplica css vars ao document
  useEffect(() => {
    applyCssVariables(mergedColors);
    if (typeof document !== "undefined") {
      document.documentElement.dataset.theme = currentThemeName;
    }
  }, [currentThemeName, paletteName]);

  const toggleTheme = () => {
    setCurrentThemeName(prev => (prev === "light" ? "dark" : "light"));
  };

  const value: ThemeContextType = {
    currentThemeName,
    theme: mergedTheme,
    setCurrentThemeName,
    toggleTheme,
    paletteName,
    setPaletteName,
    palettes: defaultPalettes,
    availablePaletteNames: defaultPalettes.map(p => p.name)
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
