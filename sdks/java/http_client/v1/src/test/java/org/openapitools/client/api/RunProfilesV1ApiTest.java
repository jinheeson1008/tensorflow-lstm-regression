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
import org.openapitools.client.model.V1ListRunProfilesResponse;
import org.openapitools.client.model.V1RunProfile;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for RunProfilesV1Api
 */
@Ignore
public class RunProfilesV1ApiTest {

    private final RunProfilesV1Api api = new RunProfilesV1Api();

    
    /**
     * Create run profile
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createRunProfileTest() throws ApiException {
        String owner = null;
        V1RunProfile body = null;
        V1RunProfile response = api.createRunProfile(owner, body);

        // TODO: test validations
    }
    
    /**
     * Delete run profile
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteRunProfileTest() throws ApiException {
        String owner = null;
        String uuid = null;
        api.deleteRunProfile(owner, uuid);

        // TODO: test validations
    }
    
    /**
     * Get run profile
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getRunProfileTest() throws ApiException {
        String owner = null;
        String uuid = null;
        V1RunProfile response = api.getRunProfile(owner, uuid);

        // TODO: test validations
    }
    
    /**
     * List run profiles names
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listRunProfileNamesTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListRunProfilesResponse response = api.listRunProfileNames(owner, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * List run profiles
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listRunProfilesTest() throws ApiException {
        String owner = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListRunProfilesResponse response = api.listRunProfiles(owner, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * Patch run profile
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void patchRunProfileTest() throws ApiException {
        String owner = null;
        String runProfileUuid = null;
        V1RunProfile body = null;
        V1RunProfile response = api.patchRunProfile(owner, runProfileUuid, body);

        // TODO: test validations
    }
    
    /**
     * Update run profile
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateRunProfileTest() throws ApiException {
        String owner = null;
        String runProfileUuid = null;
        V1RunProfile body = null;
        V1RunProfile response = api.updateRunProfile(owner, runProfileUuid, body);

        // TODO: test validations
    }
    
}
