type CodeTheme = {
  name: string;
  type: "dark";
  colors: Record<string, string>;
  tokenColors: Array<{
    scope?: string | string[];
    settings: {
      foreground?: string;
      fontStyle?: string;
    };
  }>;
};

export const inkCodeTheme = {
  name: "tctcl-ink",
  type: "dark",
  colors: {
    "editor.background": "#141311",
    "editor.foreground": "#e6e0d4",
    "editor.selectionBackground": "#3a332b",
    "editor.lineHighlightBackground": "#1c1a17",
    "editorCursor.foreground": "#a52b1d",
    "editorWhitespace.foreground": "#3a352e",
  },
  tokenColors: [
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: { foreground: "#7d766b", fontStyle: "italic" },
    },
    {
      scope: [
        "keyword",
        "storage",
        "storage.type",
        "storage.modifier",
        "keyword.control",
      ],
      settings: { foreground: "#c34e3e" },
    },
    {
      scope: ["string", "string.quoted", "markup.inline.raw"],
      settings: { foreground: "#b3b58b" },
    },
    {
      scope: ["constant", "constant.numeric", "constant.language"],
      settings: { foreground: "#c79b6d" },
    },
    {
      scope: ["entity.name.function", "support.function", "meta.function-call"],
      settings: { foreground: "#e2cfb2" },
    },
    {
      scope: ["entity.name.type", "entity.name.class", "support.type"],
      settings: { foreground: "#c9a66f" },
    },
    {
      scope: ["variable", "variable.parameter", "meta.object-literal.key"],
      settings: { foreground: "#d7d0c3" },
    },
    {
      scope: ["punctuation", "meta.brace", "meta.delimiter"],
      settings: { foreground: "#938b7e" },
    },
    {
      scope: ["entity.name.tag", "meta.tag", "support.class.component"],
      settings: { foreground: "#c26452" },
    },
    {
      scope: ["entity.other.attribute-name", "support.type.property-name"],
      settings: { foreground: "#c3a77f" },
    },
    {
      scope: ["markup.heading", "markup.bold"],
      settings: { foreground: "#e6e0d4", fontStyle: "bold" },
    },
    {
      scope: ["markup.italic"],
      settings: { foreground: "#d7d0c3", fontStyle: "italic" },
    },
    {
      scope: ["markup.inserted", "meta.diff.header.to-file"],
      settings: { foreground: "#8f9f77" },
    },
    {
      scope: ["markup.deleted", "meta.diff.header.from-file"],
      settings: { foreground: "#b84635" },
    },
    {
      scope: ["invalid", "invalid.illegal"],
      settings: { foreground: "#f0d5cf" },
    },
  ],
} satisfies CodeTheme;
