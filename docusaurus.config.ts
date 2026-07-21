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

type Addon = {id: string; version?: string};

// Erzeugt die Plugin-Instanz-Definition für ein Add-on.
function docsInstance(addon: Addon): [string, DocsOptions] {
  const {id, version} = addon;
  return [
    '@docusaurus/plugin-content-docs',
    {
      id,
      path: `docs-${id}`,
      routeBasePath: id,
      sidebarPath: './sidebars.ts',
      // "aktuell = live": Die bearbeitbare Doku in docs-<id>/ wird direkt unter
      // /<id>/ ausgeliefert. Wer eine Seite ändert (auch per "Bearbeiten"-Stift
      // auf GitHub), sieht die Änderung nach dem nächsten Deploy sofort live.
      // Ältere Stände werden bei Bedarf gezielt per scripts/Release-Docs.ps1
      // als Version archiviert und erscheinen dann zusätzlich im Versions-Dropdown.
      lastVersion: 'current',
      // "Diese Seite bearbeiten"-Stift: verlinkt direkt in den GitHub-Web-Editor.
      // versionDocsDirPath ist der Ordner der jeweiligen Version (docs-<id> für die
      // aktuelle, <id>_versioned_docs/version-x für Archivstände), docPath die Datei.
      editUrl: ({versionDocsDirPath, docPath}) =>
        `https://github.com/donamic-de/donamic-docs/edit/main/${versionDocsDirPath}/${docPath}`,
      versions: {
        current: {
          // Zeigt die dokumentierte Add-on-Version als Badge über jeder Seite.
          label: version ? `Version ${version}` : 'Aktuell',
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
  plugins: addons.map((addon) => docsInstance(addon)),

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
