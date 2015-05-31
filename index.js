var name = module.exports.name = 'proxyvator-npm'

var execCP = require('child_process').exec
	, which = require('which')
	, Q = require('q')

var check, clear, exec, setup

check = module.exports.check = function () {
	var deferred

	deferred = Q.defer()

	// Checking npm program
	which('npm', function (error, fullpath) {
		if (error) {
			deferred.reject(new Error(error))
		} else {
			deferred.resolve(fullpath)
		}
	})

	return deferred.promise
}

clear = module.exports.clear = function (options) {
	console.log(name + '::clear')

	check()
		.then(function () {
			console.log(name + '::clear# Not implemented')
		})
		.catch(function (error) {
			console.log(name + '::clear# ERROR:', error)
		})
		.finally()
}

exec = module.exports.exec = function (cmd) {
	var deferred

	deferred = Q.defer()

	// Checking git program
	execCP(cmd, function (error) {
		if (error) {
			deferred.reject(new Error(error))
		} else {
			deferred.resolve()
		}
	})

	return deferred.promise
}

setup = module.exports.setup = function (options) {
	console.log(name + '::setup')

	check()
		.then(function () {
			console.log(name + '::setup# Not implemented')
		})
		.catch(function (error) {
			console.log(name + '::setup# ERROR:', error)
		})
		.finally()
}
