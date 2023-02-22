/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface SessionState {
  user?: User;
  organization?: OrganizationMembership;
  account?: Account;
  accountRole?: string;
  lang?: string;
  dark?: boolean;
  [k: string]: unknown;
}
export interface User {
  email: string;
  id: string;
  name: string;
  organizations: OrganizationMembership[];
  isAdmin?: 0 | 1;
  adminMode?: 0 | 1;
  asAdmin?: UserRef;
  pd?: string;
  ipa?: 0 | 1;
}
export interface OrganizationMembership {
  id: string;
  name: string;
  role: string;
  department?: string;
  departmentName?: string;
  dflt?: boolean;
}
export interface UserRef {
  id: string;
  name: string;
}
export interface Account {
  type: string;
  id: string;
  name: string;
  department?: string;
  departmentName?: string;
}

export const sessionStateSchema = {
  "$id": "https://github.com/data-fair/lib/session-state",
  "type": "object",
  "title": "session state",
  "properties": {
    "user": {
      "$ref": "#/definitions/user"
    },
    "organization": {
      "$ref": "#/definitions/organizationMembership"
    },
    "account": {
      "$ref": "#/definitions/account"
    },
    "accountRole": {
      "type": "string"
    },
    "lang": {
      "type": "string"
    },
    "dark": {
      "type": "boolean"
    }
  },
  "definitions": {
    "organizationMembership": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "id",
        "name",
        "role"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "role": {
          "type": "string"
        },
        "department": {
          "type": "string"
        },
        "departmentName": {
          "type": "string"
        },
        "dflt": {
          "type": "boolean"
        }
      }
    },
    "userRef": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "id",
        "name"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        }
      }
    },
    "user": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "email",
        "id",
        "name",
        "organizations"
      ],
      "properties": {
        "email": {
          "type": "string",
          "format": "email"
        },
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "organizations": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/organizationMembership"
          }
        },
        "isAdmin": {
          "type": "integer",
          "enum": [
            0,
            1
          ]
        },
        "adminMode": {
          "type": "integer",
          "enum": [
            0,
            1
          ]
        },
        "asAdmin": {
          "$ref": "#/definitions/userRef"
        },
        "pd": {
          "type": "string",
          "format": "date"
        },
        "ipa": {
          "type": "integer",
          "enum": [
            0,
            1
          ]
        }
      }
    },
    "account": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "type",
        "id",
        "name"
      ],
      "properties": {
        "type": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "department": {
          "type": "string"
        },
        "departmentName": {
          "type": "string"
        }
      }
    }
  }
}
