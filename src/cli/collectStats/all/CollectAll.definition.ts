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

import { ICommandDefinition } from "@zowe/imperative";
import { ErrorHandlerDefinition } from "../error_handler/ErrorHandler.definition";
/**
 * [action] command defintion for the [action] two group. The [action] is of imperative command definition type
 * "group", which means it must have children.
 *
 * In this case, the action is "all" - which will cause handlers to fail in a variety of ways.
 *
 * Property Summary:
 * =================
 * "name" of the [action]. Always a verb (e.g. "imagecopy")
 * "summary" will display when issuing the help for the [group] (e.g. zowe dbi --help)
 * "type" is "group" which means it has children (the [objects])
 * "children" is the set of child definitions (the [objects])
 */
const AllDefinition: ICommandDefinition = {
    name: "all",
    summary: "Diagnose \"all objects [action]\" of the database [objects]",
    description: "[actions] in Zowe CLI are groups of commands. [actions] are always verbs. " +
        "For example, for command \"zowe dbi ds all\", the [action] is \"all\".\n\n" +
        "For this action (\"all\") diagonsis of all db2 object in a database takes place.",
    type: "group",
    children: [ErrorHandlerDefinition]
};

export = AllDefinition;
