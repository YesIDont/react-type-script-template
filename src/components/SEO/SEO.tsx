import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

type SEOType = {
  article?: boolean;
  description?: string;
  imageUrl?: string;
  siteUrl?: string;
  title?: string;
  twitterUsername?: string;
};

export const SEO: React.FC<SEOType> = ({
  article = false,
  description = 'React.TypeScript App Template with MobX and Styled Components',
  imageUrl = '#',
  siteUrl = '/',
  title = 'React.TS',
  twitterUsername = '',
}) => {
  const { pathname } = useLocation();
  const image = `${siteUrl}${imageUrl}`;
  const url = `${siteUrl}${pathname}`;

  return (
    <Helmet title={title}>
      <meta name='description' content={description} />
      <meta name='image' content={image} />

      {url && <meta property='og:url' content={url} />}
      {(article ? true : undefined) && <meta property='og:type' content='article' />}
      {title && <meta property='og:title' content={title} />}
      {description && <meta property='og:description' content={description} />}
      {image && <meta property='og:image' content={image} />}
      {image && <meta name='twitter:card' content={image} />}
      {twitterUsername && <meta name='twitter:creator' content={twitterUsername} />}
      {title && <meta name='twitter:title' content={title} />}
      {description && <meta name='twitter:description' content={description} />}
      {image && <meta name='twitter:image' content={image} />}

      <link rel='apple-touch-icon' sizes='57x57' href='/apple-touch-icon-57x57.png' />
      <link rel='apple-touch-icon' sizes='60x60' href='/apple-touch-icon-60x60.png' />
      <link rel='apple-touch-icon' sizes='72x72' href='/apple-touch-icon-72x72.png' />
      <link rel='apple-touch-icon' sizes='76x76' href='/apple-touch-icon-76x76.png' />
      <link rel='apple-touch-icon' sizes='114x114' href='/apple-touch-icon-114x114.png' />
      <link rel='apple-touch-icon' sizes='120x120' href='/apple-touch-icon-120x120.png' />
      <link rel='apple-touch-icon' sizes='144x144' href='/apple-touch-icon-144x144.png' />
      <link rel='apple-touch-icon' sizes='152x152' href='/apple-touch-icon-152x152.png' />
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon-180x180.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='192x192' href='/android-chrome-192x192.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#000000' />
      <meta name='msapplication-TileImage' content='/mstile-144x144.png' />
      <meta name='theme-color' content='#ffffff' />
    </Helmet>
  );
};
