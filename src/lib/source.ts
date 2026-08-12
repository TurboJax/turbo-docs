import { loader } from 'fumadocs-core/source';
import { root } from './shared';
import { defineDocs } from 'fumadocs-mdx/macro';
import { icons as lucide } from 'lucide-react';
import { createElement } from 'react';

const docs = defineDocs({
  dir: 'content/docs'
});

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: root,
  source: docs.toFumadocsSource(),
  icon(icon) {
    // Ignoring undefinded icons
    if (!icon) return;

    // Loading lucide icons
    if (icon in lucide) return createElement(lucide[icon as keyof typeof lucide]);

    // Loading local images
    return createElement("img", {
      src: icon,
      alt: icon,
      style: {
        width: '20px',
        borderRadius: '3px',
      }
    });
  }
});
