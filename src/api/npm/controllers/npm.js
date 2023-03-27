'use strict';

/**
 * npm controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::npm.npm');
