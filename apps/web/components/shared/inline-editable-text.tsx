"use client";

import { useRef, useState } from "react";
import { Pencil } from "lucide-react";
import { cn } from "@/lib/utils";

export function InlineEditableText({
  value,
  onSave,
  className,
  inputClassName,
}: {
  value: string;
  onSave: (next: string) => Promise<unknown>;
  className?: string;
  inputClassName?: string;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const [saving, setSaving] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function commit() {
    const trimmed = draft.trim();
    setEditing(false);
    if (!trimmed || trimmed === value) {
      setDraft(value);
      return;
    }
    setSaving(true);
    try {
      await onSave(trimmed);
    } finally {
      setSaving(false);
    }
  }

  if (editing) {
    return (
      <input
        ref={inputRef}
        autoFocus
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            commit();
          }
          if (e.key === "Escape") {
            setDraft(value);
            setEditing(false);
          }
        }}
        onFocus={(e) => e.currentTarget.select()}
        className={cn(
          "rounded-md border border-input bg-background px-2 py-0.5 text-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
          inputClassName,
        )}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        setDraft(value);
        setEditing(true);
      }}
      disabled={saving}
      className={cn(
        "group/edit inline-flex items-center gap-1.5 rounded-md px-1 -mx-1 text-left hover:bg-muted/60 disabled:opacity-50",
        className,
      )}
      title="Click to rename"
    >
      <span className={saving ? "opacity-50" : undefined}>{value}</span>
      <Pencil className="size-3 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover/edit:opacity-100" />
    </button>
  );
}
