import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const logo = () => (
  <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
    <div>
      <img width={36} height={36} src="/dots.png" alt="Dots Logo"></img>
    </div>
    <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Dots</p>
  </div>
)

const config: DocsThemeConfig = {
  logo,
  head: function UseHead() {
    const { title } = useConfig()
    return (
      <>
        <title>{title ? title : 'Dots'} </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/dots.png" />
      </>
    )
  },
  project: {
    link: 'https://github.com/nhnquang11/dots',
  },
  docsRepositoryBase: 'https://github.com/nhnquang11/dots-docs',
  footer: {
    text: `Dots © ${new Date().getFullYear()}}`,
  },
}

export default config
