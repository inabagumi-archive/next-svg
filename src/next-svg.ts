import { Configuration } from 'webpack'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (nextConfig: any = {}): any => ({
  ...nextConfig,
  webpack(config: Configuration, options): Configuration {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@svgr/webpack',
          options: {
            babel: false
          }
        }
      ]
    })

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options)
    }

    return config
  }
})
