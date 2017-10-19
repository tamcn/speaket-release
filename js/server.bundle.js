/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(25));
__export(__webpack_require__(26));
__export(__webpack_require__(27));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(23));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(46));


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {"Speaket_database":"Mongoose","Mongoose":{"connection_string":"mongodb://ds159953.mlab.com:59953/speaket","connection_options":{"user":"admin","pass":"speaketprod","useMongoClient":true}}}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(28));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(32));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __webpack_require__(2);
var models_2 = __webpack_require__(8);
var ModelFactory = (function () {
    function ModelFactory() {
    }
    ModelFactory.createModel = function (modelClassName) {
        var model = null;
        switch (modelClassName) {
            case models_1.User.name:
                model = models_2.UserModel;
                break;
            default:
                throw 'Invalid model type';
        }
        return model;
    };
    return ModelFactory;
}());
exports.ModelFactory = ModelFactory;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(33));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(34));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(36));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var plugins_1 = __webpack_require__(40);
var server_routes_1 = __webpack_require__(43);
var serverMethods = [
    {
        name: 'registerPlugins',
        method: plugins_1.registerPlugins
    },
    {
        name: 'registerRoutes',
        method: server_routes_1.registerRoutes
    }
];
var ServerMethods = (function () {
    function ServerMethods(server) {
        this.server = server;
        serverMethods.forEach(function (method) {
            server.method(method.name, method.method, method.options);
        });
    }
    ServerMethods.prototype.registerPlugins = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.server.methods.registerPlugins.call(_this.server);
            resolve();
        });
    };
    ServerMethods.prototype.registerRoutes = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.server.methods.registerRoutes.call(_this.server);
            resolve();
        });
    };
    return ServerMethods;
}());
exports.ServerMethods = ServerMethods;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("hapi");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __webpack_require__(14);
exports.apiConfigurations = [
    user_1.userApiConfiguration
];


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(16));


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Boom = __webpack_require__(51);
var crypto = __webpack_require__(52);
var database_1 = __webpack_require__(29);
var share_1 = __webpack_require__(45);
var UserController = (function () {
    function UserController() {
        this.TOKEN_EXPIRATION_TIME = 3 * 24 * 60 * 60 * 1000;
    }
    UserController.prototype.signUp = function (request, reply) {
        var user = request.payload;
        share_1.userService.addUser(user)
            .then(function (error) {
            if (error === database_1.Error.None) {
                request.cookieAuth.set({ email: user.email });
                reply(JSON.stringify('Login successfully'));
            }
            else if (error === database_1.Error.DuplicateData) {
                reply(Boom.unauthorized('Duplicate email address'));
            }
            else if (error === database_1.Error.InvalidData) {
                reply(Boom.unauthorized('Invalid email address'));
            }
        })
            .catch(function (error) {
            reply(Boom.badImplementation());
        });
    };
    UserController.prototype.signIn = function (request, reply) {
        var email = request.payload.email;
        var password = request.payload.password;
        share_1.userService.validateUser(email, password)
            .then(function (isSuccessful) {
            if (isSuccessful) {
                request.cookieAuth.set({ email: email });
                reply(JSON.stringify('Login successfully'));
            }
            else {
                reply(Boom.unauthorized('Invalid email or password'));
            }
        })
            .catch(function (error) {
            reply(Boom.badImplementation());
        });
    };
    UserController.prototype.signOut = function (request, reply) {
        request.cookieAuth.clear();
        reply(JSON.stringify('Logout successfully'));
    };
    UserController.prototype.getSignInStatus = function (request, reply) {
        reply(request.auth.isAuthenticated);
    };
    UserController.prototype.forgotPassword = function (request, reply) {
        var token = crypto.randomBytes(100).toString('hex');
        var tokenExpireTime = Date.now() + this.TOKEN_EXPIRATION_TIME;
        var resetLink = request.headers.origin + '/reset-password/' + token;
        var email = request.payload.email;
        share_1.userService.addPasswordResetToken(email, token, tokenExpireTime)
            .then(function (error) {
            if (error === database_1.Error.None) {
                return share_1.mailService.sendPasswordResetEmail(email, resetLink);
            }
            else {
                reply(Boom.badData('No account with that email address exists.'));
                return { then: function () { return; } };
            }
        })
            .then(function (response) {
            console.log('Reset email sent');
            reply(JSON.stringify('Email sent successfully'));
        });
    };
    UserController.prototype.resetPassword = function (request, reply) {
        var token = request.payload.token;
        var password = request.payload.password;
        share_1.userService.resetPassword(token, password)
            .then(function (error) {
            if (error === database_1.Error.None) {
                reply(JSON.stringify('Password changed successfully'));
            }
            else if (error === database_1.Error.InvalidData) {
                reply(Boom.badData('Invalid link'));
            }
        });
    };
    UserController.prototype.getTokenStatus = function (request, reply) {
        var token = request.payload.token;
        share_1.userService.isTokenExpired(token)
            .then(function (error) {
            reply(error === database_1.Error.None);
        });
    };
    return UserController;
}());
exports.userController = new UserController();


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var user_validator_1 = __webpack_require__(17);
var user_controller_1 = __webpack_require__(15);
exports.userApiConfiguration = {
    controller: user_controller_1.userController,
    routes: [
        {
            method: 'POST',
            path: '/signup',
            handler: user_controller_1.userController.signUp,
            config: {
                auth: false,
                validate: user_validator_1.signUpValidator
            }
        },
        {
            method: 'POST',
            path: '/signin',
            handler: user_controller_1.userController.signIn,
            config: {
                auth: false,
                validate: user_validator_1.signInValidator
            }
        },
        {
            method: 'GET',
            path: '/signout',
            handler: user_controller_1.userController.signOut,
            config: {
                auth: {
                    strategy: 'cookie',
                },
            }
        },
        {
            method: 'GET',
            path: '/signin/status',
            handler: user_controller_1.userController.getSignInStatus,
            config: {
                auth: {
                    strategy: 'cookie',
                    mode: 'try'
                }
            }
        },
        {
            method: 'POST',
            path: '/forgot-password',
            handler: user_controller_1.userController.forgotPassword,
            config: {
                auth: false,
                validate: user_validator_1.forgotPasswordValidator
            }
        },
        {
            method: 'POST',
            path: '/reset-password',
            handler: user_controller_1.userController.resetPassword,
            config: {
                auth: false,
                validate: user_validator_1.resetPasswordValidator
            }
        },
        {
            method: 'POST',
            path: '/token-status',
            handler: user_controller_1.userController.getTokenStatus,
            config: {
                auth: false,
                validate: user_validator_1.getTokenStatusValidator
            }
        }
    ]
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Joi = __webpack_require__(56);
exports.signInValidator = {
    payload: {
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    }
};
exports.signOutValidator = {
    payload: {}
};
exports.signUpValidator = {
    payload: {
        email: Joi.string().email().required(),
        password: Joi.string().required(),
        roles: Joi.array().items(Joi.string())
    }
};
exports.forgotPasswordValidator = {
    payload: {
        email: Joi.string().email().required()
    }
};
exports.resetPasswordValidator = {
    payload: {
        token: Joi.string().required(),
        password: Joi.string().required(),
    }
};
exports.getTokenStatusValidator = {
    payload: {
        token: Joi.string().required()
    }
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BaseRepository = (function () {
    function BaseRepository(dbContext) {
        this.dbContext = dbContext;
    }
    BaseRepository.prototype.retrieve = function () {
        return this.dbContext.retrieve();
    };
    BaseRepository.prototype.findById = function (id) {
        return this.dbContext.findById(id);
    };
    BaseRepository.prototype.findOne = function (condition) {
        return this.dbContext.findOne(condition);
    };
    BaseRepository.prototype.find = function (condition, fields, options) {
        return this.dbContext.find(condition, fields, options);
    };
    BaseRepository.prototype.create = function (item) {
        return this.dbContext.create(item);
    };
    BaseRepository.prototype.update = function (id, item) {
        return this.dbContext.update(id, item);
    };
    BaseRepository.prototype.delete = function (id) {
        return this.dbContext.delete(id);
    };
    return BaseRepository;
}());
exports.BaseRepository = BaseRepository;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(20));


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Mongoose = __webpack_require__(3);
var MongooseDbClient = (function () {
    function MongooseDbClient(connectionString, connectionOptions) {
        this.connectionString = connectionString;
        this.connectionOptions = connectionOptions;
        Mongoose.Promise = global.Promise;
        this.connection = null;
    }
    MongooseDbClient.prototype.connect = function () {
        if (!this.connection) {
            this.connection = Mongoose.createConnection(this.connectionString, this.connectionOptions);
            this.connection.on('error', console.error.bind(console, 'Database error: '));
            this.connection.on('connected', function () { return console.log('Connected database'); });
            this.connection.on('disconnected', function () { return console.log('Disconnected database'); });
        }
    };
    MongooseDbClient.prototype.disconnect = function () {
        if (this.connection) {
            this.connection.close();
        }
    };
    return MongooseDbClient;
}());
exports.MongooseDbClient = MongooseDbClient;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(22));


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Mongoose = __webpack_require__(3);
var MongooseDbContext = (function () {
    function MongooseDbContext(model) {
        this.model = model;
        Mongoose.Promise = global.Promise;
    }
    MongooseDbContext.prototype.retrieve = function () {
        return this.model.find({}).exec();
    };
    MongooseDbContext.prototype.findById = function (id) {
        return this.model.findById(id).exec();
    };
    MongooseDbContext.prototype.findOne = function (condition) {
        return this.model.findOne(condition).exec()
            .catch(function (error) {
            console.log('failed to find item. Error: ', error);
        });
    };
    MongooseDbContext.prototype.find = function (condition, fields, options) {
        return this.model.find(condition, fields, options).exec();
    };
    MongooseDbContext.prototype.create = function (item) {
        return this.model.create(item)
            .catch(function (error) {
            console.log('failed to create item. Error: ', error);
        });
    };
    MongooseDbContext.prototype.update = function (id, item) {
        return this.model.update({ _id: id }, item).exec()
            .catch(function (error) {
            console.log('failed to create item. Error: ', error);
        });
    };
    MongooseDbContext.prototype.delete = function (id) {
        return this.model.remove({ _id: id }).exec()
            .catch(function (error) {
            console.log('failed to delete item. Error: ', error);
        });
    };
    return MongooseDbContext;
}());
exports.MongooseDbContext = MongooseDbContext;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(18));
__export(__webpack_require__(19));
__export(__webpack_require__(21));


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var factories_1 = __webpack_require__(5);
var constants_1 = __webpack_require__(0);
var internalDbClient = factories_1.DbClientFactory.createDbClient(constants_1.DbClientType.Mongoose);
internalDbClient.connect();
exports.internalConnection = internalDbClient.connection;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DbClientType;
(function (DbClientType) {
    DbClientType["Mongoose"] = "Mongoose";
})(DbClientType = exports.DbClientType || (exports.DbClientType = {}));


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DbName;
(function (DbName) {
    DbName["Speaket"] = "Speaket";
})(DbName = exports.DbName || (exports.DbName = {}));


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Error;
(function (Error) {
    Error["None"] = "None";
    Error["DuplicateData"] = "DuplicateData";
    Error["InvalidData"] = "InvalidData";
    Error["TokenExpired"] = "TokenExpired";
})(Error = exports.Error || (exports.Error = {}));


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(0);
var abstracts_1 = __webpack_require__(1);
var databaseConfig = null;
if (false) {
    databaseConfig = require('../../../config/database/database.config.dev.json');
}
else if (true) {
    databaseConfig = __webpack_require__(4);
}
var DbClientFactory = (function () {
    function DbClientFactory() {
    }
    DbClientFactory.createDbClient = function (dbType) {
        var dbClient = null;
        switch (dbType) {
            case constants_1.DbClientType.Mongoose: {
                dbClient = new abstracts_1.MongooseDbClient(databaseConfig['Mongoose']['connection_string'], databaseConfig['Mongoose']['connection_options']);
                break;
            }
            default: {
                throw 'Invalid database';
            }
        }
        return dbClient;
    };
    return DbClientFactory;
}());
exports.DbClientFactory = DbClientFactory;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(1));
__export(__webpack_require__(0));
__export(__webpack_require__(5));
__export(__webpack_require__(35));


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(0);
var abstracts_1 = __webpack_require__(1);
var model_factory_1 = __webpack_require__(7);
var databaseConfig = null;
if (false) {
    databaseConfig = require('../../../../../../config/database/database.config.dev.json');
}
else if (true) {
    databaseConfig = __webpack_require__(4);
}
var DbContextFactory = (function () {
    function DbContextFactory() {
    }
    DbContextFactory.createDbContext = function (modelClassName) {
        var dbContext = null;
        switch (databaseConfig['Speaket_database']) {
            case constants_1.DbClientType.Mongoose: {
                var model = model_factory_1.ModelFactory.createModel(modelClassName);
                dbContext = new abstracts_1.MongooseDbContext(model);
                break;
            }
            default: {
                throw 'Invalid engine';
            }
        }
        return dbContext;
    };
    return DbContextFactory;
}());
exports.DbContextFactory = DbContextFactory;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(30));
__export(__webpack_require__(7));


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(31));
__export(__webpack_require__(8));
__export(__webpack_require__(9));


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var schemas_1 = __webpack_require__(9);
var connections_1 = __webpack_require__(24);
exports.UserModel = connections_1.internalConnection.model('user', schemas_1.UserSchema);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Mongoose = __webpack_require__(3);
exports.UserSchema = new Mongoose.Schema({
    email: {
        type: String,
        validate: {
            validator: function (value) {
                var regex = new RegExp(['^(([^<>()[\\]\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\.,;:\\s@\"]+)*)',
                    '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.',
                    '[0-9]{1,3}\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'].join(''));
                return regex.test(value);
            },
            message: 'Invalid email'
        },
        required: [true, 'Email required'],
        index: {
            unique: true
        }
    },
    password: {
        type: String,
        validate: {
            validator: function (value) {
                return value.length >= 10;
            },
            message: 'Password must have at least 10 characters'
        },
        required: [true, 'Password required']
    },
    passwordResetToken: {
        type: String,
        default: null
    },
    passwordResetTokenExpireTime: {
        type: Number,
        default: null
    },
    roles: {
        type: [{ type: String, enum: ['user', 'admin'] }],
        default: 'user'
    }
});


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(6));
__export(__webpack_require__(10));


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(37));


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt = __webpack_require__(50);
var abstracts_1 = __webpack_require__(1);
var engines_1 = __webpack_require__(6);
var constants_1 = __webpack_require__(0);
var models_1 = __webpack_require__(2);
var UserRepository = (function (_super) {
    __extends(UserRepository, _super);
    function UserRepository() {
        return _super.call(this, engines_1.DbContextFactory.createDbContext(models_1.User.name)) || this;
    }
    UserRepository.prototype.validateUser = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.findOne({ email: email })
                .then(function (result) {
                if (!!!result) {
                    resolve(false);
                }
                else {
                    bcrypt.compare(password, result.password, function (error, result) {
                        resolve(result);
                    });
                }
            });
        });
    };
    UserRepository.prototype.addUser = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.isExistUser(user)
                .then(function (result) {
                if (result !== true) {
                    return _this.hashPassword(user.password);
                }
                else {
                    resolve(constants_1.Error.DuplicateData);
                    return { then: function () { return; } };
                }
            })
                .then(function (hash) {
                user.password = hash;
                return _this.create(user);
            })
                .then(function (result) {
                if (!!result)
                    resolve(constants_1.Error.None);
                else
                    resolve(constants_1.Error.InvalidData);
            });
        });
    };
    UserRepository.prototype.addPasswordResetToken = function (email, token, expireTime) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.findOne({ email: email })
                .then(function (user) {
                if (user) {
                    user.passwordResetToken = token;
                    user.passwordResetTokenExpireTime = expireTime;
                    return user;
                }
                else {
                    resolve(constants_1.Error.InvalidData);
                    return { then: function () { return; } };
                }
            })
                .then(function (user) {
                return _this.update(user._id, user);
            })
                .then(function (result) {
                if (result.nModified > 0)
                    resolve(constants_1.Error.None);
                else
                    resolve(constants_1.Error.InvalidData);
            });
        });
    };
    UserRepository.prototype.resetPassword = function (token, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var user = null;
            _this.findOne({ passwordResetToken: token })
                .then(function (result) {
                if (result) {
                    result.passwordResetToken = null;
                    result.passwordResetTokenExpireTime = null;
                    user = result;
                    return;
                }
                else {
                    resolve(constants_1.Error.InvalidData);
                    return { then: function () { return; } };
                }
            })
                .then(function () {
                return _this.hashPassword(password);
            })
                .then(function (hash) {
                user.password = hash;
                return _this.update(user._id, user);
            })
                .then(function (result) {
                resolve(constants_1.Error.None);
            });
        });
    };
    UserRepository.prototype.isTokenExpired = function (token) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.findOne({ passwordResetToken: token })
                .then(function (user) {
                if (!user) {
                    resolve(constants_1.Error.InvalidData);
                }
                else {
                    if (user.passwordResetTokenExpireTime > Date.now()) {
                        resolve(constants_1.Error.None);
                    }
                    else {
                        resolve(constants_1.Error.TokenExpired);
                    }
                }
            });
        });
    };
    UserRepository.prototype.isExistUser = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.findOne({ email: user.email })
                .then(function (result) {
                resolve(!!result);
            });
        });
    };
    UserRepository.prototype.hashPassword = function (password) {
        return bcrypt.hash(password, 10);
    };
    return UserRepository;
}(abstracts_1.BaseRepository));
exports.UserRepository = UserRepository;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.authCookiePlugin = {
    require: __webpack_require__(54),
    options: {},
    callback: function () {
        var server = this;
        server.auth.strategy('cookie', 'cookie', {
            password: 'speaket-secret-session-security-password',
            isHttpOnly: false,
            cookie: 'login-cookie',
            isSecure: false,
            ttl: 24 * 60 * 60 * 1000
        });
    }
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.goodPlugin = {
    require: __webpack_require__(53),
    options: {
        reporters: {
            console: [{
                    module: 'good-squeeze',
                    name: 'Squeeze',
                    args: [{
                            response: '*',
                            log: '*'
                        }]
                }, {
                    module: 'good-console'
                }, 'stdout']
        }
    },
    callback: null
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(42));


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.inertPlugin = {
    require: __webpack_require__(55),
    options: {},
    callback: null
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var auth_cookie_plugin_1 = __webpack_require__(38);
var good_plugin_1 = __webpack_require__(39);
var inert_plugin_1 = __webpack_require__(41);
var plugins = [
    auth_cookie_plugin_1.authCookiePlugin,
    good_plugin_1.goodPlugin,
    inert_plugin_1.inertPlugin
];
function registerPlugins() {
    var server = this;
    plugins.forEach(function (plugin) {
        server.register({
            register: plugin.require,
            options: plugin.options
        }, function (err) {
            if (err) {
                throw err;
            }
            if (plugin.callback) {
                plugin.callback.call(server);
            }
        });
    });
}
exports.registerPlugins = registerPlugins;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = __webpack_require__(13);
var fileRouteConfigurations = [
    {
        method: 'GET',
        path: '/',
        handler: {
            file: 'index.html'
        }
    },
    {
        method: 'GET',
        path: '/{param*}',
        handler: {
            file: 'index.html'
        }
    },
    {
        method: 'GET',
        path: '/js/{file*}',
        handler: {
            directory: {
                path: 'js'
            }
        }
    },
    {
        method: 'GET',
        path: '/css/{file*}',
        handler: {
            directory: {
                path: 'css'
            }
        }
    },
    {
        method: 'GET',
        path: '/fonts/{file*}',
        handler: {
            directory: {
                path: 'fonts'
            }
        }
    }
];
function registerRoutes() {
    var server = this;
    fileRouteConfigurations.forEach(function (configuration) {
        server.route(configuration);
    });
    api_1.apiConfigurations.forEach(function (configuration) {
        server.bind(configuration.controller);
        server.route(configuration.routes);
    });
}
exports.registerRoutes = registerRoutes;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Hapi = __webpack_require__(12);
var server_methods_1 = __webpack_require__(11);
var server = new Hapi.Server();
server.connection({
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    routes: {
        cors: {
            origin: ['*'],
            credentials: true
        }
    }
});
var serverMethods = new server_methods_1.ServerMethods(server);
serverMethods.registerPlugins()
    .then(function () { return serverMethods.registerRoutes(); })
    .then(function () {
    server.start(function (err) {
        if (err) {
            throw err;
        }
        console.log("Server running at: " + server.info.uri);
    });
});


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(2));
__export(__webpack_require__(47));


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(48));
__export(__webpack_require__(49));


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer_1 = __webpack_require__(57);
var MailService = (function () {
    function MailService() {
        this.transporter = nodemailer_1.createTransport({
            service: "gmail",
            auth: {
                user: "speaketservice@gmail.com",
                pass: "speaketsupporter"
            }
        });
    }
    MailService.prototype.sendPasswordResetEmail = function (email, resetLink) {
        var mailOptions = {
            from: "speaketservice@gmail.com",
            to: email,
            subject: '[Speaket] Please reset your password',
            html: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.<br>' +
                'Please click on the following link, or paste this into your browser to complete the process:<br><br>' +
                '<a href="' + resetLink + '">' + resetLink + '</a><br><br>' +
                'If you don’t use this link within 3 hours, it will expire.'
        };
        return this.transporter.sendMail(mailOptions);
    };
    return MailService;
}());
exports.MailService = MailService;
exports.mailService = new MailService();


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var repositories_1 = __webpack_require__(10);
var UserService = (function () {
    function UserService(userRepository) {
        this.userRepository = userRepository;
    }
    UserService.prototype.validateUser = function (email, password) {
        return this.userRepository.validateUser(email, password);
    };
    UserService.prototype.addUser = function (user) {
        return this.userRepository.addUser(user);
    };
    UserService.prototype.addPasswordResetToken = function (email, token, expireTime) {
        return this.userRepository.addPasswordResetToken(email, token, expireTime);
    };
    UserService.prototype.resetPassword = function (token, password) {
        return this.userRepository.resetPassword(token, password);
    };
    UserService.prototype.isTokenExpired = function (token) {
        return this.userRepository.isTokenExpired(token);
    };
    return UserService;
}());
exports.UserService = UserService;
exports.userService = new UserService(new repositories_1.UserRepository());


/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("boom");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("good");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("hapi-auth-cookie");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("inert");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("joi");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ })
/******/ ]);