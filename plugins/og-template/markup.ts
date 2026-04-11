import { html } from 'satori-html'
import backgroundBase64 from './base64'

import type { BgType } from '../../src/types'

export const ogImageMarkup = (
  authorOrBrand: string,
  title: string,
  bgType: BgType
) => {
  if (!['plum', 'dot', 'rose', 'particle'].includes(bgType))
    throw new Error(
      "The value of 'bgType' must be one of the following: 'plum', 'dot', 'rose', 'particle'."
    )

  return html`<div
    tw="relative flex justify-center items-center w-full h-full"
    style="font-family: 'Inter'"
  >
    <img
      tw="absolute inset-0 w-full h-full"
      src="${backgroundBase64[bgType]}"
      alt="open graph"
    />

    <div tw="flex items-center justify-start w-full px-18" style="gap: 20px">
      <div tw="self-start flex justify-center items-center">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" style="enable-background:new 0 0 163.575 163.575;" xml:space="preserve" width="32" height="32">
          <g>
            <g>
              <path x="33.99" y="130.136" style="fill:#FDB51C;" width="2.447" height="33.439" d="M6.649 25.458H7.128V32H6.649V25.458z"/>
              <path x="36.437" y="130.136" style="fill:#F89722;" width="2.447" height="33.439" d="M7.128 25.458H7.607V32H7.128V25.458z"/>
              <path style="fill:#FDB51C;" d="M7.128 25.6s0.001 -4.132 -4.435 -5.795c0 0 -0.201 5.795 4.435 5.795"/>
              <path style="fill:#FDB51C;" d="M7.128 20.107s0.001 -4.132 -4.435 -5.795c0 0 -0.201 5.795 4.435 5.795"/>
              <path style="fill:#FDB51C;" d="M7.128 14.614s0.001 -4.132 -4.435 -5.796c0 0 -0.201 5.796 4.435 5.796"/>
              <path style="fill:#FDB51C;" d="M7.128 10.935V3.023s-4.032 4.233 0 7.912"/>
              <path style="fill:#F89722;" d="M7.128 25.6s-0.001 -4.132 4.435 -5.795c0 0 0.202 5.795 -4.435 5.795"/>
              <path style="fill:#F89722;" d="M7.128 20.107s-0.001 -4.132 4.435 -5.795c0 0 0.202 5.795 -4.435 5.795"/>
              <path style="fill:#F89722;" d="M7.128 14.614S7.127 10.482 11.563 8.819c0 0 0.202 5.796 -4.435 5.796"/>
              <path style="fill:#F89722;" d="M7.128 10.935V3.023s4.031 4.233 0 7.912"/>
            </g>
            <g>
              <path x="79.34" y="114.68" style="fill:#FDB51C;" width="2.447" height="33.439" d="M15.521 22.435H16V28.976H15.521V22.435z"/>
              <path x="81.788" y="114.68" style="fill:#F89722;" width="2.447" height="33.439" d="M16 22.435H16.479V28.976H16V22.435z"/>
              <path style="fill:#FDB51C;" d="M16 22.576s0.001 -4.132 -4.435 -5.795c0 0 -0.202 5.795 4.435 5.795"/>
              <path style="fill:#FDB51C;" d="M16 17.083s0.001 -4.132 -4.435 -5.795c0 0 -0.202 5.795 4.435 5.795"/>
              <path style="fill:#FDB51C;" d="M16 11.591s0.001 -4.132 -4.435 -5.796c0 0 -0.202 5.796 4.435 5.796"/>
              <path style="fill:#FDB51C;" d="M16 7.912V0s-4.032 4.233 0 7.912"/>
              <path style="fill:#F89722;" d="M16 22.576s-0.001 -4.132 4.435 -5.795c0 0 0.201 5.795 -4.435 5.795"/>
              <path style="fill:#F89722;" d="M16 17.083s-0.001 -4.132 4.435 -5.795c0 0 0.201 5.795 -4.435 5.795"/>
              <path style="fill:#F89722;" d="M16 11.591s-0.001 -4.132 4.435 -5.796c0 0 0.201 5.796 -4.435 5.796"/>
              <path style="fill:#F89722;" d="M16 7.912V0s4.031 4.233 0 7.912"/>
            </g>
            <g>
              <path x="124.691" y="130.136" style="fill:#FDB51C;" width="2.447" height="33.439" d="M24.393 25.458H24.872V32H24.393V25.458z"/>
              <path x="127.138" y="130.136" style="fill:#F89722;" width="2.447" height="33.439" d="M24.872 25.458H25.351V32H24.872V25.458z"/>
              <path style="fill:#FDB51C;" d="M24.872 25.6s0.001 -4.132 -4.435 -5.795c0 0 -0.201 5.795 4.435 5.795"/>
              <path style="fill:#FDB51C;" d="M24.872 20.107s0.001 -4.132 -4.435 -5.795c0 0 -0.201 5.795 4.435 5.795"/>
              <path style="fill:#FDB51C;" d="M24.872 14.614s0.001 -4.132 -4.435 -5.796c0 0 -0.201 5.796 4.435 5.796"/>
              <path style="fill:#FDB51C;" d="M24.872 10.935V3.023s-4.032 4.233 0 7.912"/>
              <path style="fill:#F89722;" d="M24.872 25.6s-0.001 -4.132 4.435 -5.795c0 0 0.201 5.795 -4.435 5.795"/>
              <path style="fill:#F89722;" d="M24.872 20.107s-0.001 -4.132 4.435 -5.795c0 0 0.201 5.795 -4.435 5.795"/>
              <path style="fill:#F89722;" d="M24.872 14.614s-0.001 -4.132 4.435 -5.796c0 0 0.201 5.796 -4.435 5.796"/>
              <path style="fill:#F89722;" d="M24.872 10.935V3.023s4.032 4.233 0 7.912"/>
            </g>
          </g>
        </svg>
      </div>

      <div tw="flex flex-col" style="gap: 10px">
        <div tw="text-[#858585] text-2.1rem">${authorOrBrand}</div>
        <div tw="text-white text-3.1rem leading-relaxed mr-18">${title}</div>
      </div>
    </div>
  </div>`
}
