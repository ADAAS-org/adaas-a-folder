import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_FOLDER_ContextClass } from "@adaas/a-sdk/global/A_FOLDER_Context.class";
import {
    A_FOLDER_SERVER_DELEGATE_TYPES__FileCreateRequest,
    A_FOLDER_SERVER_DELEGATE_TYPES__FileCreateResponse,
    A_FOLDER_SERVER_DELEGATE_TYPES__FileDeleteRequest,
    A_FOLDER_SERVER_DELEGATE_TYPES__FileDeleteResponse,
    A_FOLDER_SERVER_DELEGATE_TYPES__FileGetRequest,
    A_FOLDER_SERVER_DELEGATE_TYPES__FileGetResponse,
    A_FOLDER_SERVER_DELEGATE_TYPES__FileListRequest,
    A_FOLDER_SERVER_DELEGATE_TYPES__FileListResponse,
    A_FOLDER_SERVER_DELEGATE_TYPES__FileUpdateRequest,
    A_FOLDER_SERVER_DELEGATE_TYPES__FileUpdateResponse
} from "./A_FOLDER_File.types";


/**
 * API Provider for Files
 */
export class A_FOLDER_SERVER_DELEGATE__FileAPI extends A_AUTH_AppInteractions_APIProvider<A_FOLDER_ContextClass> {

    protected baseURL: string = this.context.getConfigurationProperty<string>('API_LOCATION');


    /**
     * Returns list of files based on User Access
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async list<M = any>(
        request: A_FOLDER_SERVER_DELEGATE_TYPES__FileListRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_FOLDER_SERVER_DELEGATE_TYPES__FileListResponse, M>(
                '/-s-dlg-/files',
                request,
                {
                    meta
                }
            );
    }

    /**
     * API returns file with nested entities such as profile, settings, etc.
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async load<M = any>(
        request: A_FOLDER_SERVER_DELEGATE_TYPES__FileGetRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .get<A_FOLDER_SERVER_DELEGATE_TYPES__FileGetResponse, M>(
                `/-s-dlg-/files/${request.fileASEID}`,
                {},
                {
                    meta
                }
            );
    }



    /**
     *  API creates file with required dependencies
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async create<M = any>(
        request: A_FOLDER_SERVER_DELEGATE_TYPES__FileCreateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .post<A_FOLDER_SERVER_DELEGATE_TYPES__FileCreateResponse, M>(
                `/-s-dlg-/files`,
                request,
                {
                    meta
                }
            );
    }


    /**
    * This function is used to create file
    * 
    * @param file 
    * @returns 
    */
    async update<M = any>(
        request: A_FOLDER_SERVER_DELEGATE_TYPES__FileUpdateRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .post<A_FOLDER_SERVER_DELEGATE_TYPES__FileUpdateResponse, M>(
                `/-s-dlg-/files/${request.aseid}`,
                request,
                {
                    meta
                }
            );
    }


    /**
     * API to remove file by its aseid
     * 
     * @param request 
     * @param meta 
     * @returns 
     */
    async remove<M = any>(
        request: A_FOLDER_SERVER_DELEGATE_TYPES__FileDeleteRequest,
        /**
         * The meta object to pass through API call for error handling or response handling
         */
        meta?: M
    ) {
        return await this
            .delete<A_FOLDER_SERVER_DELEGATE_TYPES__FileDeleteResponse, M>(
                `/-s-dlg-/files/${request.aseid}`,
                {
                    meta
                }
            );
    }
}

