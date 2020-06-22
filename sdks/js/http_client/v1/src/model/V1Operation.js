// Copyright 2018-2020 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.1.0-rc0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1Cache from './V1Cache';
import V1Component from './V1Component';
import V1Param from './V1Param';
import V1Plugins from './V1Plugins';
import V1Termination from './V1Termination';
import V1TriggerPolicy from './V1TriggerPolicy';

/**
 * The V1Operation model module.
 * @module model/V1Operation
 * @version 1.1.0-rc0
 */
class V1Operation {
    /**
     * Constructs a new <code>V1Operation</code>.
     * @alias module:model/V1Operation
     */
    constructor() { 
        
        V1Operation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Operation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Operation} obj Optional instance to populate.
     * @return {module:model/V1Operation} The populated <code>V1Operation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Operation();

            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('profile')) {
                obj['profile'] = ApiClient.convertToType(data['profile'], 'String');
            }
            if (data.hasOwnProperty('queue')) {
                obj['queue'] = ApiClient.convertToType(data['queue'], 'String');
            }
            if (data.hasOwnProperty('cache')) {
                obj['cache'] = V1Cache.constructFromObject(data['cache']);
            }
            if (data.hasOwnProperty('schedule')) {
                obj['schedule'] = ApiClient.convertToType(data['schedule'], Object);
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], [Object]);
            }
            if (data.hasOwnProperty('matrix')) {
                obj['matrix'] = ApiClient.convertToType(data['matrix'], Object);
            }
            if (data.hasOwnProperty('dependencies')) {
                obj['dependencies'] = ApiClient.convertToType(data['dependencies'], ['String']);
            }
            if (data.hasOwnProperty('trigger')) {
                obj['trigger'] = V1TriggerPolicy.constructFromObject(data['trigger']);
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], ['String']);
            }
            if (data.hasOwnProperty('skip_on_upstream_skip')) {
                obj['skip_on_upstream_skip'] = ApiClient.convertToType(data['skip_on_upstream_skip'], 'Boolean');
            }
            if (data.hasOwnProperty('termination')) {
                obj['termination'] = V1Termination.constructFromObject(data['termination']);
            }
            if (data.hasOwnProperty('plugins')) {
                obj['plugins'] = V1Plugins.constructFromObject(data['plugins']);
            }
            if (data.hasOwnProperty('params')) {
                obj['params'] = ApiClient.convertToType(data['params'], {'String': V1Param});
            }
            if (data.hasOwnProperty('run_patch')) {
                obj['run_patch'] = ApiClient.convertToType(data['run_patch'], Object);
            }
            if (data.hasOwnProperty('dag_ref')) {
                obj['dag_ref'] = ApiClient.convertToType(data['dag_ref'], 'String');
            }
            if (data.hasOwnProperty('url_ref')) {
                obj['url_ref'] = ApiClient.convertToType(data['url_ref'], 'String');
            }
            if (data.hasOwnProperty('path_ref')) {
                obj['path_ref'] = ApiClient.convertToType(data['path_ref'], 'String');
            }
            if (data.hasOwnProperty('hub_ref')) {
                obj['hub_ref'] = ApiClient.convertToType(data['hub_ref'], 'String');
            }
            if (data.hasOwnProperty('component')) {
                obj['component'] = V1Component.constructFromObject(data['component']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} version
 */
V1Operation.prototype['version'] = undefined;

/**
 * @member {String} kind
 */
V1Operation.prototype['kind'] = undefined;

/**
 * @member {String} name
 */
V1Operation.prototype['name'] = undefined;

/**
 * @member {String} description
 */
V1Operation.prototype['description'] = undefined;

/**
 * @member {Array.<String>} tags
 */
V1Operation.prototype['tags'] = undefined;

/**
 * @member {String} profile
 */
V1Operation.prototype['profile'] = undefined;

/**
 * @member {String} queue
 */
V1Operation.prototype['queue'] = undefined;

/**
 * @member {module:model/V1Cache} cache
 */
V1Operation.prototype['cache'] = undefined;

/**
 * @member {Object} schedule
 */
V1Operation.prototype['schedule'] = undefined;

/**
 * @member {Array.<Object>} events
 */
V1Operation.prototype['events'] = undefined;

/**
 * @member {Object} matrix
 */
V1Operation.prototype['matrix'] = undefined;

/**
 * @member {Array.<String>} dependencies
 */
V1Operation.prototype['dependencies'] = undefined;

/**
 * @member {module:model/V1TriggerPolicy} trigger
 */
V1Operation.prototype['trigger'] = undefined;

/**
 * @member {Array.<String>} conditions
 */
V1Operation.prototype['conditions'] = undefined;

/**
 * @member {Boolean} skip_on_upstream_skip
 */
V1Operation.prototype['skip_on_upstream_skip'] = undefined;

/**
 * @member {module:model/V1Termination} termination
 */
V1Operation.prototype['termination'] = undefined;

/**
 * @member {module:model/V1Plugins} plugins
 */
V1Operation.prototype['plugins'] = undefined;

/**
 * @member {Object.<String, module:model/V1Param>} params
 */
V1Operation.prototype['params'] = undefined;

/**
 * @member {Object} run_patch
 */
V1Operation.prototype['run_patch'] = undefined;

/**
 * @member {String} dag_ref
 */
V1Operation.prototype['dag_ref'] = undefined;

/**
 * @member {String} url_ref
 */
V1Operation.prototype['url_ref'] = undefined;

/**
 * @member {String} path_ref
 */
V1Operation.prototype['path_ref'] = undefined;

/**
 * @member {String} hub_ref
 */
V1Operation.prototype['hub_ref'] = undefined;

/**
 * @member {module:model/V1Component} component
 */
V1Operation.prototype['component'] = undefined;






export default V1Operation;

