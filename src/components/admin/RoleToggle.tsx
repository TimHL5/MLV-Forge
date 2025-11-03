"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type ViewMode = "poster" | "doer";

export function RoleToggle() {
  const [viewMode, setViewMode] = useState<ViewMode>("poster");
  const router = useRouter();

  const handleToggle = (mode: ViewMode) => {
    setViewMode(mode);
    if (mode === "poster") {
      router.push("/admin/poster-view");
    } else {
      router.push("/admin/doer-view");
    }
  };

  return (
    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-1">
      <button
        onClick={() => handleToggle("poster")}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
          viewMode === "poster"
            ? "bg-gradient-to-r from-[#6AC670] to-[#F2CF07] text-[#0a0a0a]"
            : "text-white/60 hover:text-white"
        }`}
      >
        Poster View
      </button>
      <button
        onClick={() => handleToggle("doer")}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
          viewMode === "doer"
            ? "bg-gradient-to-r from-[#6AC670] to-[#F2CF07] text-[#0a0a0a]"
            : "text-white/60 hover:text-white"
        }`}
      >
        Doer View
      </button>
    </div>
  );
}
