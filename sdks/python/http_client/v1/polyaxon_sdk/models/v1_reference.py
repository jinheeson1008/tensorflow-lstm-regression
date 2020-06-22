#!/usr/bin/python
#
# Copyright 2018-2020 Polyaxon, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

    Polyaxon SDKs and REST API specification.  # noqa: E501

    The version of the OpenAPI document: 1.1.0-rc0
    Contact: contact@polyaxon.com
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from polyaxon_sdk.configuration import Configuration


class V1Reference(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        "hub_reference": "V1HubRef",
        "dag_reference": "V1DagRef",
        "url_reference": "V1UrlRef",
        "path_reference": "V1PathRef",
    }

    attribute_map = {
        "hub_reference": "hub_reference",
        "dag_reference": "dag_reference",
        "url_reference": "url_reference",
        "path_reference": "path_reference",
    }

    def __init__(
        self,
        hub_reference=None,
        dag_reference=None,
        url_reference=None,
        path_reference=None,
        local_vars_configuration=None,
    ):  # noqa: E501
        """V1Reference - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._hub_reference = None
        self._dag_reference = None
        self._url_reference = None
        self._path_reference = None
        self.discriminator = None

        if hub_reference is not None:
            self.hub_reference = hub_reference
        if dag_reference is not None:
            self.dag_reference = dag_reference
        if url_reference is not None:
            self.url_reference = url_reference
        if path_reference is not None:
            self.path_reference = path_reference

    @property
    def hub_reference(self):
        """Gets the hub_reference of this V1Reference.  # noqa: E501


        :return: The hub_reference of this V1Reference.  # noqa: E501
        :rtype: V1HubRef
        """
        return self._hub_reference

    @hub_reference.setter
    def hub_reference(self, hub_reference):
        """Sets the hub_reference of this V1Reference.


        :param hub_reference: The hub_reference of this V1Reference.  # noqa: E501
        :type: V1HubRef
        """

        self._hub_reference = hub_reference

    @property
    def dag_reference(self):
        """Gets the dag_reference of this V1Reference.  # noqa: E501


        :return: The dag_reference of this V1Reference.  # noqa: E501
        :rtype: V1DagRef
        """
        return self._dag_reference

    @dag_reference.setter
    def dag_reference(self, dag_reference):
        """Sets the dag_reference of this V1Reference.


        :param dag_reference: The dag_reference of this V1Reference.  # noqa: E501
        :type: V1DagRef
        """

        self._dag_reference = dag_reference

    @property
    def url_reference(self):
        """Gets the url_reference of this V1Reference.  # noqa: E501


        :return: The url_reference of this V1Reference.  # noqa: E501
        :rtype: V1UrlRef
        """
        return self._url_reference

    @url_reference.setter
    def url_reference(self, url_reference):
        """Sets the url_reference of this V1Reference.


        :param url_reference: The url_reference of this V1Reference.  # noqa: E501
        :type: V1UrlRef
        """

        self._url_reference = url_reference

    @property
    def path_reference(self):
        """Gets the path_reference of this V1Reference.  # noqa: E501


        :return: The path_reference of this V1Reference.  # noqa: E501
        :rtype: V1PathRef
        """
        return self._path_reference

    @path_reference.setter
    def path_reference(self, path_reference):
        """Sets the path_reference of this V1Reference.


        :param path_reference: The path_reference of this V1Reference.  # noqa: E501
        :type: V1PathRef
        """

        self._path_reference = path_reference

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(
                    map(lambda x: x.to_dict() if hasattr(x, "to_dict") else x, value)
                )
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(
                    map(
                        lambda item: (item[0], item[1].to_dict())
                        if hasattr(item[1], "to_dict")
                        else item,
                        value.items(),
                    )
                )
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, V1Reference):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V1Reference):
            return True

        return self.to_dict() != other.to_dict()
