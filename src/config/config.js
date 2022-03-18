import _ from 'lodash';
import configJson from './config.json';

let configuration = {};
let configJsonOverride = null;

if (process.env.CONFIG_OVERRIDE) {
    try {
        configJsonOverride = require(process.env.CONFIG_OVERRIDE);
    } catch (e) {
        // Do nothing
    }
}

if (configJsonOverride) {
    configuration = _.defaultsDeep(configJsonOverride, configJson);
}

export default _.defaultsDeep(configuration, configJson);
