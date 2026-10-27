# Fonts

All typefaces are self-hosted. The site ships the WOFF2 files through
[Fontsource](https://fontsource.org/) packages, so no request goes to Google
Fonts or any other third party. Font files are emitted by the Next.js build and
served from the same origin as the pages.

## Theme stacks

| Style | Display | Body | Mono |
| --- | --- | --- | --- |
| Werkstatt | Fraunces Variable | Inter Variable | IBM Plex Mono |
| Konsole | IBM Plex Mono | IBM Plex Mono | IBM Plex Mono |
| Minecraft | Press Start 2P | VT323 | VT323 |
| JTL Nova | Montserrat Variable | Open Sans Variable | Open Sans Variable |
| Hype | Space Grotesk Variable | Inter Variable | IBM Plex Mono |
| Retro 90s | VT323 | VT323 | VT323 |
| Papier | Source Serif 4 Variable | Source Serif 4 Variable | IBM Plex Mono |

The stacks are declared as `--font-display`, `--font-body` and
`--font-mono-stack` in [`src/app/globals.css`](../src/app/globals.css). The
`@font-face` declarations are imported at the top of the same file.

Only the active theme's families are rendered, so the browser only downloads
the files that theme uses. `unicode-range` keeps the variable-font requests to
the Latin subsets needed by German and English copy. Italic files are loaded
only when italic text is actually present.

## Packages

| Family | Package | Axes / weights | Licence |
| --- | --- | --- | --- |
| Fraunces | `@fontsource-variable/fraunces` | `wght` 100-900, italic | OFL-1.1 |
| Inter | `@fontsource-variable/inter` | `wght` 100-900, italic | OFL-1.1 |
| Montserrat | `@fontsource-variable/montserrat` | `wght` 100-900, italic | OFL-1.1 |
| Open Sans | `@fontsource-variable/open-sans` | `wght` 300-800, italic | OFL-1.1 |
| Source Serif 4 | `@fontsource-variable/source-serif-4` | `wght` 200-900, italic | OFL-1.1 |
| Space Grotesk | `@fontsource-variable/space-grotesk` | `wght` 300-700 | OFL-1.1 |
| IBM Plex Mono | `@fontsource/ibm-plex-mono` | 400, 500, 600, 700 | OFL-1.1 |
| Press Start 2P | `@fontsource/press-start-2p` | 400 | OFL-1.1 |
| VT323 | `@fontsource/vt323` | 400 | OFL-1.1 |

The packages are installed as production dependencies and their `LICENSE` files
contain the complete copyright notices. The common licence text follows.

## Copyright notices

- Fraunces: Copyright 2020 The Fraunces Project Authors
  (<https://github.com/undercasetype/Fraunces>)
- Inter: Copyright 2016 The Inter Project Authors
  (<https://github.com/rsms/inter>)
- Montserrat: Copyright 2011 The Montserrat Project Authors
  (<https://github.com/JulietaUla/Montserrat>)
- Open Sans: Copyright 2020 The Open Sans Project Authors
  (<https://github.com/googlefonts/opensans>)
- Source Serif 4: Copyright Google Inc.
- Space Grotesk: Copyright 2020 The Space Grotesk Project Authors
  (<https://github.com/floriankarsten/space-grotesk>)
- IBM Plex Mono: Copyright 2017 IBM Corp. All rights reserved.
- Press Start 2P: Copyright 2012 The Press Start 2P Project Authors
  (cody@zone38.net), with Reserved Font Name "Press Start 2P"
- VT323: Copyright 2011, The VT323 Project Authors (peter.hull@oikoi.com)

## SIL Open Font License 1.1

```text
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded,
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.
```
