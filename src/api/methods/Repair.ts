/*
* This program and the accompanying materials are made available under the terms of the
* Eclipse Public License v2.0 which accompanies this distribution, and is available at
* https://www.eclipse.org/legal/epl-v20.html
*
* SPDX-License-Identifier: EPL-2.0
*
* Copyright Contributors to the Zowe Project.
*
*/

import { ImperativeExpect } from "@zowe/imperative";
import {  } from "@zowe/db2-for-zowe-cli"

/**
 * This class holds helper functions that are used to repair DB2 table status
 * @export
 * @class Repair
 */
export class Repair {

    /**
     * Get an SQL to pass to the DB2 plugins z/OSMF REST API
     * @param {ICopyOptions} reproOpts - contains the options with which to build the string
     * @returns {string} - string to pass to  AMS z/OSMF REST API
     *
     * @throws {ImperativeError}
     * @memberof Repair
     */
    public static getAllRepairSql(listOfTables: any): string {
        ImperativeExpect.toNotBeNullOrUndefined(listOfTables, "Please specify a DB2 Name");

        return "SQL_Start" +
            " -\n SQL_line1( " + listOfTables + " )" +
            "SQL_End" +
            "";
    }
}