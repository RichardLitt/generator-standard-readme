'use strict'
const yeoman = require('yeoman-generator')
const _s = require('underscore.string')

module.exports = yeoman.Base.extend({
  init () {
    const cb = this.async()
    const self = this

    this.prompt([{
      name: 'moduleName',
      message: 'What is the name of your module?',
      default: this.appname.replace(/\s/g, '-'),
      filter: x => _s.slugify(x)
    }, {
      name: 'description',
      message: 'Write a short one-liner describing your module:',
      store: true,
      validate: x => x.length > 0 ? true : 'You must provide a description.'
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
      name: 'security',
      message: 'Do you need a prioritized Security section added to the top of the README?',
      type: 'confirm',
      default: false
    }, {
      name: 'configuration',
      message: 'Do you need a Configuration section?',
      type: 'confirm',
      default: false
    }, {
      name: 'background',
      message: 'Do you need a Background section?',
      type: 'confirm',
      default: false
    }, {
      name: 'API',
      message: 'Do you need an API section?',
      type: 'confirm',
      default: false
    }, {
      name: 'prs',
      message: 'Are PRs accepted? If true, adds a Contribute section with default guidelines.',
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
      default: 'MIT',
      when: x => !x.mit
    }, {
      name: 'licensee',
      message: 'Who is the license holder (probably AffiniPay LLC)?',
      type: 'input',
      validate: x => x.length !== 0 ? true : 'You must attribute the license to someone.'
    }], props => {
      const tpl = {
        API: props.API,
        background: props.background,
        configuration: props.configuration,
        contribute: props.contribute,
        badge: props.badge,
        badges: props.badges,
        banner: props.banner,
        bannerPath: props.bannerPath,
        description: props.description,
        license: props.license,
        licensee: props.licensee,
        overview: props.overview,
        mit: props.mit,
        moduleName: props.moduleName,
        prs: props.prs,
        security: props.security
      }

      self.fs.copyTpl([
        `${self.templatePath()}/README.md`
      ], self.destinationPath(), tpl)

      cb()
    })
  },
  git () {},
  install () {}
})
