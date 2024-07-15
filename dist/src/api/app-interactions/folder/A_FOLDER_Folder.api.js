"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.A_FOLDER_APP_INTERACTIONS__FolderAPI = void 0;
const a_auth_1 = require("@adaas/a-auth");
/**
 * API Provider for Folders
 */
class A_FOLDER_APP_INTERACTIONS__FolderAPI extends a_auth_1.A_AUTH_AppInteractions_APIProvider {
    constructor() {
        super(...arguments);
        this.baseURL = this.context.getConfigurationProperty('API_LOCATION');
    }
    /**
     * Returns list of folders based on User Access
     *
     * @param request
     * @param meta
     * @returns
     */
    list(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get('/folders', request, {
                meta
            });
        });
    }
    /**
     * API returns folder with nested entities such as profile, settings, etc.
     *
     * @param request
     * @param meta
     * @returns
     */
    load(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get(`/folders/${request.folderASEID}`, {}, {
                meta
            });
        });
    }
    content(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .get(`/folders/${request.folderASEID}/content`, Object.assign(Object.assign({}, request.pagination), request.filter), {
                meta
            });
        });
    }
    /**
     *  API creates folder with required dependencies
     *
     * @param request
     * @param meta
     * @returns
     */
    create(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .post(`/folders`, request, {
                meta
            });
        });
    }
    /**
    * This function is used to create folder
    *
    * @param folder
    * @returns
    */
    update(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .post(`/folders/${request.aseid}`, request, {
                meta
            });
        });
    }
    /**
     * API to remove folder by its aseid
     *
     * @param request
     * @param meta
     * @returns
     */
    remove(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .delete(`/folders/${request.aseid}`, {
                meta
            });
        });
    }
    bulkMove(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return this.post(`/folders/bulk/move`, request, { meta });
    }
    bulkRemove(request, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta) {
        return this.post(`/folders/bulk/remove`, request, { meta });
    }
}
exports.A_FOLDER_APP_INTERACTIONS__FolderAPI = A_FOLDER_APP_INTERACTIONS__FolderAPI;
//# sourceMappingURL=A_FOLDER_Folder.api.js.map