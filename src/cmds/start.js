import chalk from 'chalk'
import { generateRoutes } from '../utils/routes'

export default async function (config, args) {
  const routes = await generateRoutes(
    args._[1] || config.get('root'),
    config.get('output')
  )

  console.log(JSON.stringify(routes))
}

export const menu = `
  ${chalk.bold.underline('usage')}

    gitdocs start [dir] [options]

  ${chalk.bold.underline('options')}

    ${chalk.italic.dim('no options yet')}`
