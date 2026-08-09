import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitInfo } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: appName,
      url: "/"
    },
    githubUrl: `https://github.com/${gitInfo.user}/${gitInfo.repo}`,
  };
}
