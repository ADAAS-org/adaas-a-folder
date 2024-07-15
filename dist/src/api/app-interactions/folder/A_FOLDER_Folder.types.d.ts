import { A_SDK_TYPES__IDefaultPagination, A_SDK_TYPES__IRequestFilter, A_SDK_TYPES__IRequestPagination } from "@adaas/a-sdk-types";
import { A_SDK_TYPES__DeepPartial, A_SDK_TYPES__ExtractProperties, A_SDK_TYPES__Required } from "@adaas/a-sdk-types/dist/src/types/common.types";
export type A_FOLDER_TYPES__Folder_APIEntity = {
    id: number;
    aseid: string;
    /**
    * User who created this organization
    */
    owner: string;
    adaas_sso_role_aseid: string;
    adaas_arc_scope_aseid: string;
    created_at: string;
    updated_at: string;
};
export type A_FOLDER_APP_INTERACTIONS_TYPES__FolderListRequest = {
    pagination: A_SDK_TYPES__IRequestPagination;
    filter: A_SDK_TYPES__IRequestFilter;
};
export type A_FOLDER_APP_INTERACTIONS_TYPES__FolderListResponse = A_SDK_TYPES__IDefaultPagination<A_FOLDER_TYPES__Folder_APIEntity>;
export type A_FOLDER_APP_INTERACTIONS_TYPES__FolderContentListRequest = {
    /**
     * Folder identifier in ADAAS System
     */
    folderASEID: string;
    pagination: A_SDK_TYPES__IRequestPagination;
    filter: A_SDK_TYPES__IRequestFilter;
};
export type A_FOLDER_APP_INTERACTIONS_TYPES__FolderContentListResponse = A_SDK_TYPES__IDefaultPagination<A_FOLDER_TYPES__Folder_APIEntity>;
export type A_FOLDER_APP_INTERACTIONS_TYPES__FolderGetRequest = {
    /**
     * Folder identifier in ADAAS System
     */
    folderASEID: string;
};
export type A_FOLDER_APP_INTERACTIONS_TYPES__FolderGetResponse = A_SDK_TYPES__IDefaultPagination<A_FOLDER_TYPES__Folder_APIEntity>;
export type A_FOLDER_APP_INTERACTIONS_TYPES__FolderCreateRequest = A_SDK_TYPES__ExtractProperties<A_FOLDER_TYPES__Folder_APIEntity, [
]>;
export type A_FOLDER_APP_INTERACTIONS_TYPES__FolderCreateResponse = A_FOLDER_TYPES__Folder_APIEntity;
export type A_FOLDER_APP_INTERACTIONS_TYPES__FolderUpdateRequest = A_SDK_TYPES__Required<A_SDK_TYPES__DeepPartial<A_FOLDER_TYPES__Folder_APIEntity>, [
    'aseid'
]>;
export type A_FOLDER_APP_INTERACTIONS_TYPES__FolderUpdateResponse = A_SDK_TYPES__IDefaultPagination<A_FOLDER_TYPES__Folder_APIEntity>;
export type A_FOLDER_APP_INTERACTIONS_TYPES__FolderDeleteRequest = {
    /**
     * Folder identifier in ADAAS System
     */
    aseid: string;
};
export type A_FOLDER_APP_INTERACTIONS_TYPES__FolderDeleteResponse = {
    status: 'OK' | 'ERROR';
};
export type A_FOLDER_APP_INTERACTIONS_TYPES__FolderBulkMoveRequest = {
    /**
     * Folder identifier in ADAAS System
     */
    aseids: string[];
    /**
     * The destination Folder identifier in ADAAS System
     */
    destination: string;
};
export type A_FOLDER_APP_INTERACTIONS_TYPES__FolderBulkMoveResponse = {
    status: 'OK' | 'ERROR';
};
export type A_FOLDER_APP_INTERACTIONS_TYPES__FolderBulkDeleteRequest = {
    /**
     * Folder identifier in ADAAS System
     */
    aseids: string[];
};
export type A_FOLDER_APP_INTERACTIONS_TYPES__FolderBulkDeleteResponse = {
    status: 'OK' | 'ERROR';
};
