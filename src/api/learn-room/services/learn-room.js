'use strict';

/**
 * learn-room service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::learn-room.learn-room');
