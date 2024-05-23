import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo:
    <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
      <div>
        <img width={36} height={36} src="/dots.png"></img>
      </div>
      <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Dots</p>
    </div>,
  project: {
    link: 'https://github.com/nhnquang11/dots',
  },
  docsRepositoryBase: 'https://github.com/nhnquang11/dots-docs',
  footer: {
    text: 'Dots © 2024',
  },
}

export default config
