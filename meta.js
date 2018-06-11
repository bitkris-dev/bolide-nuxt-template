let asciiBolide = '' +
'    _ _________            __   (_)       __      \n' +
'  _ _ ____  __ )______ ___/ /___ _ ______/ /_____ \n' +
'_ _ _ ___/ __  |_  __ \\__/ / __/ / _/ __  / _/ _ \\ \n' +
'  _ _ __/ /_/ /_/ /_/ /_/ /  _/ /  / /_/ /  /  __/\n' +
'    _ _/_____/  \\____/ /_/   /_/   \\____/   \\___/\n\n' +
'= = = =======================================(*)> \n'

let counter = 0
let spinner = [
	"▒             ▌",
	"▒☼            ▌",
	"▒=☼           ▌",
	"▒==☼          ▌",
	"▒===☼         ▌",
	"▒====☼        ▌",
	"▒ ====☼       ▌",
	"▒  ====☼      ▌",
	"▒   ====☼     ▌",
	"▒    ====☼    ▌",
	"▒     ====☼   ▌",
	"▒      ====☼  ▌",
	"▒       ====☼ ▌",
	"▒         ===✸▌",
	"▒          ==✹▌",
	"▒           =✺▌",
	"▒            ✺▌",
]

let css_frameworks = [
	'• Vuetify',
	'• Buefy',
	'• Element-UI',
	'• Bootstrap-Vue',
	'• AT-UI',
	'• MUSE-UI',
	'• install manually later..'
]

let css_frameworks_commands = [
	` && yarn add vuetify`,
	` && yarn add buefy`,
	` && yarn add element-ui`,
	` && yarn add bootstrap-vue bootstrap@4.0.0-beta.2`,
	` && yarn add at-ui at-ui-style`,
	` && yarn add muse-ui`
]

module.exports = {
	helpers: {
		raw: function(options) {
			return options.fn(this)
		},
		switch: function (value, options) {
			this._switch_value_ = value;
			this._switch_break_ = false;
			var html = options.fn(this);
			delete this._switch_break_;
			delete this._switch_value_;
			return html;
		},
		case: function (value, options) {
			var args = Array.prototype.slice.call(arguments);
			var options = args.pop();
			var caseValues = args;

			if (this._switch_break_ || caseValues.indexOf(this._switch_value_) === -1) {
				return '';
			} else {
				if (options.hash.break === true) {
					this._switch_break_ = true;
				}
				return options.fn(this);
			}
		},
		default: function (options) {
			if (!this._switch_break_) {
				return options.fn(this);
			}
		}
	},
	prompts: {
		name: {
			'type': 'string',
			'required': true,
			'message': 'Project slug name'
		},
		author: {
			'type': 'string',
			'message': 'Author'
		},
		port: {
			'type': 'number',
			'required': false,
			'message': 'In which port will it run?',
			'default': 8080
		},
		seo: {
			'type': 'confirm',
			'message': 'Would you like to configure a basic SEO?',
			'default': true
		},
		title: {
			'when': 'seo',
			'type': 'string',
			'required': false,
			'message': 'SEO: Default page title',
			'default': 'Bolide Nuxt.js!'
		},
		description: {
			'when': 'seo',
			'type': 'string',
			'required': false,
			'message': 'SEO: Default page description',
			'default': 'This is a bolide-template project.'
		},
		fb_app_id: {
			'when': 'seo',
			'type': 'string',
			'required': false,
			'message': 'SEO: Insert a fb:app_id',
			'default': 'none'
		},
		css_framework: {
			'type': 'list',
			'required': false,
			'message': 'Select a CSS framework:',
			'choices': css_frameworks,
			'required': true,
			'default': css_frameworks[css_frameworks.length - 1]
		},
		spa: {
			'type': 'confirm',
			'required': false,
			'message': 'Will it be a SPA?',
			'default': false
		},
		autoSetup: {
			'type': 'confirm',
			'required': false,
			'message': 'Auto install packages?',
			'default': true
		}
	},

	complete (data, {logger, chalk}) {
		const exec = require('child_process').exec
		var title = data.autoSetup ? '[*** Now executing: ***]' : '[*** Next steps: ***]'
		var command = data.inPlace ? `npm run setup` : `cd ${data.destDirName} && npm run setup`

		for (let i = 0; i < css_frameworks.length; i++) {
			if (css_frameworks[i] === data.css_framework) {
				command = command + css_frameworks_commands[i]
			}
		}

		console.log('\n')
		console.log('\x1b[92m' + asciiBolide)
		console.log('\x1b[39m')

		if (data.inPlace) {
			data.autoSetup ?
				console.log(title + `\n\n - npm run setup`)
				: console.log(title + `\n\n - npm run setup\n - npm run dev`)
		} else {
			data.autoSetup ?
				console.log(title + `\n\n - cd ${data.destDirName}\n - npm run setup`)
				: console.log(title + `\n\n - cd ${data.destDirName}\n - npm run setup\n - npm run dev`)
		}

		if (data.autoSetup) {
			console.log('\n')
			console.log('Installing dependencies..')
			console.log('\n')

			var animation = setInterval(a => {
				if (counter >= spinner.length) counter = 0

				process.stdout.clearLine()
				process.stdout.cursorTo(0)
				process.stdout.write('\x1b[92m' + spinner[counter]);
				counter++
			}, 150)

			exec(command, (error, stdout, stderr) => {
				if (error) {
					// console.error(`exec error: ${error}`)
					return
				}

				// if (stdout) { console.log('\x1b[39m'); console.log(`stdout: ${stdout}`) }
				// if (stderr) { console.log('\x1b[39m'); console.log(`stderr: ${stderr}`) }
			}).on('exit', function() {
				console.log('\n')
				console.log('Done.')
				process.stdout.clearLine()
				process.stdout.clearLine()
				clearInterval(animation)
				console.log('\x1b[39m')
			})
		}
	}
}
