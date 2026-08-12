import { loader } from 'fumadocs-core/source';
import { root } from './shared';
import { defineDocs } from 'fumadocs-mdx/macro';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { icons } from 'lucide-react';
import { createElement } from 'react';

const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: pageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

// See https://fumadocs.dev/docs/headless/source-api for more info
// Applies icons to the pages
export const source = loader({
  baseUrl: root,
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) return;

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);

    // TODO: Check for icon locally
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
