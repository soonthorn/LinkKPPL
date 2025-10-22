
import type React from 'react';

export interface Link {
  title: string;
  url: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface ProfileData {
  name: string;
  handle: string;
  avatarUrl: string;
  bio: string;
  links: Link[];
  socialLinks: Link[];
}
