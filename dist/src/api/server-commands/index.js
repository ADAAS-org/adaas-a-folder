"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = exports.Folder = void 0;
const A_FOLDER_Context_class_1 = require("../../global/A_FOLDER_Context.class");
const A_FOLDER_Folder_api_1 = require("./folder/A_FOLDER_Folder.api");
const A_FOLDER_File_api_1 = require("./file/A_FOLDER_File.api");
exports.Folder = new A_FOLDER_Folder_api_1.A_FOLDER_SERVER_COMMANDS__FolderAPI(A_FOLDER_Context_class_1.A_FOLDER_Context);
exports.File = new A_FOLDER_File_api_1.A_FOLDER_SERVER_COMMANDS__FileAPI(A_FOLDER_Context_class_1.A_FOLDER_Context);
//# sourceMappingURL=index.js.map