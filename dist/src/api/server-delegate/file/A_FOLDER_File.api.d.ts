import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_FOLDER_ContextClass } from "../../../global/A_FOLDER_Context.class";
import { A_FOLDER_SERVER_DELEGATE_TYPES__FileCreateRequest, A_FOLDER_SERVER_DELEGATE_TYPES__FileDeleteRequest, A_FOLDER_SERVER_DELEGATE_TYPES__FileDeleteResponse, A_FOLDER_SERVER_DELEGATE_TYPES__FileGetRequest, A_FOLDER_SERVER_DELEGATE_TYPES__FileGetResponse, A_FOLDER_SERVER_DELEGATE_TYPES__FileListRequest, A_FOLDER_SERVER_DELEGATE_TYPES__FileListResponse, A_FOLDER_SERVER_DELEGATE_TYPES__FileUpdateRequest, A_FOLDER_SERVER_DELEGATE_TYPES__FileUpdateResponse } from "./A_FOLDER_File.types";
/**
 * API Provider for Files
 */
export declare class A_FOLDER_SERVER_DELEGATE__FileAPI extends A_AUTH_AppInteractions_APIProvider<A_FOLDER_ContextClass> {
    protected baseURL: string;
    /**
     * Returns list of files based on User Access
     *
     * @param request
     * @param meta
     * @returns
     */
    list<M = any>(request: A_FOLDER_SERVER_DELEGATE_TYPES__FileListRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_FOLDER_SERVER_DELEGATE_TYPES__FileListResponse>;
    /**
     * API returns file with nested entities such as profile, settings, etc.
     *
     * @param request
     * @param meta
     * @returns
     */
    load<M = any>(request: A_FOLDER_SERVER_DELEGATE_TYPES__FileGetRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_FOLDER_SERVER_DELEGATE_TYPES__FileGetResponse>;
    /**
     *  API creates file with required dependencies
     *
     * @param request
     * @param meta
     * @returns
     */
    create<M = any>(request: A_FOLDER_SERVER_DELEGATE_TYPES__FileCreateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<import("../../app-interactions/index.types").A_FOLDER_TYPES__File_APIEntity>;
    /**
    * This function is used to create file
    *
    * @param file
    * @returns
    */
    update<M = any>(request: A_FOLDER_SERVER_DELEGATE_TYPES__FileUpdateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_FOLDER_SERVER_DELEGATE_TYPES__FileUpdateResponse>;
    /**
     * API to remove file by its aseid
     *
     * @param request
     * @param meta
     * @returns
     */
    remove<M = any>(request: A_FOLDER_SERVER_DELEGATE_TYPES__FileDeleteRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_FOLDER_SERVER_DELEGATE_TYPES__FileDeleteResponse>;
}
