import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type {Options as DocsOptions} from '@docusaurus/plugin-content-docs';

import addons from './addons.json';

/**
 * Zentrale Konfiguration der donamic-Dokumentationsplattform.
 *
 * Pro Add-on wird eine eigene Instanz des Docs-Plugins erzeugt (Multi-Instance).
 * Jede Instanz hat eine eigene Versionierung und ein eigenes Versions-Dropdown.
 * Das Mapping Add-on ↔ Plugin-ID lebt zentral in addons.json und wird sowohl
 * hier als auch von scripts/Release-Docs.ps1 gelesen.
 */

// Erzeugt die Plugin-Instanz-Definition für ein Add-on.
function docsInstance(id: string): [string, DocsOptions] {
  return [
    '@docusaurus/plugin-content-docs',
    {
      id,
      path: `docs-${id}`,
      routeBasePath: id,
      sidebarPath: './sidebars.ts',
      // Kein "Diese Seite bearbeiten"-Link (öffentliche Doku, kein Edit-Workflow).
      editUrl: undefined,
      // Die aktuelle, noch nicht als Version eingefrorene Doku liegt unter /<id>/next/
      // und trägt einen Hinweis-Banner. Sobald der erste Snapshot existiert, liefert
      // Docusaurus automatisch die neueste Version unter /<id>/ aus.
      versions: {
        current: {
          label: 'In Arbeit',
          banner: 'unreleased',
        },
      },
    },
  ];
}

const config: Config = {
  title: 'donamic Dokumentation',
  tagline: 'Handbücher für die donamic i-doit Add-ons',
  favicon: 'img/favicon.ico',

  url: 'https://docs.donamic.de',
  baseUrl: '/',

  organizationName: 'donamic',
  projectName: 'donamic-docs',

  onBrokenLinks: 'throw',

  // .md wird als CommonMark, .mdx als MDX geparst. Erleichtert die Migration
  // bestehender Handbücher (spitze Klammern etc. brechen den Build nicht).
  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      {
        // Die Docs kommen ausschließlich über die Plugin-Instanzen unten.
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // Eine Docs-Instanz pro Add-on, generiert aus der zentralen Registry.
  plugins: addons.map((addon) => docsInstance(addon.id)),

  themeConfig: {
    image: 'img/logo.svg',
    navbar: {
      title: 'donamic Docs',
      logo: {
        alt: 'donamic',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Add-ons',
          position: 'left',
          items: addons.map((addon) => ({
            label: addon.label,
            to: `/${addon.id}/`,
          })),
        },
        // Ein Versions-Dropdown pro Instanz. docsPluginId ist Pflicht, damit das
        // Dropdown weiß, zu welcher Instanz es gehört (Docusaurus-Issue #11364).
        // Der Swizzle-Wrapper unter src/theme blendet jeweils nur das Dropdown der
        // gerade aktiven Instanz ein.
        ...addons.map((addon) => ({
          type: 'docsVersionDropdown' as const,
          docsPluginId: addon.id,
          position: 'right' as const,
        })),
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Add-ons',
          items: addons.map((addon) => ({
            label: addon.label,
            to: `/${addon.id}/`,
          })),
        },
        {
          title: 'donamic',
          items: [
            {label: 'Website', href: 'https://www.donamic.de'},
            {label: 'i-doit', href: 'https://www.i-doit.com'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} donamic GmbH`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
