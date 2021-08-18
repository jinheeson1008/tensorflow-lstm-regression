// Copyright 2018-2021 Polyaxon, Inc.
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
 * The version of the OpenAPI document: 1.11.0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PolyaxonSdk);
  }
}(this, function(expect, PolyaxonSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PolyaxonSdk.V1Schemas();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('V1Schemas', function() {
    it('should create an instance of V1Schemas', function() {
      // uncomment below and update the code to test V1Schemas
      //var instane = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be.a(PolyaxonSdk.V1Schemas);
    });

    it('should have the property earlyStopping (base name: "earlyStopping")', function() {
      // uncomment below and update the code to test the property earlyStopping
      //var instane = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property matrix (base name: "matrix")', function() {
      // uncomment below and update the code to test the property matrix
      //var instane = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property run (base name: "run")', function() {
      // uncomment below and update the code to test the property run
      //var instane = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property operation (base name: "operation")', function() {
      // uncomment below and update the code to test the property operation
      //var instane = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property compiledOperation (base name: "compiledOperation")', function() {
      // uncomment below and update the code to test the property compiledOperation
      //var instane = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property schedule (base name: "schedule")', function() {
      // uncomment below and update the code to test the property schedule
      //var instane = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property connectionSchema (base name: "connectionSchema")', function() {
      // uncomment below and update the code to test the property connectionSchema
      //var instane = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property hpParams (base name: "hpParams")', function() {
      // uncomment below and update the code to test the property hpParams
      //var instane = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property reference (base name: "reference")', function() {
      // uncomment below and update the code to test the property reference
      //var instane = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property artifactsMount (base name: "artifactsMount")', function() {
      // uncomment below and update the code to test the property artifactsMount
      //var instane = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property polyaxonSidecarContainer (base name: "polyaxonSidecarContainer")', function() {
      // uncomment below and update the code to test the property polyaxonSidecarContainer
      //var instane = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property polyaxonInitContainer (base name: "polyaxonInitContainer")', function() {
      // uncomment below and update the code to test the property polyaxonInitContainer
      //var instane = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property artifacs (base name: "artifacs")', function() {
      // uncomment below and update the code to test the property artifacs
      //var instane = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property wasb (base name: "wasb")', function() {
      // uncomment below and update the code to test the property wasb
      //var instane = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property gcs (base name: "gcs")', function() {
      // uncomment below and update the code to test the property gcs
      //var instane = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property s3 (base name: "s3")', function() {
      // uncomment below and update the code to test the property s3
      //var instane = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property auth (base name: "auth")', function() {
      // uncomment below and update the code to test the property auth
      //var instane = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property uri (base name: "uri")', function() {
      // uncomment below and update the code to test the property uri
      //var instane = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property k8sResource (base name: "k8sResource")', function() {
      // uncomment below and update the code to test the property k8sResource
      //var instane = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property connection (base name: "connection")', function() {
      // uncomment below and update the code to test the property connection
      //var instane = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property eventType (base name: "eventType")', function() {
      // uncomment below and update the code to test the property eventType
      //var instane = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property matrixKind (base name: "matrixKind")', function() {
      // uncomment below and update the code to test the property matrixKind
      //var instane = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property scheduleKind (base name: "scheduleKind")', function() {
      // uncomment below and update the code to test the property scheduleKind
      //var instane = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

    it('should have the property event (base name: "event")', function() {
      // uncomment below and update the code to test the property event
      //var instane = new PolyaxonSdk.V1Schemas();
      //expect(instance).to.be();
    });

  });

}));
