"use client";

import { useEffect } from "react";

type CopyCodeEnhancerProps = {
  containerId: string;
  contentKey: string;
  copyLabel: string;
  copiedLabel: string;
  errorLabel: string;
};

function fallbackCopy(text: string): boolean {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  return copied;
}

async function copyText(text: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  if (!fallbackCopy(text)) {
    throw new Error("Copy failed");
  }
}

export function CopyCodeEnhancer({
  containerId,
  contentKey,
  copyLabel,
  copiedLabel,
  errorLabel,
}: CopyCodeEnhancerProps) {
  useEffect(() => {
    const container = document.getElementById(containerId);

    if (!container) {
      return;
    }

    const cleanups: Array<() => void> = [];
    const frames = Array.from(
      container.querySelectorAll<HTMLElement>(".code-frame"),
    );

    for (const frame of frames) {
      if (frame.querySelector(".code-copy")) {
        continue;
      }

      const code = frame.querySelector("pre code");

      if (!code) {
        continue;
      }

      const button = document.createElement("button");
      button.type = "button";
      button.className = "code-copy";
      button.textContent = copyLabel;
      button.setAttribute("aria-label", copyLabel);
      button.setAttribute("aria-live", "polite");

      let timeout: number | undefined;

      const reset = () => {
        button.textContent = copyLabel;
        button.setAttribute("aria-label", copyLabel);
        delete button.dataset.copied;
      };

      const onClick = async () => {
        window.clearTimeout(timeout);

        try {
          await copyText(code.textContent ?? "");
          button.textContent = copiedLabel;
          button.setAttribute("aria-label", copiedLabel);
          button.dataset.copied = "true";
        } catch {
          button.textContent = errorLabel;
          button.setAttribute("aria-label", errorLabel);
          delete button.dataset.copied;
        }

        timeout = window.setTimeout(reset, 2200);
      };

      button.addEventListener("click", onClick);
      frame.appendChild(button);

      cleanups.push(() => {
        window.clearTimeout(timeout);
        button.removeEventListener("click", onClick);
        button.remove();
      });
    }

    return () => {
      for (const cleanup of cleanups) {
        cleanup();
      }
    };
  }, [
    containerId,
    contentKey,
    copyLabel,
    copiedLabel,
    errorLabel,
  ]);

  return null;
}
