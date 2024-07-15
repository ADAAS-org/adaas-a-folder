import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_FOLDER_ContextClass } from "@adaas/a-sdk/global/A_FOLDER_Context.class";
import {
    A_FOLDER_SERVER_DELEGATE_TYPES__FolderContentListRequest,
    A_FOLDER_SERVER_DELEGATE_TYPES__FolderContentListResponse,
    A_FOLDER_SERVER_DELEGATE_TYPES__FolderCreateRequest,
    A_FOLDER_SERVER_DELEGATE_TYPES__FolderCreateResponse,
    A_FOLDER_SERVER_DELEGATE_TYPES__FolderDeleteRequest,
    A_FOLDER_SERVER_DELEGATE_TYPES__FolderDeleteResponse,
    A_FOLDER_SERVER_DELEGATE_TYPES__FolderGetRequest,
    A_FOLDER_SERVER_DELEGATE_TYPES__FolderGetResponse,
    A_FOLDER_SERVER_DELEGATE_TYPES__FolderListRequest,
    A_FOLDER_SERVER_DELEGATE_TYPES__FolderListResponse,
    A_FOLDER_SERVER_DELEGATE_TYPES__FolderUpdateRequest,
    A_FOLDER_SERVER_DELEGATE_TYPES__FolderUpdateResponse
} from "./A_FOLDER_Folder.types";


/**
 * API Provider for Folders
 */
export class A_FOLDER_SERVER_DELEGATE__FolderAPI extends A_AUTH_AppInteractions_APIProvider<A_FOLDER_ContextClass> {

    protected baseURL: string = this.context.getConfigurationProperty<string>('API_LOCATION');


    /**
     * Returns list of folders based on User Access
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async list<M = any>(
        request: A_FOLDER_SERVER_DELEGATE_TYPES__FolderListRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_FOLDER_SERVER_DELEGATE_TYPES__FolderListResponse, M>(
                '/-s-dlg-/folders',
                request,
                {
                    meta
                }
            );
    }

    /**
     * API returns folder with nested entities such as profile, settings, etc.
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async load<M = any>(
        request: A_FOLDER_SERVER_DELEGATE_TYPES__FolderGetRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_FOLDER_SERVER_DELEGATE_TYPES__FolderGetResponse, M>(
                `/-s-dlg-/folders/${request.folderASEID}`,
                {},
                {
                    meta
                }
            );
    }


    async content<M = any>(
        request: A_FOLDER_SERVER_DELEGATE_TYPES__FolderContentListRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_FOLDER_SERVER_DELEGATE_TYPES__FolderContentListResponse, M>(
                `/-s-dlg-/folders/${request.folderASEID}/content`,
                {
                    ...request.pagination,
                    ...request.filter
                },
                {
                    meta
                }
            );
    }


    /**
     *  API creates folder with required dependencies
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async create<M = any>(
        request: A_FOLDER_SERVER_DELEGATE_TYPES__FolderCreateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .post<A_FOLDER_SERVER_DELEGATE_TYPES__FolderCreateResponse, M>(
                `/-s-dlg-/folders`,
                request,
                {
                    meta
                }
            );
    }


    /**
    * This function is used to create folder
    * 
    * @param folder 
    * @returns 
    */
    async update<M = any>(
        request: A_FOLDER_SERVER_DELEGATE_TYPES__FolderUpdateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .post<A_FOLDER_SERVER_DELEGATE_TYPES__FolderUpdateResponse, M>(
                `/-s-dlg-/folders/${request.aseid}`,
                request,
                {
                    meta
                }
            );
    }


    /**
     * API to remove folder by its aseid
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async remove<M = any>(
        request: A_FOLDER_SERVER_DELEGATE_TYPES__FolderDeleteRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .delete<A_FOLDER_SERVER_DELEGATE_TYPES__FolderDeleteResponse, M>(
                `/-s-dlg-/folders/${request.aseid}`,
                {
                    meta
                }
            );
    }
}

