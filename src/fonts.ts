/**
 * Bindet die donamic-Markenschriften lokal ein (self-hosted via @fontsource).
 * So werden keine Schriften von Google-Servern geladen — DSGVO-konform und ohne
 * externe Requests. Eingebunden über clientModules in docusaurus.config.ts.
 *
 * - Outfit: Überschriften (font-family-display der Website)
 * - Instrument Sans: Fließtext (font-family-sans der Website)
 */
import '@fontsource/outfit/400.css';
import '@fontsource/outfit/500.css';
import '@fontsource/outfit/600.css';
import '@fontsource/outfit/700.css';

import '@fontsource/instrument-sans/400.css';
import '@fontsource/instrument-sans/500.css';
import '@fontsource/instrument-sans/600.css';
import '@fontsource/instrument-sans/700.css';
