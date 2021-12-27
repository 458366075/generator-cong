const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'Your project name?',
        default: this.appname,
      },
      {
        type: 'input',
        name: 'author',
        message: 'Your project author?',
        default: 'cong',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Your project description?',
      },
    ]).then(answers => {
      this.answers = answers
    })
  }
  writing() {
    const { projectName } = this.answers
    const template = this.templatePath('pages-boilerplate')
    const output = this.destinationPath(projectName)
    this.fs.copyTpl(template, output, this.answers)
  }
}