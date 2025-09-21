"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleModeChange = (newMode: "edit" | "preview") => {
    setTheme(newMode === "edit" ? "dark" : "light");
  };

  const currentMode = theme === "dark" ? "edit" : "preview";

  return (
    <div className="flex gap-4 px-2 py-1.5 rounded-sm backdrop-blur-md border border-neutral-800 bg-background">
      <Button
        label="Edit"
        onClick={() => handleModeChange("edit")}
        mode={currentMode}
      />
      <Button
        label="Preview"
        onClick={() => handleModeChange("preview")}
        mode={currentMode}
      />
    </div>
  );
};

interface ButtonProps {
  label: "Edit" | "Preview";
  mode: "edit" | "preview";
  onClick: () => void;
}

const Button = ({ label, mode, onClick }: ButtonProps) => {
  const isActive =
    (label === "Edit" && mode === "edit") ||
    (label === "Preview" && mode === "preview");
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 cursor-pointer"
    >
      <span
        className={cn(
          "size-[6px] inline-block rounded-full outline outline-offset-1 pointer-events-none",
          isActive ? "bg-foreground" : "bg-transparent",
        )}
      />
      <span className="font-mono text-xs uppercase">{label}</span>
    </button>
  );
};
