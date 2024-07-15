import { A_AUTH_AppInteractions_APIProvider } from "@adaas/a-auth";
import { A_FOLDER_ContextClass } from "../../../global/A_FOLDER_Context.class";
import { A_FOLDER_SERVER_DELEGATE_TYPES__FolderContentListRequest, A_FOLDER_SERVER_DELEGATE_TYPES__FolderContentListResponse, A_FOLDER_SERVER_DELEGATE_TYPES__FolderCreateRequest, A_FOLDER_SERVER_DELEGATE_TYPES__FolderDeleteRequest, A_FOLDER_SERVER_DELEGATE_TYPES__FolderDeleteResponse, A_FOLDER_SERVER_DELEGATE_TYPES__FolderGetRequest, A_FOLDER_SERVER_DELEGATE_TYPES__FolderGetResponse, A_FOLDER_SERVER_DELEGATE_TYPES__FolderListRequest, A_FOLDER_SERVER_DELEGATE_TYPES__FolderListResponse, A_FOLDER_SERVER_DELEGATE_TYPES__FolderUpdateRequest, A_FOLDER_SERVER_DELEGATE_TYPES__FolderUpdateResponse } from "./A_FOLDER_Folder.types";
/**
 * API Provider for Folders
 */
export declare class A_FOLDER_SERVER_DELEGATE__FolderAPI extends A_AUTH_AppInteractions_APIProvider<A_FOLDER_ContextClass> {
    protected baseURL: string;
    /**
     * Returns list of folders based on User Access
     *
     * @param request
     * @param meta
     * @returns
     */
    list<M = any>(request: A_FOLDER_SERVER_DELEGATE_TYPES__FolderListRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_FOLDER_SERVER_DELEGATE_TYPES__FolderListResponse>;
    /**
     * API returns folder with nested entities such as profile, settings, etc.
     *
     * @param request
     * @param meta
     * @returns
     */
    load<M = any>(request: A_FOLDER_SERVER_DELEGATE_TYPES__FolderGetRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_FOLDER_SERVER_DELEGATE_TYPES__FolderGetResponse>;
    content<M = any>(request: A_FOLDER_SERVER_DELEGATE_TYPES__FolderContentListRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_FOLDER_SERVER_DELEGATE_TYPES__FolderContentListResponse>;
    /**
     *  API creates folder with required dependencies
     *
     * @param request
     * @param meta
     * @returns
     */
    create<M = any>(request: A_FOLDER_SERVER_DELEGATE_TYPES__FolderCreateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<import("../../app-interactions/index.types").A_FOLDER_TYPES__Folder_APIEntity>;
    /**
    * This function is used to create folder
    *
    * @param folder
    * @returns
    */
    update<M = any>(request: A_FOLDER_SERVER_DELEGATE_TYPES__FolderUpdateRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_FOLDER_SERVER_DELEGATE_TYPES__FolderUpdateResponse>;
    /**
     * API to remove folder by its aseid
     *
     * @param request
     * @param meta
     * @returns
     */
    remove<M = any>(request: A_FOLDER_SERVER_DELEGATE_TYPES__FolderDeleteRequest, 
    /**
     * The meta object to pass through API call for error handling or response handling
     */
    meta?: M): Promise<A_FOLDER_SERVER_DELEGATE_TYPES__FolderDeleteResponse>;
}
