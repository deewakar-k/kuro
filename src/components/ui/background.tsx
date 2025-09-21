"use client";

import { DotGrid } from "@paper-design/shaders-react";
import { useTheme } from "next-themes";

export const Background = () => {
  const { theme } = useTheme();

  const dotGridColors = {
    dark: {
      colorBack: "hsl(0, 0%, 6%)",
      colorFill: "hsl(0, 0%, 14%)",
      colorStroke: "hsl(40, 100%, 50%)",
    },
    light: {
      colorBack: "hsl(0, 0%, 98%)",
      colorFill: "hsl(0, 0%, 85%)",
      colorStroke: "hsl(40, 100%, 50%)",
    },
  };

  const currentColors =
    theme === "light" ? dotGridColors.light : dotGridColors.dark;

  return (
    <div className="fixed inset-0 -z-10">
      <DotGrid
        style={{ height: "100vh", width: "100vw" }}
        colorBack={currentColors.colorBack}
        colorFill={currentColors.colorFill}
        colorStroke={currentColors.colorStroke}
        size={1}
        gapX={12}
        gapY={12}
        strokeWidth={0}
        sizeRange={0}
        opacityRange={0}
        shape="circle"
        scale={1}
        rotation={0}
      />
    </div>
  );
};
