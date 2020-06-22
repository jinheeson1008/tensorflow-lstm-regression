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

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.1.0-rc0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiException;
import org.openapitools.client.model.RuntimeError;
import org.openapitools.client.model.V1HubComponent;
import org.openapitools.client.model.V1ListHubComponentsResponse;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for HubComponentsV1Api
 */
@Ignore
public class HubComponentsV1ApiTest {

    private final HubComponentsV1Api api = new HubComponentsV1Api();

    
    /**
     * Create hub component
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createHubComponentTest() throws ApiException {
        String owner = null;
        V1HubComponent body = null;
        V1HubComponent response = api.createHubComponent(owner, body);

        // TODO: test validations
    }
    
    /**
     * Delete hub component
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteHubComponentTest() throws ApiException {
        String owner = null;
        String uuid = null;
        api.deleteHubComponent(owner, uuid);

        // TODO: test validations
    }
    
    /**
     * Get hub component
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getHubComponentTest() throws ApiException {
        String owner = null;
        String uuid = null;
        V1HubComponent response = api.getHubComponent(owner, uuid);

        // TODO: test validations
    }
    
    /**
     * List hub component names
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listHubComponebtNamesTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListHubComponentsResponse response = api.listHubComponebtNames(owner, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * List hub components
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listHubComponentsTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListHubComponentsResponse response = api.listHubComponents(owner, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * Patch hub component
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void patchHubComponentTest() throws ApiException {
        String owner = null;
        String componentUuid = null;
        V1HubComponent body = null;
        V1HubComponent response = api.patchHubComponent(owner, componentUuid, body);

        // TODO: test validations
    }
    
    /**
     * Update hub component
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateHubComponentTest() throws ApiException {
        String owner = null;
        String componentUuid = null;
        V1HubComponent body = null;
        V1HubComponent response = api.updateHubComponent(owner, componentUuid, body);

        // TODO: test validations
    }
    
}
