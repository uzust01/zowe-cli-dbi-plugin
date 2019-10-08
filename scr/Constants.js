"use strict";
/*
* This program and the accompanying materials are made available under the terms of the *
* Eclipse Public License v2.0 which accompanies this distribution, and is available at *
* https://www.eclipse.org/legal/epl-v20.html                                      *
*                                                                                 *
* SPDX-License-Identifier: EPL-2.0                                                *
*                                                                                 *
* Copyright Contributors to the Zowe Project.                                     *
*                                                                                 *
*/
exports.__esModule = true;
/**
 * Class to contain Dbi related constants
 * @export
 * @class Constants
 */
var Constants = /** @class */ (function () {
    function Constants() {
    }
    /**
     * Product name for Dbi plugin
     * @type {string}
     * @static
     * @memberof Constants
     */
    Constants.PROD_NAME = "dbi";
    /**
     * Display name for Dbi plugin
     * @type {string}
     * @static
     * @memberof Constants
     */
    Constants.DISPLAY_NAME = "IBM® DbI® Plug-in for Zowe CLI";
    /**
     * The Dbi plugin top level description
     * @type {string}
     * @static
     * @memberof Constants
     */
    Constants.DESCRIPTION = "Track and maintain status of DB2 tables";
    return Constants;
}());
exports.Constants = Constants;
