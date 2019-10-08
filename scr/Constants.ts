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

/**
 * Class to contain Dbi related constants
 * @export
 * @class Constants
 */
export class Constants {
    /**
     * Product name for Dbi plugin
     * @type {string}
     * @static
     * @memberof Constants
     */
    public static readonly PROD_NAME: string = "dbi";

    /**
     * Display name for Dbi plugin
     * @type {string}
     * @static
     * @memberof Constants
     */
    public static readonly DISPLAY_NAME: string = "IBM® DbI® Plug-in for Zowe CLI";

    /**
     * The Dbi plugin top level description
     * @type {string}
     * @static
     * @memberof Constants
     */
    public static readonly DESCRIPTION: string = "Track and maintain status of DB2 tables";
}
