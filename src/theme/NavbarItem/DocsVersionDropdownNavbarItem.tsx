import React, {type ReactNode} from 'react';
import DocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import type DocsVersionDropdownNavbarItemType from '@theme/NavbarItem/DocsVersionDropdownNavbarItem';
import type {WrapperProps} from '@docusaurus/types';
import {useActivePluginAndVersion} from '@docusaurus/plugin-content-docs/client';

type Props = WrapperProps<typeof DocsVersionDropdownNavbarItemType>;

/**
 * Zeigt das Versions-Dropdown nur auf Seiten der zugehörigen Add-on-Instanz.
 *
 * In der Navbar ist pro Add-on ein docsVersionDropdown mit eigenem docsPluginId
 * registriert. Ohne diesen Wrapper stünden alle sieben Dropdowns permanent
 * nebeneinander. Wir rendern nur das Dropdown der gerade aktiven Instanz
 * (bzw. gar keines auf der Landing-Page).
 */
export default function DocsVersionDropdownNavbarItemWrapper(
  props: Props,
): ReactNode {
  const active = useActivePluginAndVersion();
  if (active?.activePlugin?.pluginId !== props.docsPluginId) {
    return null;
  }
  return <DocsVersionDropdownNavbarItem {...props} />;
}
