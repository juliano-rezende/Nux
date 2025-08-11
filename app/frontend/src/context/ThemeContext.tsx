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

// --- DEFINIÇÃO DAS INTERFACES ---
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
  // somente as chaves que a paleta altera (normalmente color6, color7, color8, color9)
  overrides: Partial<ThemeColors>;
}

interface ThemeContextType {
  currentThemeName: "light" | "dark";
  theme: Theme; // theme com as cores já mescladas com a paleta
  setCurrentThemeName: Dispatch<SetStateAction<"light" | "dark">>;
  toggleTheme: () => void;

  // paletas
  paletteName: PaletteKey;
  setPaletteName: (name: PaletteKey) => void;
  palettes: Palette[];
  availablePaletteNames: string[];
}

interface ThemeProviderProps {
  children: ReactNode;
}

// --- STORAGE ---
const storage = new LocalStorageHelper();
const LOCAL_STORAGE_THEME_KEY = "app-theme-name";
const LOCAL_STORAGE_PALETTE_KEY = "app-palette-name";

// --- TEMAS BASE ---
const lightTheme: Theme = {
  name: "light",
  colors: {
    color0: "transparent",
    color1: "#FFFFFF",
    color2: "#F2F2F7",
    color3: "#E5E5EA",
    color4: "#D1D1D6",
    color5: "#1C1C1E",

    color6: "#ff9100ff",
    color7: "#B5E132",
    color8: "",
    color9: "",
    color10: "#FF453A",

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

    color6: "#ff9100ff",
    color7: "#c06d00ff",
    color8: "",
    color9: "",
    color10: "#FF453A",

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

// --- PALETAS PREDEFINIDAS (exemplos) ---
const defaultPalettes: Palette[] = [
  {
    name: "orange",
    overrides: {
      color6: "#ff9100",
      color7: "#c06d00",
      color8: "#FFD6A6",
      color9: "#FFB380"
    }
  },
  {
    name: "green",
    overrides: {
      color6: "#4CAF50",
      color7: "#2E7D32",
      color8: "#A5D6A7",
      color9: "#81C784"
    }
  },
  {
    name: "blue",
    overrides: {
      color6: "#0066FF",
      color7: "#0047b3",
      color8: "#99CCFF",
      color9: "#66AAFF"
    }
  },
  {
    name: "custom-neutral",
    overrides: {
      color6: "#9A9A9A",
      color7: "#707070"
    }
  }
];

// --- CONTEXTO ---
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function applyCssVariables(colors: ThemeColors) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  // converte chaves camelCase em --kebab-case para ser usado no CSS
  Object.entries(colors).forEach(([key, value]) => {
    const kebab = key.replace(/([A-Z])/g, "-$1").toLowerCase(); // onColor1 -> on-color1
    root.style.setProperty(`--${kebab}`, value || "");
  });
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // tema
  const [currentThemeName, setCurrentThemeName] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const stored = storage.getItem(LOCAL_STORAGE_THEME_KEY) as "light" | "dark" | null;
      return stored && (stored === "light" || stored === "dark") ? stored : "light";
    }
    return "light";
  });

  // paleta
  const [paletteName, setPaletteNameState] = useState<PaletteKey>(() => {
    if (typeof window !== "undefined") {
      const stored = storage.getItem(LOCAL_STORAGE_PALETTE_KEY) as string | null;
      return stored || defaultPalettes[0].name;
    }
    return defaultPalettes[0].name;
  });

  // helper pra setar + persistir paleta
  const setPaletteName = (name: PaletteKey) => {
    const found = defaultPalettes.find(p => p.name === name);
    if (!found) {
      console.warn(`[ThemeProvider] palette "${name}" not found`);
      return;
    }
    setPaletteNameState(name);
    if (typeof window !== "undefined") storage.setItem(LOCAL_STORAGE_PALETTE_KEY, name);
  };

  // persistir tema quando muda
  useEffect(() => {
    if (typeof window !== "undefined") {
      storage.setItem(LOCAL_STORAGE_THEME_KEY, currentThemeName);
    }
  }, [currentThemeName]);

  // constrói o theme mesclado (tema base + overrides da paleta)
  const baseTheme = themes[currentThemeName] || themes.light;
  const selectedPalette = defaultPalettes.find(p => p.name === paletteName) ?? defaultPalettes[0];

  // mescla shallow: overrides substituem chaves do baseTheme.colors
  const mergedColors: ThemeColors = {
    ...baseTheme.colors,
    ...(selectedPalette.overrides as Partial<ThemeColors>)
  };

  const mergedTheme: Theme = {
    name: baseTheme.name,
    colors: mergedColors
  };

  // aplica CSS variables sempre que theme ou paleta mudarem
  useEffect(() => {
    applyCssVariables(mergedColors);
    // opcional: você pode também adicionar uma classe no <body> para light/dark
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
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
