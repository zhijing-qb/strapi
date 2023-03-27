'use strict';

/**
 * npm service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::npm.npm');
