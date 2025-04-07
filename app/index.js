import Generator from 'yeoman-generator'
import _s from 'underscore.string'
import fullName from 'fullname'
import { usernameSync } from 'username'
import { execSync } from 'node:child_process'

const domainRegex = /^(((?!-))(xn--|_)?[a-z0-9-]{0,61}[a-z0-9]{1,1}\.)*(xn--)?([a-z0-9][a-z0-9-]{0,60}|[a-z0-9-]{1,30}\.[a-z]{2,})$/

export default class StandardReadmeGenerator extends Generator {
  /**
   * @param {string[]} args
   * @param {import('yeoman-generator').BaseOptions} options
   * @param {import('yeoman-generator').BaseFeatures?} features
   */
  constructor (args, options, features = {}) {
    // Suppress log about `package.json` being unchanged.
    features.customInstallTask = true
    super(args, options, features)

    this.props = {}
    /** @type {import('yeoman-generator').PromptQuestions} */
    this.promptQuestions = [
      {
        name: 'moduleName',
        message: 'What is the name of your module?',
        default: this.appname.replace(/\s/g, '-'),
        filter: x => _s.slugify(x)
      }, {
        name: 'description',
        message: 'What is the description of this module?',
        store: true,
        validate: x => x.length > 0 ? true : 'You have to provide a module description'
      }, {
        name: 'banner',
        message: 'Do have a banner image?',
        type: 'confirm',
        default: false
      }, {
        name: 'bannerPath',
        message: 'Where is the banner image? Ex: \'img/banner.png\'',
        type: 'input',
        when: (answers) => answers.banner
      }, {
        name: 'badge',
        message: 'Do you want a standard-readme compliant badge?',
        type: 'confirm',
        default: true
      }, {
        name: 'badges',
        message: 'Do you want a TODO dropped where more badges should be?',
        type: 'confirm',
        default: false
      }, {
        name: 'longDescription',
        message: 'Do you want a TODO dropped where your long description should be?',
        type: 'confirm',
        default: true
      }, {
        name: 'security',
        message: 'Do you need a prioritized security section?',
        type: 'confirm',
        default: false
      }, {
        name: 'background',
        message: 'Do you need a background section?',
        type: 'confirm',
        default: false
      }, {
        name: 'API',
        message: 'Do you need an API section?',
        type: 'confirm',
        default: false
      }, {
        name: 'hostedDomain',
        message: 'Where is the project hosted?',
        type: 'input',
        default: 'github.com',
        validate: (val) => {
          return domainRegex.test(val) ? true : 'You must enter a domain where the project is hosted.'
        }
      }, {
        name: 'mainMaintainer',
        message: 'What is the username of the main maintainer?',
        type: 'input',
        default: async () => {
          let defaultMaintainer = usernameSync() ?? ''
          try {
            defaultMaintainer = execSync('git config user.name', { encoding: 'utf8' }).trim()
          } catch (_) {}

          return defaultMaintainer
        },
        validate: (val) => val.length > 0 ? true : 'You must name a maintainer'
      }, {
        name: 'contributingFile',
        message: 'Do you have a CONTRIBUTING.md file?',
        type: 'confirm',
        default: false
      }, {
        name: 'prs',
        message: 'Are PRs accepted?',
        type: 'confirm',
        default: true
      }, {
        name: 'mit',
        message: 'Is an MIT license OK?',
        type: 'confirm',
        default: true
      }, {
        name: 'license',
        message: 'What is your license?',
        type: 'input',
        validate: (val) => {
          return val.length > 0 ? true : 'You have to provide a license'
        },
        when: x => !x.mit
      }, {
        name: 'licensee',
        message: 'Who is the License holder (probably your name)?',
        type: 'input',
        default: async ({ mainMaintainer }) => {
          return (await fullName()) ?? mainMaintainer
        },
        validate: x => x.length !== 0 ? true : 'You must attribute the license to someone.'
      }, {
        name: 'year',
        message: 'Use the current year?',
        type: 'confirm',
        default: true
      }, {
        name: 'diffYear',
        message: 'What years would you like to specify?',
        type: 'input',
        validate: (val) => {
          return val.length > 0 ? true : 'You must provide a year for the license'
        },
        when: x => !x.year
      }
    ]
  }

  async prompting () {
    this.props = await this.prompt(this.promptQuestions)
  }

  writing () {
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      this.props
    )
  }
}
